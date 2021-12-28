const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 const dba = require("../models")

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });
  // Tras ejecutar el server todo el codigo de este achivo se ejecutara guardando la cantidad de 90 productos
api.get("orders", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let ordenes = response.data;
  let jsonItems = [];
        for(let i = 0; i < ordenes.length; i++)
        {
          dba.mv_ordenes.create({
           // 'ordenid': ordenes[i].id,
            'or_idEmpresa': "01",
            'or_idordenExt': "0",
            "or_idCLiente": ordenes[i].customer_id,
            'or_ordenOrigen': ordenes[i].id,
            "or_codMon": ordenes[i].currency,
            'or_subtotal': ordenes[i].line_items.subtotal,
            'or_descTotal': ordenes[i].discount_total,
            'or_descImp': ordenes[i].discount_tax,
            'or_envioTotal': ordenes[i].shipping_total,
            'or_envImp': ordenes[i].shipping_tax,
            'or_totalImp': ordenes[i].total_tax,
            'or_totalFinal': ordenes[i].total,
            'or_clienteIP': ordenes[i].customer_id,
            'or_agenteID': "0",
            'or_dirEnvioID': "1",
            'or_dirFactID': "2",
            'or_idCondPago': '1',
            'or_idListaP': ordenes[i].tax_lines,
            'or_mensaje': ordenes[i].customer_note,
            'delet': '0'
          });
        }
  console.log("Response Status:", response.status);
  console.log(jsonItems); 
})
.catch(error => {
  console.log("Response Status:", error.response.status);
  console.log("Response Headers:", error.response.headers);
  console.log("Response Data:", error.response.data);
})
.finally(() => {
  // Always executed.
});