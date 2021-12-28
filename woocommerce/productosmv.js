const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 const dba = require("../models")

  const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/",
    consumerKey: "ck_5abea7cb0f7ee305de303decb1f498082f85050a",
    consumerSecret: "cs_6aeb0e50e9c923e0b666e0ee1948cb6d7a3ea1c2",
    version: "wc/v3"
  });

api.get("products", {
 per_page: 90, // 90 products per page
})
.then(response => {
  var dataprod = JSON.stringify(response.data);

  let productos = response.data;
  let jsonItems = [];
        for(let i = 0; i < productos.length; i++)
        {
          dba.mv_productos.create({
          //'pr_id': productos[i].id,       
            "pr_idEmpresa":"09",
            "pr_idw": "0",
            "pr_idVariacionesWoo":productos[i].attributes.id,
            "pr_sku":productos[i].sku,
            "pr_gtin":"15432",
            "pr_name" :productos[i].name,
            "pr_description":productos[i].description,
            "pr_slug":productos[i].slug,
            "pr_perma_link": productos[i].perma_link,     
            "pr_CuentaContable": "0",       
            "pr_type": productos[i].type,
            "pr_status": productos[i].status,
            "pr_sale_price":productos[i].sale_price,        
            // "pr_date_on_sale_from": productos[i].date_on_sale_from,
            // "pr_date_on_sale_to":productos[i].date_on_sale_to  ,   
             //"pr_on_sale":productos[i].on_sale,       
            // "pr_shipping_required": productos[i].shipping_required,      
            "pr_shipping_taxable": productos[i].shipping_taxable,    
            "pr_shipping_class": productos[i].shipping_class,    
            "pr_shipping_class_id":productos[i].shipping_class_id,
            "pr_cross_sell_ids":  productos[i].cross_sell_ids,       
            "pr_upsell_ids":  productos[i].upsell_ids,      
            // "pr_grouped_products": productos[i].grouped_products,      
            "pr_stock_status" : productos[i].stock_status,              
            "pr_links":   productos[i].permalink,
            "pr_tax_status": productos[i].tax_status ,       
            "pr_tax_class"  :  productos[i].tax_class,   
            "pr_manage_stock" :productos[i].manage_stock,
            "pr_TasaEntrada" : "E",     
            "pr_TasaSalida" : "S",     
            "pr_Bloqueado":"0",
            "pr_ClaveProdServ":"0",
            "pr_ClaveUnidad":"0",
            "pr_Atributo":"0",
            "delet":"0"
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