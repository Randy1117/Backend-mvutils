const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_cat_id, _cat_id_empresa,_cat_id_empresa,_cat_name,_cat_slug,_cat_description,_cat_image,_cat_links,_cat_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                    'catId': _cat_id,               
                    'catidEmpresa': _cat_id_empresa,                   
                    'catName': _cat_name,
                    'catSlug': _cat_slug,
                    'cat_parent':_cat_parent,
                    'catDesc': _cat_description,
                    'catImage': _cat_image,
                    'cat_links':_cat_links,
                    'cat_delet': _cat_delet                   

                };

                objDB.mv_Categorias.create(
                    parametros)
                    .then(dbModel => {
                        resolve( { "Codigo" : "0", "Mensaje" : "", "id" : dbModel.dataValues.id } );
                    })
                    .catch(error => {
                        resolve( { "Codigo" : "-1", "Mensaje" : "Error al insertar la orden: " + error.message } );
                    });
            })();
        });
    },
    Actualizar(_cat_id, _cat_id_empresa,_cat_id_empresa,_cat_name,_cat_slug,_cat_description,_cat_image,_cat_links,_cat_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    'catId': _cat_id,               
                    'catidEmpresa': _cat_id_empresa,                   
                    'catName': _cat_name,
                    'catSlug': _cat_slug,
                    'cat_parent':_cat_parent,
                    'catDesc': _cat_description,
                    'catImage': _cat_image,
                    'cat_links':_cat_links,
                    'cat_delete': _cat_delet
                };

                objDB.mv_Categorias.update(
                    parametros,
                    { where : { id : _id }})
                    .then(dbModel => {
                        resolve( { "Codigo" : "0", "Mensaje" : "" } );
                    })
                    .catch(error => {
                        resolve( { "Codigo" : "-1", "Mensaje" : "Error al actualizar la orden: " + error.message } );
                });
            })();
        });
    },
    Buscar(_idCliente, _numorden)
    {
        return new Promise (resolve => {
            (async () => {
                objDB.mv_Categorias.findAll({
                    where : { 
                        [Op.and]: [
                        { idCliente: { [Op.eq] : _idCliente } },
                        { numorden: { [Op.eq] : _numorden } }
                      ] 
                    },
                    order: [
                        ['id', 'DESC']
                    ]
                })
                .then(dbModel => {
                    let filasEncontradas = dbModel.length;
                      
                    if(filasEncontradas == 0)
                    {
                        resolve( { "Codigo" : "-1", "Mensaje" : "La categoria no existe" } );
                    }
                    else// if(filasEncontradas == 1)
                    {
                        let resultado = {
                            "Codigo" : "0",
                            "Mensaje" : "",                       
                            'cat_id': dbModel[0].cat_id,
                            'cat_parent': dbModel[0].cat_parent,
                            'cat_id_empresa': dbModel[0].cat_id_empresa,
                            'cat_name': dbModel[0].cat_name,
                            'cat_slug': dbModel[0].cat_slug,
                            'cat_description': dbModel[0].cat_description,
                            'cat_image': dbModel[0].cat_image,
                            'cat_links': dbModel[0].cat_links,
                            'cat_delet': dbModel[0].cat_delet,
                        };

                        resolve( resultado );
                    }
                    /*else if(filasEncontradas > 1)
                    {
                        resolve( { "Codigo" : "-1", "Mensaje" : "La orden existe más de una vez" } );
                    }*/
                })
                .catch(error => {
                    resolve( { "Codigo" : "-1", "Mensaje" : "Error al buscar la orden: " + error.message } );
                });
            })();
        });
    }
};


