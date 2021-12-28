const axios = require("axios");
const APIEnviarCorreo = require("../API/envioCorreo");

module.exports = {
    POSTBambo(url, pedido){
        return new Promise(resolve => {
            (async () => {
                let mensaje = '';
                console.log("PEDIDO ENVIADO AL SERVICIO EXTERNO");
                console.log(JSON.stringify(pedido));
                let respuesta = await axios.post(url, pedido).
                catch(errorEx => {
                    mensaje = errorEx.response.data;
                });

                let correoElectronico = "servicioaclientes@bambobeauty.com";

                if(mensaje != '')
                {
                    let respuestaCadena = JSON.stringify(mensaje);

                    if(respuestaCadena.includes("\"IdSalida\"") == false)
                    {
                        console.log("La respuesta del servicio externo es un mensaje de error");
                        console.log("SE ENVIARA UNA NOTIFICACION AL CLIENTE");
                        let resultadoEnvio = await APIEnviarCorreo.EnviarCorreoAdjunto(
                            "Urgente revisar error en el pedido " + pedido.number,
                            Buffer.from("Urgente revisar error en el pedido <b>" + pedido.number + "</b><br/><br/>Respuesta del servicio:<br/><br/>" + respuestaCadena, "utf8").toString('base64'),  
                            correoElectronico,
                            null,
                            ""
                        );

                        if(resultadoEnvio.Codigo == 0)
                        {
                            console.log("SE ENVIO LA NOTIFICACION A " + correoElectronico);
                        }
                        else
                        {
                            console.log("ERROR AL ENVIAR LA NOTIFICACION A " + correoElectronico);
                        }

                        console.log(resultadoEnvio.Mensaje);
                        
                        resolve({
                            "Codigo" : -1,
                            "Mensaje" : mensaje
                        });
                    }
                    else
                    {
                        console.log("La respuesta del servicio externo es un mensaje de éxito");

                        resolve({
                            "Codigo" : -1,
                            "Mensaje" : mensaje
                        });
                    }
                }
                else
                {
                    let respuestaCadena = JSON.stringify(respuesta.data);

                    if(respuestaCadena.includes("\"IdSalida\"") == false)
                    {
                        console.log("La respuesta del servicio externo es un mensaje de error");
                        console.log("SE ENVIARA UNA NOTIFICACION AL CLIENTE");
                        let resultadoEnvio = await APIEnviarCorreo.EnviarCorreoAdjunto(
                            "Urgente revisar error en el pedido " + pedido.number,
                            Buffer.from("Urgente revisar error en el pedido <b>" + pedido.number + "</b><br/><br/>Respuesta del servicio:<br/><br/>" + respuestaCadena, "utf8").toString('base64'),  
                            correoElectronico,
                            null,
                            ""
                        );

                        if(resultadoEnvio.Codigo == 0)
                        {
                            console.log("SE ENVIO LA NOTIFICACION A " + correoElectronico);
                        }
                        else
                        {
                            console.log("ERROR AL ENVIAR LA NOTIFICACION A " + correoElectronico);
                        }

                        console.log(resultadoEnvio.Mensaje);
                        
                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : respuesta.data
                        });
                    }
                    else
                    {
                        console.log("La respuesta del servicio externo es un mensaje de éxito");

                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : respuesta.data
                        });
                    }
                }
            })();
        });
    },
    POSTLucenzza(url, orden){
        return new Promise(resolve => {
            (async () => {
                let mensaje = '';
                console.log("orden ENVIADA AL SERVICIO EXTERNO");
                console.log(JSON.stringify(orden));

                let username = 'lucenzza-api';
                let password = 'wm1gjvl80b';
                let token = username + ':' + password;
                const encodedToken = Buffer.from(token).toString('base64');
                const headers = { 'Authorization': 'Basic '+ encodedToken };
                let respuesta = await axios.post(url, orden, { headers }).
                catch(errorEx => {
                    mensaje = errorEx.response.data;
                });

                if(mensaje != '')
                {  
                    resolve({
                        "Codigo" : -1,
                        "Mensaje" : 'error'//mensaje
                    });
                }
                else
                {
                    resolve({
                        "Codigo" : 0,
                        "Mensaje" : 'exito'//respuesta
                    });
                }
                /*then((response) => {
                    if (response.status === 201) {
                       let mensaje = response.data;
                       resolve({
                        "Codigo" : -1,
                        "Mensaje" : mensaje
                        });  
                    }
                }).catch(error => {
                    console.log(error);
                    resolve({
                        "Codigo" : -1,
                        "Mensaje" : error
                    });
                });*/
                
                
                
            })();
        });
    }
};