const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_et_id,_et_idEmpresa,_et_name,_et_slug,_et_description,_et_count,_et_self,_et_self,_et_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                    'etiquetaet_id': _et_id,
                    'etiquetaet_idEmpresa': _et_idEmpresa,
                    'etiquetaet_name': _et_name,
                    'etiquetaet_slug': _et_slug,
                    'etiquetaet_description': _et_description,
                    'etiquetaet_count': _et_count,
                    'etiquetaet_links':_et_links,
                    'etiquetaet_self':_et_self,
                    'etiquetaet_delete': _et_delete,                

                };

                objDB.mv_Etiquetas.create(
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
    Actualizar(_et_id,_et_idEmpresa,_et_name,_et_slug,_et_description,_et_count,_et_self,_et_self,_et_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                   
                    'etiquetaet_id': _et_id,
                    'etiquetaet_idEmpresa': _et_idEmpresa,
                    'etiquetaet_name': _et_name,
                    'etiquetaet_slug': _et_slug,
                    'etiquetaet_description': _et_description,
                    'etiquetaet_count': _et_count,
                    'etiquetaet_links':_et_links,
                    'etiquetaet_self':_et_self,
                    'etiquetaet_delete': _et_delete,    
                };

                objDB.mv_Etiquetas.update(
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
                objDB.mv_Etiquetas.findAll({
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
                            'etiquetaet_id': dbModel[0].et_id,
                            'etiquetaet_idEmpresa':dbModel[0].et_idEmpresa,
                            'etiquetaet_name': dbModel[0].et_name,
                            'etiquetaet_slug': dbModel[0].et_slug,
                            'etiquetaet_description': dbModel[0].et_description,
                            'etiquetaet_count': dbModel[0].et_count,
                            'etiquetaet_et_links': dbModel[0].et_links,
                            'etiquetaet_et_self': dbModel[0].et_self,
                            'etiquetaet_delete': dbModel[0].et_delete                        
                       
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


