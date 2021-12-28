const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_Unid_ClaveUnidad,_Unid_Descripcion,_Unid_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "ClaveUnidad" :_Unid_ClaveUnidad, 

                   "Descripcion"  :_Unid_Descripcion, 

                   "agentmv_delete"  : _Unid_delete,

                };

                objDB.mv_UnidadSat.create(
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
    Actualizar(_Unid_ClaveUnidad,_Unid_Descripcion,_Unid_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "ClaveUnidad" :_Unid_ClaveUnidad, 

                   "Descripcion"  :_Unid_Descripcion, 

                   "agentmv_delete"  : _Unid_delete,
                };

                objDB.mv_UnidadSat.update(
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
                objDB.mv_UnidadSat.findAll({
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

                            "ClaveUnidad" : dbModel[0].Unid_ClaveUnidad, 

                            "Descripcion"  : dbModel[0].Unid_Descripcion, 
         
                            "delete"  :  dbModel[0].Unid_delete,
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