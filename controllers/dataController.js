const APIEnviarCorreo = require("../API/envioCorreo");
const APIAmazonS3 = require("../API/amazonS3");
const APIRest = require("../API/conexionREST");
const objDBWcordenes = require('./wcordenesController');

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
var api = new WooCommerceRestApi({
  url: "https://megaservicio.net/",
  consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
  consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
  version: "wc/v3"
});

module.exports = {

funcionEtiquetas(){
  const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
  var fs = require("fs");
  var api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });
  
  api
  .get("products/tags", { 
    //per_page: 100 // 20 products per page
  })
  
  
  .then(response => {
    var dataprod = JSON.stringify(response.data);
    let etitquetasItems = response.data;
    let jsonItems = [];
    for(let i = 0; i < etitquetasItems.length; i++)
    {
      jsonItems.push({
        'etiquetaId': etitquetasItems[i].id,
        'etiquetaName': etitquetasItems[i].name,
        'etiquetaSlug': etitquetasItems[i].slug,
        'etiquetaDesc': etitquetasItems[i].description,
        'etiquetaCount': etitquetasItems[i].count,
        'etiquetaLinks': etitquetasItems[i]._links,
        'etiquetaSelf': etitquetasItems[i].self,
     
      });
    }
    console.log(jsonItems);
  })
  
  .catch(error => {
    // Invalid request, for 4xx and 5xx statuses
    console.log("Response Status:", error.response.status);
    console.log("Response Headers:", error.response.headers);
    console.log("Response Data:", error.response.data);
  })
  .finally(() => {
    // Always executed.
  });
  },

