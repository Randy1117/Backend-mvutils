const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_ct_idAgente,_ct_idEmpresa,_ct_nombre,_ct_Apellido,_ct_Puesto,_ct_Uid,_ct_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "_idcotDetalle":_ct_idcotDetalle,
                   "_idordenes":_ct_idordenes,
                   "_precioxvolumen":_ct_precioxvolumen,
                   "_prjconfirmarpedido": _ct_prjconfirmarpedido,
                   "_prjavisoentrega": _ct_prjavisoentrega,
                   "_tiempoentrega": _ct_tiempoentrega,
                   "_pedidoespecial": _pedidoespecial,
                   "_vigenciacotizacion": _ct_vigenciacotizacion,
                   "_codreg": _ct_codreg ,
                   "_tiplib": _ct_tiplib,
                   "_tpcarga":_ct_tpcarga,
                   "_valida":_ct_valida,
                   "_status": _ct_status,
                   "_delet": _ct_delet

                };

                objDB.mv_cotDetalle.create(
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
    Actualizar(_ct_idAgente,_ct_idEmpresa,_ct_nombre,_ct_Apellido,_ct_Puesto,_ct_Uid,_ct_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                   "_idcotDetalle":_ct_idcotDetalle,
                   "_idordenes":_ct_idordenes,
                   "_precioxvolumen":_ct_precioxvolumen,
                   "_prjconfirmarpedido": _ct_prjconfirmarpedido,
                   "_prjavisoentrega": _ct_prjavisoentrega,
                   "_tiempoentrega": _ct_tiempoentrega,
                   "_pedidoespecial": _ct_pedidoespecial,
                   "_vigenciacotizacion": _ct_vigenciacotizacion,
                   "_codreg": _ct_codreg ,
                   "_tiplib": _ct_tiplib,
                   "_tpcarga":_ct_tpcarga,
                   "_valida":_ct_valida,
                   "_status": _ct_status,
                   "_delet": _ct_delet
                };

                objDB.mv_cotDetalle.update(
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
                objDB.mv_cotDetalle.findAll({
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
                           'idcotDetalle':dbModel[0].cd_idcotDetalle,
                           'idordenes':dbModel[0].cd_idordenes,
                           'precioxvolumen':dbModel[0].cd_precioxvolumen,
                           'prjconfirmarpedido':dbModel[0].cd_prjconfirmarpedido,
                           'prjavisoentrega':dbModel[0].cd_prjavisoentrega,
                           'tiempoentrega':dbModel[0].cd_tiempoentrega,
                           'pedidoespecial':dbModel[0].cd_pedidoespecial,
                           'vigenciacotizacion':dbModel[0].cd_vigenciacotizacion,
                           'codreg':dbModel[0].cd_codreg ,
                           'tiplib':dbModel[0].cd_tiplib,
                           'tpcarga':dbModel[0].cd_tpcarga,
                           'valida':dbModel[0].cd_valida,
                           'status':dbModel[0].cd_status,
                           'delet':dbModel[0].cd_delet
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