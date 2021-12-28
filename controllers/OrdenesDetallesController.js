const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(
        _ord_idordenDet,
        _ord_idEmpresa,
        _ord_idorden,
        _ord_numItem,
        _ord_idProducto,
        _ord_idUnidad,
        _ord_cantProducto,
        _ord_cantDIsp,
        _ord_idTes,
        _ord_precio,
        _ord_subtotal,
        _ord_desc,
        _ord_subdesc,
        _ord_numPV,
        _ord_delet
        )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                                      
                   "_ord_idordenDet":_ord_idordenDet,
                   "_ord_idEmpresa":_ord_idEmpresa,
                   "_ord_idorden":_ord_idorden,
                   "_ord_numItem":_ord_numItem,
                   "_ord_idProducto":_ord_idProducto,
                   "_ord_idUnidad":_ord_idUnidad,
                   "_ord_cantProducto":_ord_cantProducto,
                   "_ord_cantDIsp":_ord_cantDIsp,
                   "_ord_idTes":_ord_idTes,
                   "_ord_precio":_ord_precio,
                   "_ord_subtotal":_ord_subtotal,
                   "_ord_desc":_ord_desc,
                   "_ord_subdesc":_ord_subdesc,
                   "_ord_numPV":_ord_numPV,
                   "_ord_delet":_ord_delet,
                   
                };

                objDB.mv_ordenesDetalles.create(
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
        _ord_idordenDet,
        _ord_idEmpresa,
        _ord_idorden,
        _ord_numItem,
        _ord_idProducto,
        _ord_idUnidad,
        _ord_cantProducto,
        _ord_cantDIsp,
        _ord_idTes,
        _ord_precio,
        _ord_subtotal,
        _ord_desc,
        _ord_subdesc,
        _ord_numPV,
        _ord_delet
        )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "_ord_idordenDet":_ord_idordenDet,
                    "_ord_idEmpresa":_ord_idEmpresa,
                    "_ord_idorden":_ord_idorden,
                    "_ord_numItem":_ord_numItem,
                    "_ord_idProducto":_ord_idProducto,
                    "_ord_idUnidad":_ord_idUnidad,
                    "_ord_cantProducto":_ord_cantProducto,
                    "_ord_cantDIsp":_ord_cantDIsp,
                    "_ord_idTes":_ord_idTes,
                    "_ord_precio":_ord_precio,
                    "_ord_subtotal":_ord_subtotal,
                    "_ord_desc":_ord_desc,
                    "_ord_subdesc":_ord_subdesc,
                    "_ord_numPV":_ord_numPV,
                    "_ord_delet":_ord_delet,
                    
                };

                objDB.mv_ordenesDetalles.update(
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
                objDB.mv_ordenesDetalles.findAll({
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
                            'ord_idordenDet': dbModel[0].ord_idordenDet,
                            'ord_idEmpresa': dbModel[0].ord_idEmpresa,
                            'ord_idorden': dbModel[0].ord_idorden,
                            'ord_numItem': dbModel[0].ord_numItem,
                            'ord_idProducto': dbModel[0].ord_idProducto ,   
                            'ord_idUnidad': dbModel[0].ord_idUnidad,
                            'ord_cantProducto': dbModel[0].ord_cantProducto,
                            'ord_cantDIsp': dbModel[0].ord_cantDIsp,
                            'ord_idTes': dbModel[0].ord_idTes,
                            'ord_precio': dbModel[0].ord_precio,
                            'ord_subtotal': dbModel[0].ord_subtotal,
                            'ord_desc': dbModel[0].ord_desc,
                            'ord_subdesc': dbModel[0].ord_subdesc,
                            'ord_numPV': dbModel[0].ord_numPV,
                            'ord_delet': dbModel[0].ord_delet

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