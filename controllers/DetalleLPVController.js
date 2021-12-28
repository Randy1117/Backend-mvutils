const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_lpv_IdDetalle,_lpv_idEmpresa,_lpv_IdTab,_lpv_IdProducto,_lpv_codLp,_lpv_prcBase,_lpv_factorue,_lpv_prcFin,_lpv_TipCalc,_lpv_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {                
                   
                   "_lpv_IdDetalle"  : _lpv_IdDetalle,
                   "_lpv_idEmpresa"  : _lpv_idEmpresa,
                   "_lpv_IdTab"  : _lpv_IdTab,
                   "_lpv_IdProducto"  : _lpv_IdProducto,
                   "_lpv_codLp"  : _lpv_codLp,
                   "_lpv_prcBase"  : _lpv_prcBase,
                   "_lpv_factorue"  : _lpv_factorue,
                   "_lpv_prcFin"  : _lpv_prcFin,
                   "_lpv_TipCalc"  : _lpv_TipCalc,
                   "_lpv_delet"  : _lpv_delet

                };

                objDB.mv_DetalleLPV.create(
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
    Actualizar(_lpv_IdDetalle,_lpv_idEmpresa,_lpv_IdTab,_lpv_IdProducto,_lpv_codLp,_lpv_prcBase,_lpv_factorue,_lpv_prcFin,_lpv_TipCalc,_lpv_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "_lpv_IdDetalle"  : _lpv_IdDetalle,
                   "_lpv_idEmpresa"  : _lpv_idEmpresa,
                   "_lpv_IdTab"  : _lpv_IdTab,
                   "_lpv_IdProducto"  : _lpv_IdProducto,
                   "_lpv_codLp"  : _lpv_codLp,
                   "_lpv_prcBase"  : _lpv_prcBase,
                   "_lpv_factorue"  : _lpv_factorue,
                   "_lpv_prcFin"  : _lpv_prcFin,
                   "_lpv_TipCalc"  : _lpv_TipCalc,
                   "_lpv_delet"  : _lpv_delet
                };

                objDB.mv_DetalleLPV.update(
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
                objDB.mv_DetalleLPV.findAll({
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
                            'lpv_IdDetalle': dbModel[0].lpv_IdDetalle,
                            'lpv_idEmpresa': dbModel[0].lpv_idEmpresa,
                            'lpv_IdTab': dbModel[0].lpv_IdTab,
                            'lpv_IdProducto': dbModel[0].lpv_IdProducto,
                            'lpv_codLp': dbModel[0].lpv_codLp,
                            'lpv_prcBase': dbModel[0].lpv_prcBase,
                            'lpv_factorue': dbModel[0].lpv_factorue,
                            'lpv_prcFin': dbModel[0].lpv_prcFin,
                            'lpv_TipCalc': dbModel[0].lpv_TipCalc,
                            'lpv_delet': dbModel[0].lpv_delet
                            
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