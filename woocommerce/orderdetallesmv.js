const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 const dba = require("../models")

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });

api.get("orders", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let ordenes = response.data;
  let jsonItems = [];
        for(let i = 0; i < ordenes.length; i++)
        {
          dba.mv_ordenesdetalles.create({
           // 'idordenDet': ordenes[i].id,
            'ord_idEmpresa': "01",
            'ord_idorden': ordenes[i].line_items.id,
            'ord_idWoo': ordenes[i].line_items.product_id,
            'ord_numItem': "0",
            'ord_idProducto': ordenes[i].line_items.sku ,   
            'ord_idUnidad': '0',
            'ord_cantProducto': ordenes[i].line_items.quantity,
            'ord_cantDIsp': '0',
            'ord_impSubtotal':ordenes[i].line_items.subtotal_tax,
            'ord_idTes': ordenes[i].idTes,
            'ord_precio': ordenes[i].line_items.price,
            'ord_subtotal': ordenes[i].line_items.subtotal,
            'ord_impSubtotal': ordenes[i].line_items.subtotal_tax,
            'ord_desc': '0',
            'ord_subdesc': '0',
            'ord_numPV': '0',
            'delet':'0'
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
