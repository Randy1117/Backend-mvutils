const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_cte_idCLiente,_cte_id_empresa,_cte_razonSocial,_cte_rfc,_cte_Correo,_cte_tel,_cte_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                    'clienteId': _cte_idCLiente,
                    'clienteidEmpresa': _cte_id_empresa,
                    'clientecte_razonSocial': _cte_razonSocial,
                    'clientecte_rfc': _cte_rfc,
                    'clientecte_Correo': _cte_Correo,
                    'clientecte_tel': _cte_tel, 
                    'clientedelete': _cte_delete,
                
                };

                objDB.mv_Clientes.create(
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
    Actualizar(_cte_idCLiente,_cte_id_empresa,_cte_razonSocial,_cte_rfc,_cte_Correo,_cte_tel,_cte_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    'clienteId': _cte_idCLiente,
                    'clienteidEmpresa': _cte_id_empresa,
                    'clientecte_razonSocial': _cte_razonSocial,
                    'clientecte_rfc': _cte_rfc,
                    'clientecte_Correo': _cte_Correo,
                    'clientecte_tel': _cte_tel, 
                    'clientedelete': _cte_delete,
                };

                objDB.mv_Clientes.update(
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
                objDB.mv_Clientes.findAll({
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
                            "cte_idCLiente" : dbModel[0].cte_idCLiente,
                            "cte_id_empresa" : dbModel[0].cte_id_empresa,
                            "cte_razonSocial" : dbModel[0].cte_razonSocial,
                            "cte_rfc" : dbModel[0].cte_rfc,
                            "cte_Correo" : dbModel[0].cte_Correo,
                            "cte_tel" : dbModel[0].cte_tel,
                            "cte_delete" : dbModel[0].cte_delete,

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


