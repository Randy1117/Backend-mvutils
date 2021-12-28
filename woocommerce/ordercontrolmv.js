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
          dba.mv_ordencontrol.create({
           // 'ordenid': ordenes[i].id,
           'ctd_idcotDetalle': ordenes[i].id,
           'ctd_idordenes': ordenes[i].order_key,
           'ctd_precioxvolumen': ordenes[i].prices_include_tax,
           'ctd_prjconfirmarpedido': '0',
           'ctd_NumRequisi': ordenes[i].number,
           'ctd_prjavisoentrega': '0',
           'ctd_tiempoentrega':'0',
           'ctd_pedidoespecial': '0',
           'ctd_vigenciacotizacion':'0',
           'ctd_codreg': ordenes[i].tax_lines.rate_code,
           'ctd_tiplib': '0',
           'ctd_tpcarga': '0',
           'ctd_valida': '0',
           'ctd_status': ordenes[i].status,
           'ctd_OrderUrl': ordenes[i].self.href,
           'ctd_clienteUrl': ordenes[i].customer.href,
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

