const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_cd_idCLientedet,_cd_idEmpresa,_cd_idCLiente,_cd_usoCfdi,_cd_condPago,_cd_limCred,_cd_plaCred,_cd_lp,_cd_agente,_cd_categoria,_cd_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "cd_idCLientedet" :_cd_idCLientedet, 
                   "cd_idEmpresa"  : _cd_idEmpresa,
                   "cd_idCLiente"  :_cd_idCLiente, 
                   "cd_usoCfdi"  :_cd_usoCfdi, 
                   "cd_condPago"  : _cd_condPago,
                   "cd_limCred"  : _cd_limCred,
                   "cd_plaCred"  : _cd_plaCred,
                   "cd_lp"  : _cd_lp,
                   "cd_agente"  : _cd_agente,
                   "cd_categoria"  : _cd_categoria,
                   "cd_delet"  : _cd_delet,
                   

                };

                objDB.mv_Clientedet.create(
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
    Actualizar(_cd_idCLientedet,_cd_idEmpresa,_cd_idCLiente,_cd_usoCfdi,_cd_condPago,_cd_limCred,_cd_plaCred,_cd_lp,_cd_agente,_cd_categoria,_cd_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "cd_idCLientedet" :_cd_idCLientedet, 
                    "cd_idEmpresa"  : _cd_idEmpresa,
                    "cd_idCLiente"  :_cd_idCLiente, 
                    "cd_usoCfdi"  :_cd_usoCfdi, 
                    "cd_condPago"  : _cd_condPago,
                    "cd_limCred"  : _cd_limCred,
                    "cd_plaCred"  : _cd_plaCred,
                    "cd_lp"  : _cd_lp,
                    "cd_agente"  : _cd_agente,
                    "cd_categoria"  : _cd_categoria,
                    "cd_delet"  : _cd_delet,
                };

                objDB.mv_Clientedet.update(
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
                objDB.mv_Clientedet.findAll({
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

                            'cd_idCLientedet':dbModel[0].cd_idCLientedet,
                            'cd_idEmpresa':dbModel[0].cd_idEmpresa,
                            'cd_idCLiente':dbModel[0].cd_idCLiente,
                            'cd_usoCfdi':dbModel[0].cd_usoCfdi,
                            'cd_condPago':dbModel[0].cd_condPago,
                            'cd_limCred':dbModel[0].cd_limCred,
                            'cd_plaCred':dbModel[0].cd_plaCred,
                            'cd_lp':dbModel[0].cd_lp,
                            'cd_agente':dbModel[0].cd_agente,
                            'cd_categoria':dbModel[0].cd_categoria,
                            'cd_delet':dbModel[0].cd_delet,
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