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

  let contactos = response.data;
  let jsonItems = [];
        for(let i = 0; i < contactos.length; i++)
        {
          dba.mv_contactos.create({
          'con_idContacto': contactos[i].id,
          'con_idEmpresa':"09",
          'con_nombre': contactos[i].first_name,
          'con_apellido':contactos[i].last_name,
          'con_Correo': contactos[i].email,
          'con_telefono':contactos[i].billing.phone,   
          'con_puesto': "0",
          'con_fechaNac':"00/00/00",
          'con_Curp':"0",
          'con_rfc':"0",        
          'delet':"0"



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