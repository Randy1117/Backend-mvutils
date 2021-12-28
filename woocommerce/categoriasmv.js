const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 const dba = require("../models")

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });

api.get("products/categories", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let categorias = response.data;
  let jsonItems = [];
        for(let i = 0; i < categorias.length; i++)
        {
          dba.mv_categorias.create({
           //'ordenid': categorias[i].id,
           "cat_idEmpresa": "09",
           "cat_name":categorias[i].name,
           "cat_slug":categorias[i].slug,
           "cat_description":categorias[i].description,
           "cat_image":"0", 
           "cat_links":"0",
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