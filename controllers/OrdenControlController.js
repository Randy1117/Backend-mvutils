const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(
        _ctd_idcotDetalle,
        _ctd_idordenes,
        _ctd_precioxvolumen,
        _ctd_prjconfirmarpedido,
        _ctd_prjavisoentrega,
        _ctd_tiempoentrega,
        _ctd_pedidoespecial,
        _ctd_vigenciacotizacion,
        _ctd_codreg,
        _ctd_tiplib,
        _ctd_tpcarga,
        _ctd_valida,
        _ctd_status,
        _ctd_delet  
    )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                   
                   "_ctd_idcotDetalle":_ctd_idcotDetalle,
                   "_ctd_idordenes":_ctd_idordenes,
                   "_ctd_precioxvolumen":_ctd_precioxvolumen,
                   "_ctd_prjconfirmarpedido":_ctd_prjconfirmarpedido,
                   "_ctd_prjavisoentrega":_ctd_prjavisoentrega,
                   "_ctd_tiempoentrega":_ctd_tiempoentrega,
                   "_ctd_pedidoespecial":_ctd_pedidoespecial,
                   "_ctd_vigenciacotizacion":_ctd_vigenciacotizacion,
                   "_ctd_codreg":_ctd_codreg,
                   "_ctd_tiplib":_ctd_tiplib,
                   "_ctd_tpcarga":_ctd_tpcarga,
                   "_ctd_valida":_ctd_valida,
                   "_ctd_status":_ctd_status,
                   "_ctd_delet":_ctd_delet             

                };

                objDB.mv_ordenControl.create(
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
    Actualizar(
        _ctd_idcotDetalle,
        _ctd_idordenes,
        _ctd_precioxvolumen,
        _ctd_prjconfirmarpedido,
        _ctd_prjavisoentrega,
        _ctd_tiempoentrega,
        _ctd_pedidoespecial,
        _ctd_vigenciacotizacion,
        _ctd_codreg,
        _ctd_tiplib,
        _ctd_tpcarga,
        _ctd_valida,
        _ctd_status,
        _ctd_delet  
    )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "_ctd_idcotDetalle":_ctd_idcotDetalle,
                    "_ctd_idordenes":_ctd_idordenes,
                    "_ctd_precioxvolumen":_ctd_precioxvolumen,
                    "_ctd_prjconfirmarpedido":_ctd_prjconfirmarpedido,
                    "_ctd_prjavisoentrega":_ctd_prjavisoentrega,
                    "_ctd_tiempoentrega":_ctd_tiempoentrega,
                    "_ctd_pedidoespecial":_ctd_pedidoespecial,
                    "_ctd_vigenciacotizacion":_ctd_vigenciacotizacion,
                    "_ctd_codreg":_ctd_codreg,
                    "_ctd_tiplib":_ctd_tiplib,
                    "_ctd_tpcarga":_ctd_tpcarga,
                    "_ctd_valida":_ctd_valida,
                    "_ctd_status":_ctd_status,
                    "_ctd_delet":_ctd_delet      
                };

                objDB.mv_ordenControl.update(
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
                objDB.mv_ordenControl.findAll({
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
                            'ctd_idcotDetalle': dbModel[0].ctd_idcotDetalle,
                            'ctd_idordenes': dbModel[0].ctd_idordenes,
                            'ctd_precioxvolumen': dbModel[0].ctd_precioxvolumen,
                            'ctd_prjconfirmarpedido': dbModel[0].ctd_prjconfirmarpedido,
                            'ctd_prjavisoentrega': dbModel[0].ctd_prjavisoentrega,
                            'ctd_tiempoentrega': dbModel[0].ctd_tiempoentrega,
                            'ctd_pedidoespecial': dbModel[0].ctd_pedidoespecial,
                            'ctd_vigenciacotizacion': dbModel[0].ctd_vigenciacotizacion,
                            'ctd_codreg': dbModel[0].ctd_codreg,
                            'ctd_tiplib': dbModel[0].ctd_tiplib,
                            'ctd_tpcarga': dbModel[0].ctd_tpcarga,
                            'ctd_valida': dbModel[0].ctd_valida,
                            'ctd_status': dbModel[0].ctd_status,
                            'ctd_delet': dbModel[0].ctd_delet
                                                    
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