const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 const dba = require("../models")

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });

api.get("products/tags", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let etiquetas = response.data;
  let jsonItems = [];
        for(let i = 0; i < etiquetas.length; i++)
        {
          dba.mv_etiquetas.create({
           // 'ordenid': etiquetas[i].id,
            "et_idEmpresa": "01",
            "et_name":etiquetas[i].name,
            "et_slug":etiquetas[i].slug,
            "et_description":etiquetas[i].description,
            "et_count":etiquetas[i].count,
            "et_links":"0",
            "et_self":"0",
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