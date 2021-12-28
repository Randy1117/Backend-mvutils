const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
  const fs = require("fs");

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });

api.get("customersdet", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let clientes = response.data;
  let jsonItems = [];
        for(let i = 0; i < clientes.length; i++)
        {
          jsonItems.push({
           'idclientedetalle': '0',
           'idEmpresa': '99',
           'idCLiente': clientes[i].id,
           'usoCfdi': '0',
           'condPago': '0',
           'limCred': '0',
           'plaCred': '0',
           'lp': '0',
           'agente': '0',
           'categoria':'0',
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