funcionCategorias(){
  const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
  var fs = require("fs");
  var api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });
  api
  .get("products/categories", {
  })
  .then(response => {
    var dataprod = JSON.stringify(response.data);
    let categoriasItems = response.data;
    let jsonItems = [];
    for(let i = 0; i < categoriasItems.length; i++)
    {
      jsonItems.push({
        'catId': categoriasItems[i].id,
        'catName': categoriasItems[i].name,
        'catSlug': categoriasItems[i].slug,
        'catParent': categoriasItems[i].parent,
        'catDesc': categoriasItems[i].description,
        'catImage': categoriasItems[i].image,
        'catLinks': categoriasItems[i]._links,
      });
    }
    console.log(jsonItems);
  })
  .catch(error => {
    console.log("Response Status:" , error.response.status);
    console.log("Response Headers:" , error.response.headers);
    console.log("Response Data:" , error.response.data);
  })
  .finally(() => {
    // Always executed.
  });
  },
  
  descargarXMLAmazonS3(uuid) {
    return new Promise (resolve => {
      (async () => {
          let resultadoDescarga = await APIAmazonS3.DescargarXML(uuid).
          catch(errorEx =>
          {
            resolve({
                "Codigo" : -1,
                "Mensaje" : errorEx.message
            });
          });

          if(resultadoDescarga.Codigo == 0)
          {
            resolve({
              "Codigo" : resultadoDescarga.Codigo,
              "Mensaje" : resultadoDescarga.Mensaje,
              "ID" : resultadoDescarga.MessageId
            });
          }
          else
          {
            resolve({
              "Codigo" : resultadoDescarga.Codigo,
              "Mensaje" : resultadoDescarga.Mensaje
            });
          }
      })();
    });
  },

  enviarCorreo(asunto, plantillaHTMLBase64, correosElectronicos, archivosAdjuntos, claveAcceso) {
    return new Promise (resolve => {
      (async () => {
          let resultadoEnvio = await APIEnviarCorreo.EnviarCorreoAdjunto(asunto, plantillaHTMLBase64, correosElectronicos, archivosAdjuntos, claveAcceso).
          catch(errorEx =>
          {
            resolve({
                "Codigo" : -1,
                "Mensaje" : errorEx.message
            });
          });

          if(resultadoEnvio.Codigo == 0)
          {
            resolve({
              "Codigo" : resultadoEnvio.Codigo,
              "Mensaje" : resultadoEnvio.Mensaje,
              "ID" : resultadoEnvio.MessageId
            });
          }
          else
          {
            resolve({
              "Codigo" : resultadoEnvio.Codigo,
              "Mensaje" : resultadoEnvio.Mensaje
            });
          }
      })();
    });
  },

  crearPedidoBambo(rfc, usuario, clave, tipoConexion, tipoSolicitud, url, pedido) {
    return new Promise (resolve => {
      (async () => {
        let numorden = pedido.orderData.number;
        let pricesIncludeTax = pedido.orderData.prices_include_tax;
        let address_1 = pedido.orderData.billing.address_1;
        let address_2 = pedido.orderData.billing.address_2;

        if(pricesIncludeTax === "0" || pricesIncludeTax === "false" || pricesIncludeTax === 0)
          pricesIncludeTax = false;
        else if(pricesIncludeTax === "1" || pricesIncludeTax === "true" || pricesIncludeTax === 1)
          pricesIncludeTax = true;
        
        let billingExternalNumber = pedido.orderMeta._billing_external_number;
        let billingInternalNumber = pedido.orderMeta._billing_internal_number;

        if(typeof billingExternalNumber === 'undefined' )
        {
          billingExternalNumber = '';
        }
        else
        {
          billingExternalNumber = billingExternalNumber.toString();
        }

        if(typeof billingInternalNumber === 'undefined' )
        {
          billingInternalNumber = '';
        }
        else
        {
          billingInternalNumber = billingInternalNumber.toString();
        }

        let pedidoJSON = {
          "id" : pedido.orderData.id,
          "parent_id" : pedido.orderData.parent_id,
          "number" : pedido.orderData.number,
          "order_key" : pedido.orderData.order_key,
          "created_via" : pedido.orderData.created_via,
          "version" : pedido.orderData.version,
          "status" : pedido.orderData.status,
          "date_created" : pedido.orderPost.post_date,
          "date_created_gmt" : pedido.orderPost.post_date_gmt,
          "date_modified" : pedido.orderPost.post_modified,
          "date_modified_gmt" : pedido.orderPost.post_modified_gmt,
          "discount_total" : (!isNaN(pedido.orderData.discount_total)) ? pedido.orderData.discount_total : "0.00",
          "discount_tax" : (!isNaN(pedido.orderData.discount_tax)) ? pedido.orderData.discount_tax : "0.00",
          "shipping_total" : (!isNaN(pedido.orderData.shipping_total)) ? pedido.orderData.shipping_total : "0.00",
          "shipping_tax" : (!isNaN(pedido.orderData.shipping_tax)) ? pedido.orderData.shipping_tax : "0.00",
          "cart_tax" : (!isNaN(pedido.orderData.cart_tax)) ? pedido.orderData.cart_tax : "0.00",
          "total" : (!isNaN(pedido.orderData.total)) ? pedido.orderData.total : "0.00",
          "total_tax" : (!isNaN(pedido.orderData.total_tax)) ? pedido.orderData.total_tax : "0.00",
          "prices_include_tax" : pricesIncludeTax,
          "customer_id" : pedido.orderData.customer_id,
          "customer_ip_address" : pedido.orderData.customer_ip_address,
          "customer_user_agent" : pedido.orderData.customer_user_agent,
          "customer_note" : pedido.orderData.customer_note,
          "billing" : {
            "first_name" : pedido.orderData.billing.first_name,
            "last_name" : pedido.orderData.billing.last_name,
            "company" : pedido.orderData.billing.company,
            "address_1" : (address_1.length > 50) ? address_1.substring(0, 50) : address_1,
            "address_2" : (address_2.length > 50) ? address_2.substring(0, 50) : address_2,
            "city" : pedido.orderData.billing.city,
            "state" : pedido.orderData.billing.state,
            "postcode" : pedido.orderData.billing.postcode,
            "country" : pedido.orderData.billing.country,
            "email" : pedido.orderData.billing.email,
            "phone" : pedido.orderData.billing.phone,
            "billing_external_number" : billingExternalNumber,
            "billing_internal_number" : billingInternalNumber
          },
          "payment_method" : pedido.orderData.payment_method,
          "payment_method_title" : pedido.orderData.payment_method_title,
          "transaction_id" : pedido.orderData.transaction_id,
          "date_paid" : pedido.extra.paid_date,
          "date_paid_gmt" : pedido.extra.paid_date_gmt,
          "date_completed" : pedido.extra.completed_date,
          "date_completed_gmt" : pedido.extra.completed_date_gmt,
          "cart_hash" : pedido.orderData.cart_hash,
          //"meta_data" : pedido.orderMeta,
          "line_items" : pedido.items,
          "tax_lines" : pedido.taxes,
          "shipping_lines" : pedido.shipping,
          "fee_lines" : [],
          "coupon_lines" : [],
          "refunds" : [],
          "currency_symbol" : "$"
        };

        let fechaRecepcion = new Date();
        fechaRecepcion = fechaRecepcion.toISOString();
        fechaRecepcion = fechaRecepcion.substring(0, 19);
        fechaRecepcion = fechaRecepcion.replace("T", " ");
        
        //Obtiene idCliente
        let idCliente = 1;

        //Registro
        let resultado = await APIRest.POSTBambo(url, pedidoJSON).
        catch(errorEx =>
        {
          resolve({
              "Codigo" : -1,
              "Mensaje" : errorEx.message
          });
        });

        let respuesta = resultado.Mensaje;
        console.log("RESPUESTA DEL SERVICIO EXTERNO");
        console.log(JSON.stringify(respuesta));
        console.log("REGISTRANDO EN BASE DE DATOS...");
        let resInsertarorden = await objDBWcordenes.Insertar(idCliente, numorden, fechaRecepcion, JSON.stringify(respuesta), JSON.stringify(pedidoJSON));
                                        
        if(resInsertarorden.Codigo == "0") 
        {
          console.log("REGISTRO EN BASE DE DATOS CON EXITO");
          resolve({
            "Codigo" : 0,
            "Mensaje" : "",
            "RespuestaServicioExterno" : respuesta
          });
        }
        else
        {
          console.log("ERROR EN REGISTRO EN BASE DE DATOS");
          resolve(resInsertarorden);
        }
      })();
    });
  },

  crearPedidoLucenzza(rfc, usuario, clave, tipoConexion, tipoSolicitud, url, pedido) {
    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    var fs = require("fs");
    var api = new WooCommerceRestApi({
      url: "https://megaservicio.net/",
      consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
      consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
      version: "wc/v3"
    });
    
    api
    .get("orders", { 
      //per_page: 100 // 20 products per page
    })
    .then(response => {
      var dataprod = JSON.stringify(response.data);
      let ordenesItems = response.data;
      let jsonItems = [];
      for(let i = 0; i < ordenesItems.length; i++)
      {
        jsonItems.push({
          "ordenesid": ordenesItems[i].id,
          "ordenesparent_id": ordenesItems[i].parent_id,
          "ordenesstatus": ordenesItems[i].status,
          "ordenescurrency":ordenesItems[i].currency,
          "ordenesversion": ordenesItems[i].version,
          "ordenesprices_include_tax": ordenesItems[i].prices_include_tax,
          "ordenesdate_created": ordenesItems[i].date_created,
          "ordenesdate_modified": ordenesItems[i].date_modified,
          "ordenesdiscount_total": ordenesItems[i].discount_total,
          "ordenesdiscount_tax": ordenesItems[i].discount_tax,
          "ordenesshipping_total": ordenesItems[i].shipping_total,
          "ordenesshipping_tax": ordenesItems[i].shipping_tax,
          "ordenescart_tax": ordenesItems[i].cart_tax,
          "ordenestotal": ordenesItems[i].total,
          "ordenestotal_tax": ordenesItems[i].total_tax,
          "ordenescustomer_id": ordenesItems[i].customer_id,
          "ordenesorder_key": ordenesItems[i].order_key,
          "ordenesbilling": {
            "ordenesfirst_name": ordenesItems[i].first_name,
            "ordeneslast_name": ordenesItems[i].last_name,
            "ordenescompany": ordenesItems[i].company,
            "ordenesaddress_1": ordenesItems[i].address_1,
            "ordenesaddress_2": ordenesItems[i].address_2,
            "ordenescity": ordenesItems[i].city,
            "ordenesstate": ordenesItems[i].state,
            "ordenespostcode": ordenesItems[i].postcode,
            "ordenescountry": ordenesItems[i].country,
            "ordenesemail": ordenesItems[i].email,
            "ordenesphone": ordenesItems[i].phone,
          },
          "ordenesshipping": {
            "ordenesfirst_name": ordenesItems[i].first_name,
            "ordeneslast_name": ordenesItems[i].last_name,
            "ordenescompany": ordenesItems[i].company,
            "ordenesaddress_1": ordenesItems[i].address_1,
            "ordenesaddress_2": ordenesItems[i].address_2,
            "ordenescity": ordenesItems[i].city,
            "ordenesstate": ordenesItems[i].state,
            "ordenespostcode": ordenesItems[i].postcode,
            "ordenescountry": ordenesItems[i].country,
          },
          "ordenespayment_method": ordenesItems[i].payment_method,
          "ordenespayment_method_title": ordenesItems[i].payment_method_title,
          "ordenestransaction_id": ordenesItems[i].transaction_id,
          "ordenescustomer_ip_address": ordenesItems[i].customer_ip_address,
          "ordenescustomer_user_agent": ordenesItems[i].customer_user_agent,
          "ordenescreated_via": ordenesItems[i].created_via,
          "ordenescustomer_note": ordenesItems[i].customer_note,
          "ordenesdate_completed": ordenesItems[i].date_completed,
          "ordenesdate_paid": ordenesItems[i].date_paid,
          "ordenescart_hash": ordenesItems[i].cart_hash,
          "ordenesnumber": ordenesItems[i].number,
          "ordenesline_items": [
            {
              "ordenesid": ordenesItems[i].id,
              "ordenesname": ordenesItems[i].name,
              "ordenesproduct_id": ordenesItems[i].product_id,
              "ordenesvariation_id": ordenesItems[i].variation_id,
              "ordenesquantity": ordenesItems[i].quantity,
              "ordenestax_class": ordenesItems[i].tax_class,
              "ordenessubtotal": ordenesItems[i].subtotal,
              "ordenessubtotal_tax": ordenesItems[i].subtotal_tax,
              "ordenestotal": ordenesItems[i].total,
              "ordenestotal_tax": ordenesItems[i].total_tax,
              "ordenestaxes": [
                {
                  "ordenesid": ordenesItems[i].id,
                  "ordenestotal":ordenesItems[i].total,
                  "ordenessubtotal": ordenesItems[i].subtotal
                }
              ],
            
              "ordenessku": ordenesItems[i].sku,
              "ordenesprice": ordenesItems[i].price,
              "ordenesparent_name": ordenesItems[i].parent_name
            },    
          ],
          "ordenestax_lines": [
            {
              "ordenesid": ordenesItems[i].id,
              "ordenesrate_code": ordenesItems[i].rate_code,
              "ordenesrate_id": ordenesItems[i].rate_id,
              "ordeneslabel": ordenesItems[i].label,
              "ordenescompound": ordenesItems[i].compound,
              "ordenestax_total": ordenesItems[i].tax_total,
              "ordenesshipping_tax_total": ordenesItems[i].shipping_tax_total,
              "ordenesrate_percent": ordenesItems[i].rate_percent,
             
            }
          ],
          "ordenesshipping_lines": [
          
          ],
          "ordenesfee_lines": [
            
          ],
          "ordenescoupon_lines": [
            
          ],
          "ordenesrefunds": [
        ],
        "ordenesdate_created_gmt": ordenesItems[i].date_created_gmt,
        "ordenesdate_modified_gmt": ordenesItems[i].date_modified_gmt,
        "ordenesdate_completed_gmt": ordenesItems[i].date_completed_gmt,
        "ordenesdate_paid_gmt": ordenesItems[i].date_paid_gmt,
        "ordenescurrency_symbol": ordenesItems[i].currency_symbol,
        "ordenes_links": {
          "ordenesself": [
            {
              "href": ordenesItems[i].href
            }
          ],
          "ordenescollection": [
            {
              "href": ordenesItems[i].href
            }
          ]
        }
        });
      }
      console.log(jsonItems);
    })
    
    .catch(error => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });
    
  },

  obtenerPedido(rfc, usuario, clave, numorden) {
    return new Promise (resolve => {
      (async () => {
        
        let idCliente = 2;

          console.log("CONSULTANDO orden EN BASE DE DATOS...");
          let resObtenerorden = await objDBWcordenes.Buscar(idCliente, numorden);
                                          
          if(resObtenerorden.Codigo == "0") 
          {
            console.log("CONSULTA EN BASE DE DATOS CON EXITO");
            resolve({
              "Codigo" : 0,
              "Mensaje" : "",
              "JSONPedido" : JSON.parse(resObtenerorden.objetoJson)
            });
          }
          else
          {
            console.log("ERROR EN CONSULTA EN BASE DE DATOS");
            resolve(resObtenerorden);
          }
      })();
    });
  }, 

  actualizarPedido(OrderId, Status, TrackingNumber, TrackingUrl) {
    return new Promise (resolve => {
      (async () => {
        
        let idCliente = 2;
        console.log("ACTUALIZANDO orden EN WOOCOMMERCE...");
        
        const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
        var api = new WooCommerceRestApi({
          url: "https://staging-lucentzza.kinsta.cloud",
          consumerKey: "ck_198722b9e667dc71c7e005ff545e8626e226e76e",
          consumerSecret: "cs_0ff0c60f5cf31a867d3de8e5ea78f277defa17ab",
          version: "wc/v3"
        });
        api.put("orders/" + OrderId, // aca va despues del / el numero de la orden a modificar.
          {
            status: Status, // aca va el estatus, (processing, completed, enviado)
            meta_data:[{
              "key": "ywot_tracking_code",
              "value": TrackingNumber //"guia-99001-99901"
              },
            {
              "key": "ywot_tracking_postcode",
              "value": TrackingUrl //"URL de tracking"
            }]
          })
          .then(response => {
            //console.log("Response Data:", response.data);
            respuesta  = response.data;
          })
          .catch(error => {
            console.log("Response Status:", error.response.status);
            console.log("Response Headers:", error.response.headers);
            console.log("Response Data:", error.response.data);
            respuesta = error.response;
          })
          .finally(() => {
            // Always executed.
          });

          resolve({
            "Codigo" : 0,
            "Mensaje" : "exito"
          });
      })();
    });
  },

  actualizarStockProducto(productId, warehouseId, quantity) {
    return new Promise (resolve => {
      (async () => {
        
        let idCliente = 2;
        console.log("ACTUALIZANDO STOCK DE PRODUCTO EN WOOCOMMERCE...");
        
        const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
        var api = new WooCommerceRestApi({
          url: "https://staging-lucentzza.kinsta.cloud",
          consumerKey: "ck_198722b9e667dc71c7e005ff545e8626e226e76e",
          consumerSecret: "cs_0ff0c60f5cf31a867d3de8e5ea78f277defa17ab",
          version: "wc/v3"
        });
        api.put("products/" + productId, // aca va despues del / el numero del producto a actualizar
          {
            stock_quantity: quantity // aca va el monto a actualizar
          })
          .then(response => {
            console.log("Response Data:", response.data.stock_quantity);
            respuesta  = response.data;
          })
          .catch(error => {
            console.log("Response Status:", error.response.status);
            respuesta = error.response;
          })
          .finally(() => {
          });
          
          resolve({
            "Codigo" : 0,
            "Mensaje" : "exito"
          });
      })();
    });
  }
};