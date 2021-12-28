const AWS = require('aws-sdk');

module.exports = {
    DescargarXML(uuid){
        return new Promise(resolve => {
            (async () => {
                const bucketName = 'name-bucket';
                
                const params = {
                    Bucket: bucketName,
                    Key: uuid
                };
                
                var s3 = new AWS.S3({
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    endpoint: new AWS.Endpoint("https://s3.link")
                });

                s3.getObject(params, (err, data) => {
                    if (err)
                    {
                        console.error(err);
                        resolve({ "Codigo" : -1, "Mensaje" : err.message });
                    }
                    else
                    {
                        //fs.writeFileSync(filePath, data.Body.toString());
                        console.log(data.Body.toString());

                        resolve({
                            "Codigo" : 0,
                            "Mensaje" : "",
                            "Archivo" : data.Body.toString()
                        });
                    }
                });
            })();
        });
    }
};