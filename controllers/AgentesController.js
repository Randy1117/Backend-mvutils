const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_agen_idAgente,_agen_idEmpresa,_agen_nombre,_agen_Apellido,_agen_Puesto,_agen_Uid,_agen_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "agentagen_idAgente" :_agen_idAgente, 
                   "agentagen_idEmpresa"  : _agen_idEmpresa,
                   "agentagen_nombre"  :_agen_nombre, 
                   "agentagen_Apellido"  :_agen_Apellido, 
                   "agentagen_Puesto"  : _agen_Puesto,
                   "agentagen_Uid"  : _agen_Uid,
                   "agentagen_delet"  : _agen_delet,

                };

                objDB.mv_Agentes.create(
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
    Actualizar(_agen_idAgente,_agen_idEmpresa,_agen_nombre,_agen_Apellido,_agen_Puesto,_agen_Uid,_agen_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "agentagen_idAgente" :_agen_idAgente, 
                    "agentagen_idEmpresa"  : _agen_idEmpresa,
                    "agentagen_nombre"  :_agen_nombre, 
                    "agentagen_Apellido"  :_agen_Apellido, 
                    "agentagen_Puesto"  : _agen_Puesto,
                    "agentagen_Uid"  : _agen_Uid,
                    "agentagen_delet"  : _agen_delete,
                };

                objDB.mv_Agentes.update(
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
                objDB.mv_Agentes.findAll({
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
                            'agen_idAgente': dbModel[0].agen_idAgente,
                            'agen_idEmpresa': dbModel[0].agen_idEmpresa,
                            'agen_nombre': dbModel[0].agen_nombre,
                            'agen_Apellido': dbModel[0].agen_Apellido,
                            'agen_Puesto': dbModel[0].agen_Puesto,
                            'agen_Uid': dbModel[0].agen_Uid,
                            'agen_delet': dbModel[0].agen_delete,
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