const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_Prod_ClaveProdServ,_Prod_Nombre,_Prod_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "_Prod_ClaveProdServ" :_Prod_ClaveProdServ,               
                   "_Prod_Nombre"  :_Prod_Nombre,                 
                   "_Prod_delete"  : _Prod_delete,

                };

                objDB.mv_ProdServSat.create(
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
    Actualizar(_Prod_ClaveProdServ,_Prod_Nombre,_Prod_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "_Prod_ClaveProdServ" :_Prod_ClaveProdServ,               
                    "_Prod_Nombre"  :_Prod_Nombre,                 
                    "_Prod_delete"  : _Prod_delete,
                };

                objDB.mv_ProdServSat.update(
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
                objDB.mv_ProdServSat.findAll({
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
                            "Prod_ClaveProdServ": dbModel[0].Prod_ClaveProdServ,                    
                            "Prod_Nombre": dbModel[0].Prod_Nombre,                          
                            "Prod_delete": dbModel[0].Prod_delete,
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