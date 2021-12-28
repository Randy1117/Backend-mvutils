const AWS = require('aws-sdk');

module.exports = {
    EnviarCorreo(asunto, destinatarios){
        return new Promise(resolve => {
            (async () => {
                if(destinatarios !== null && destinatarios.length > 0)
                {
                    destinatarios = destinatarios.replace(/ /gi, "");
                    let correosElectronicosDestinatarios = destinatarios.split(",");
                    let expresionRegularEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    let emailErroneos = "";

                    correosElectronicosDestinatarios.forEach(element => {
                        console.log(element); 

                        if (expresionRegularEmail.test(element) == false)
                        {
                            if(emailErroneos != "")
                                emailErroneos += ", ";

                            emailErroneos += element;
                        }   
                    });

                    if(emailErroneos != "")
                    {
                        resolve({"Codigo" : -1, "Mensaje" : "Los siguientes correos electrónicos tienen un formato inválido: " + emailErroneos});
                    }
                    else
                    {
                        let configuracion = {
                            apiVersion: process.env.AWS_SES_VERSION,
                            accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
                            region: process.env.AWS_SES_REGION
                        };
        
                        var params = {
                        Source: process.env.AWS_SES_EMAIL_DESDE,
                        /*ReplyToAddresses: [
                            'EMAIL_ADDRESS'
                        ],*/
                        Destination: {
                            ToAddresses: correosElectronicosDestinatarios
                        },
                        Message: {
                            Body: {
                            Html: {
                                Charset: 'UTF-8',
                                Data: 'MENSAJE DEL CORREO'
                            },
                            Text: {
                                Charset: 'UTF-8',
                                Data: 'TEXT DEL CORREO'
                            }
                            },
                            Subject: {
                            Charset: 'UTF-8',
                            Data: asunto
                            }
                        }
                        };
        
                        // Create the promise and SES service object
                        var sendPromise = new AWS.SES(configuracion).sendEmail(params).promise();
        
                        // Handle promise's fulfilled/rejected states
                        sendPromise.then(
                        function(data) {
                            resolve({
                            "Codigo" : 0,
                            "Mensaje" : "",
                            "ID" : data.MessageId
                            });
                        }).catch(
                        function(err) {
                            resolve({ "Codigo" : -1, "Mensaje" : err.message });
                        });
                    }
                }
                else
                {
                    resolve({ "Codigo" : -1, "Mensaje" : "El parámetro 'destinatarios' no puede ser vacío." });
                }
            })();
        });
    },
    EnviarCorreoAdjunto(asunto, plantillaHTMLBase64, destinatarios, archivosAdjuntos, claveAcceso){
        return new Promise(resolve => {
            (async () => {
                try {
                if(destinatarios !== null && destinatarios.length > 0)
                {
                    let destinatariosTemp = destinatarios;
                    destinatariosTemp = destinatariosTemp.replace(/ /gi, "");
                    destinatariosTemp = destinatariosTemp.replace(/,/gi, ", ");

                    destinatarios = destinatarios.replace(/ /gi, "");
                    let correosElectronicosDestinatarios = destinatarios.split(",");
                    let expresionRegularEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    let emailErroneos = "";

                    correosElectronicosDestinatarios.forEach(element => {
                        //console.log(element); 

                        if (expresionRegularEmail.test(element) == false)
                        {
                            if(emailErroneos != "")
                                emailErroneos += ", ";

                            emailErroneos += element;
                        }   
                    });

                    if(emailErroneos != "")
                    {
                        resolve({"Codigo" : -1, "Mensaje" : "Los siguientes correos electrónicos tienen un formato inválido: " + emailErroneos});
                    }
                    else
                    {
                        let configuracion = {
                            apiVersion: process.env.AWS_SES_VERSION,
                            accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
                            region: process.env.AWS_SES_REGION
                        };

                        let buffer = Buffer.from(plantillaHTMLBase64, 'base64');
                        let plantillaHTML = buffer.toString('utf-8');
        
                        var ses_mail = "From: " + process.env.AWS_SES_EMAIL_DESDE + " <" + process.env.AWS_SES_EMAIL_DESDE + ">\n";
                        ses_mail += "To: " + correosElectronicosDestinatarios + "\n";
                        ses_mail += "Subject: " + asunto + "\n";
                        ses_mail += "MIME-Version: 1.0\n";
                        ses_mail += "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
                        ses_mail += "--NextPart\n";
                        ses_mail += "Content-Type: text/html\n\n";
                        ses_mail += plantillaHTML + "\n\n";
                        ses_mail += "--NextPart\n";

                        if(archivosAdjuntos !== null)
                        {
                            archivosAdjuntos.forEach(element => {
                                ses_mail += "Content-Type: application/octet-stream; name=\"" + element[0] + "\"\n";
                                ses_mail += "Content-Transfer-Encoding: base64\n";
                                ses_mail += "Content-Disposition: attachment\n\n";
                                ses_mail += element[1].replace(/([^\0]{76})/g, "$1\n") + "\n\n";
                                ses_mail += "--NextPart\n";
                            });
                        }
                        
                        var params = {
                            RawMessage: {Data: ses_mail},
                            Source: process.env.AWS_SES_EMAIL_DESDE + " <" + process.env.AWS_SES_EMAIL_DESDE + ">'"
                        };

                        //console.log(params);

                        // Create the promise and SES service object
                        var sendPromise = new AWS.SES(configuracion).sendRawEmail(params).promise();

                        // Handle promise's fulfilled/rejected states
                        sendPromise.then(
                        function(data) {
                            resolve({
                            "Codigo" : 0,
                            "Mensaje" : "Mensaje enviado con éxito a " + destinatariosTemp,
                            "ID" : data.MessageId
                            });
                        }).catch(
                        function(err) {
                            resolve({ "Codigo" : -1, "Mensaje" : err.message });
                        });
                    }
                }
                else
                {
                    resolve({ "Codigo" : -1, "Mensaje" : "El parámetro 'destinatarios' no puede ser vacío." });
                }
            } catch (e) {
                console.log('Error:', e.stack);
            }
            })();
        });
    }
};