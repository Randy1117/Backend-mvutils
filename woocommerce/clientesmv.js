const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 const dba = require("../models")

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });

api.get("customers", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let clientes = response.data;
  let jsonItems = [];
        for(let i = 0; i < clientes.length; i++)
        {
          dba.mv_clientes.create({
           // 'ordenid': clientes[i].id,
            "cte_idEmpresa": "09",
            "cte_idwoo":clientes[i].customer_id,
            "cte_razonSocial": "0",
            "cte_rfc": "0",
            "cte_Correo":clientes[i].email,
            "cte_tel":clientes[i].phone,
            "delet": "0"
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