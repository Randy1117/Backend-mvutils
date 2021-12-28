const router = require("express").Router();
const gt = require("../../woocommerce/productosmv")
const data = require("../../controllers/dataController");



router.post("/enviarCorreo", function(req, res) {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let asunto = req.body.asunto;
      let plantillaHTMLBase64 = req.body.plantillaHTMLBase64;
      let correosElectronicos = req.body.correosElectronicos;
      let archivosAdjuntos = req.body.archivosAdjuntos;
      let claveAcceso = req.body.claveAcceso;
        
      if(typeof asunto === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'asunto' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof plantillaHTMLBase64 === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'plantillaHTMLBase64' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }
  
      if(typeof correosElectronicos === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'correosElectronicos' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof archivosAdjuntos === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'archivosAdjuntos' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }
  
      if(typeof claveAcceso === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'claveAcceso' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(asunto === null || asunto.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'asunto' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(plantillaHTMLBase64 === null)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'plantillaHTMLBase64' no puede ser nulo. Establezca un valor vacío o diferente de vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }
  
      if(correosElectronicos === null || correosElectronicos.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'correosElectronicos' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      /*if(archivosAdjuntos === null || archivosAdjuntos.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'archivosAdjuntos' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }*/
  
      if(claveAcceso === null || claveAcceso.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'claveAcceso' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(claveAcceso != "WEB2021")
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'claveAcceso' es inválido";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      let rspns = await data.enviarCorreo(asunto, plantillaHTMLBase64, correosElectronicos, archivosAdjuntos, claveAcceso);
      res.json(rspns);
    })();
  });

  router.post("/descargarXMLAmazonS3", function(req, res) {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let uuid = req.body.uuid;

      if(typeof uuid === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'uuid' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(uuid === null || uuid.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'uuid' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      let rspns = await data.descargarXMLAmazonS3(uuid);
      res.json(rspns);
    })();
  });

  router.post("/recibirPedidoWooCommerce", function(req, res) {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let pedidoJSON = req.body.pedidoJSON;
      let token = req.body.token;
        
      /*if(typeof order_id === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'order_id' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(order_id === null || order_id.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'order_id' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }*/
      console.log("Datos Pedido Recibido:");
      console.log(pedidoJSON);
      console.log(token);
      res.json( {"Codigo" : "0", "Mensaje" : ""} );
    })();
  });

  router.post("/RVUtilsWooCommerce_GuardarCuenta", function(req, res)
  {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let rfc = req.body.RFC;
      let usuario = req.body.USUARIO;
      let clave = req.body.CLAVE;
        
      if(typeof rfc === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'RFC' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(rfc === null || rfc.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'RFC' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof usuario === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'USUARIO' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(usuario === null || usuario.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'USUARIO' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof clave === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'CLAVE' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(clave === null || clave.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'CLAVE' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(!(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc") &&
        !(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc"))
      {
          codigo  = -1;
          mensaje = "Credenciales inválidas";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      let tipoConexion = "UkVTVA==";
      let tipoSolicitud = "UE9TVA==";
      let url = "aHR0cHM6Ly93bXMtYXBpLXRlc3QuZ3J1cG8tbG9naXN0aWNzLmNvbS9UZXN0L2FwaS9CYW1iby9OdWV2YU9yZGVuP3Rva2VuRGF0YT04NTMxZTQ5Nzk0MzRhNzIwN2QzMzUwZGMyNjc1NmJhNA==";
      let estadoPedido = "Y29tcGxldGVk";

      if(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc")
      {
        tipoConexion = "UkVTVA==";
        tipoSolicitud = "UE9TVA==";
        url = "aHR0cHM6Ly93bXMtYXBpLXRlc3QuZ3J1cG8tbG9naXN0aWNzLmNvbS9UZXN0L2FwaS9CYW1iby9OdWV2YU9yZGVuP3Rva2VuRGF0YT04NTMxZTQ5Nzk0MzRhNzIwN2QzMzUwZGMyNjc1NmJhNA==";
        estadoPedido = "Y29tcGxldGVk";
      }
      else if(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc")
      {
        tipoConexion = "UkVTVA==";
        tipoSolicitud = "UE9TVA==";
        url = "aHR0cHM6Ly9lbmRwb2ludHMub2Vtb2RhLmNvbTo4NDQzL3Jpb25pLWx1Y2VuenphLXNhbmRib3gvb3JkZXJzL2hvb2sv";
        estadoPedido = "cHJvY2Vzc2luZw==";
      }

      res.json( {"Codigo" : "0",
        "Mensaje" : "Tu configuración se ha obtenido con éxito.",
        "TipoConexion" : tipoConexion,
        "TipoSolicitud" : tipoSolicitud,
        "URL" : url,
        "estado_pedido" : estadoPedido
        });
    })();
  });

  router.post("/RVUtilsWooCommerce_GuardarConfiguracion", function(req, res)
  {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let rfc = req.body.RFC;
      let usuario = req.body.USUARIO;
      let clave = req.body.CLAVE;
      let tipoConexion = req.body.TIPO_CONEXION;
      let tipoSolicitud = req.body.TIPO_SOLICITUD;
      let url = req.body.URL;
      let estadoPedido = req.body.ESTADO_PEDIDO;
        
      if(typeof rfc === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'RFC' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(rfc === null || rfc.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'RFC' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof usuario === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'USUARIO' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(usuario === null || usuario.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'USUARIO' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof clave === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'CLAVE' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(clave === null || clave.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'CLAVE' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof tipoConexion === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'TIPO_CONEXION' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(tipoConexion === null || tipoConexion.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'TIPO_CONEXION' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof tipoSolicitud === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'TIPO_SOLICITUD' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(tipoSolicitud === null || tipoSolicitud.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'TIPO_SOLICITUD' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof url === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'URL' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(url === null || url.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'URL' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof estadoPedido === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'ESTADO_PEDIDO' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(estadoPedido === null || estadoPedido.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'ESTADO_PEDIDO' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      res.json( {"Codigo" : "0",
        "Mensaje" : ""
        });
    })();
  });

  router.post("/RVUtilsWooCommerce_CrearPedido", function(req, res)
  {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let rfc = req.body.RFC;
      let usuario = req.body.USUARIO;
      let clave = req.body.CLAVE;
      let tipoConexion = req.body.TIPO_CONEXION;
      let tipoSolicitud = req.body.TIPO_SOLICITUD;
      let url = req.body.URL;
      let pedido = req.body.PEDIDO;
        
      if(typeof rfc === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'RFC' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(rfc === null || rfc.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'RFC' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof usuario === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'USUARIO' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(usuario === null || usuario.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'USUARIO' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof clave === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'CLAVE' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(clave === null || clave.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'CLAVE' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof tipoConexion === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'TIPO_CONEXION' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(tipoConexion === null || tipoConexion.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'TIPO_CONEXION' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof tipoSolicitud === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'TIPO_SOLICITUD' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(tipoSolicitud === null || tipoSolicitud.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'TIPO_SOLICITUD' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof url === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'URL' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(url === null || url.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'URL' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof pedido === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'PEDIDO' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(pedido === null || pedido.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'PEDIDO' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(!(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc") &&
        !(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc"))
      {
          codigo  = -1;
          mensaje = "Credenciales inválidas";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      console.log(rfc);
      console.log(usuario);
      console.log(clave);
      console.log(tipoConexion);
      console.log(tipoSolicitud);
      console.log(url);
      console.log("PEDIDO RECIBIDO EN API REST");
      console.log(JSON.stringify(pedido));

      let rspns = '';

      if(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc")
      {
        console.log("BAMBO");
        rspns = await data.crearPedidoBambo(rfc, usuario, clave, tipoConexion, tipoSolicitud, url, pedido);
      }
      else if(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc")
      {
        console.log("LUCENZZA");
        rspns = await data.crearPedidoLucenzza(rfc, usuario, clave, tipoConexion, tipoSolicitud, url, pedido);
      }

      res.json(rspns);
      console.log("RESPUESTA FINAL DEL API REST");
      console.log(JSON.stringify(rspns));
    })();
  });

  router.get("/RVUtilsWooCommerce_ObtenerPedido", function(req, res)
  {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let rfc = req.body.RFC;
      let usuario = req.body.USUARIO;
      let clave = req.body.CLAVE;
      let numeroorden = req.query.orden;
        
      if(typeof rfc === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'RFC' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(rfc === null || rfc.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'RFC' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof usuario === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'USUARIO' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(usuario === null || usuario.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'USUARIO' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof clave === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'CLAVE' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(clave === null || clave.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'CLAVE' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof numeroorden === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'orden' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(numeroorden === null || numeroorden.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'orden' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(!(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc") &&
        !(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc"))
      {
          codigo  = -1;
          mensaje = "Credenciales inválidas";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }
      console.log("orden RECIBIDA EN API REST (PASO 2)");
      console.log(rfc);
      console.log(usuario);
      console.log(clave);
      console.log(numeroorden);

      let rspns = '';

      if(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc")
      {
          console.log("BAMBO");
        rspns = await data.obtenerPedido(rfc, usuario, clave, numeroorden);
      }
      else if(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc")
      {
        console.log("LUCENZZA");
        rspns = await data.obtenerPedido(rfc, usuario, clave, numeroorden);
      }

      res.json(rspns);
      console.log("RESPUESTA FINAL DEL API REST");
      console.log(JSON.stringify(rspns));
    })();
  });

  router.post("/RVUtilsWooCommerce_ActualizarPedido", function(req, res)
  {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let OrderId = req.body.OrderId;
      let Status = req.body.Status;
      let TrackingNumber = req.body.TrackingNumber;
      let TrackingUrl = req.body.TrackingUrl;
        
      if(typeof OrderId === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'OrderId' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(OrderId === null || OrderId.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'OrderId' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof Status === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'Status' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(Status === null || Status.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'Status' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof TrackingNumber === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'TrackingNumber' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(TrackingNumber === null || TrackingNumber.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'TrackingNumber' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof TrackingUrl === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'TrackingUrl' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(TrackingUrl === null || TrackingUrl.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'TrackingUrl' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      /*if(!(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc") &&
        !(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc"))
      {
          codigo  = -1;
          mensaje = "Credenciales inválidas";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }*/
      console.log("orden RECIBIDA EN API REST (PASO 3)");
      console.log(OrderId);
      console.log(Status);
      console.log(TrackingNumber);
      console.log(TrackingUrl);

      let rspns = '';
      rspns = await data.actualizarPedido(OrderId, Status, TrackingNumber, TrackingUrl);
      /*if(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc")
      {
          console.log("BAMBO");
        rspns = await data.obtenerPedido(rfc, usuario, clave, numeroorden);
      }
      else if(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc")
      {
        console.log("LUCENZZA");
        rspns = await data.obtenerPedido(rfc, usuario, clave, numeroorden);
      }*/

      res.json(rspns);
      console.log("RESPUESTA FINAL DEL API REST");
      console.log(JSON.stringify(rspns));
    })();
  });
  router.get("/RVUtilsWooCommerce_Pruebas", function(req, res){
    // const gt = require("../")
   });
  router.post("/RVUtilsWooCommerce_ActualizarStockProducto", function(req, res)
  {
    (async () => {
      let codigo = 0;
      let mensaje = "";
  
      let productId = req.body.productId;
      let warehouseId = req.body.warehouseId;
      let quantity = req.body.quantity;
        
      if(typeof v === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'productId' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(productId === null || productId.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'productId' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof warehouseId === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'warehouseId' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(warehouseId === null || warehouseId.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'warehouseId' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(typeof quantity === 'undefined' )
      {
          codigo  = -1;
          mensaje = "El parámetro 'quantity' no fue enviado en la solicitud";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      if(quantity === null || quantity.length == 0)
      {
          codigo  = -1;
          mensaje = "El valor del parámetro 'quantity' no puede ser vacío";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }

      /*if(!(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc") &&
        !(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc"))
      {
          codigo  = -1;
          mensaje = "Credenciales inválidas";
          res.json( {"Codigo" : codigo, "Mensaje" : mensaje} );
          return;
      }*/
     


      console.log("orden RECIBIDA EN API REST (PASO 4)");
      console.log(OrderId);
      console.log(Status);
      console.log(TrackingNumber);
      console.log(TrackingUrl);

      let rspns = '';
      rspns = await data.actualizarStockProducto(productId, warehouseId, quantity);
      /*if(rfc == "AAA010101AAA" && usuario == "BAMBOBEAUTY" && clave == "bambo2021wc")
      {
          console.log("BAMBO");
        rspns = await data.obtenerPedido(rfc, usuario, clave, numeroorden);
      }
      else if(rfc == "AAA010101AAA" && usuario == "LUCENZZA" && clave == "lucenzza2021wc")
      {
        console.log("LUCENZZA");
        rspns = await data.obtenerPedido(rfc, usuario, clave, numeroorden);
      }*/

      res.json(rspns);
      console.log("RESPUESTA FINAL DEL API REST");
      console.log(JSON.stringify(rspns));
    })();
    
  });


module.exports = router;