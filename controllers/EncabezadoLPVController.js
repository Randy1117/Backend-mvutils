const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_encab_IdEncabezado,_encab_idEmpresa,_encab_fechaInicio,_encab_fechaFin,_encab_timestamp,_encab_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                  "_encab_IdEncabezado":  _encab_IdEncabezado,
                  "_encab_idEmpresa":  _encab_idEmpresa,
                  "_encab_fechaInicio":  _encab_fechaInicio,
                  "_encab_fechaFin":  _encab_fechaFin,
                  "_encab_timestamp":  _encab_timestamp, 
                  "_encab_delet":  _encab_delet

                };

                objDB.mv_EncabezadoLPV.create(
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
    Actualizar(_encab_IdEncabezado,_encab_idEmpresa,_encab_fechaInicio,_encab_fechaFin,_encab_timestamp,_encab_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "_encab_IdEncabezado":  _encab_IdEncabezado,
                    "_encab_idEmpresa":  _encab_idEmpresa,
                    "_encab_fechaInicio":  _encab_fechaInicio,
                    "_encab_fechaFin":  _encab_fechaFin,
                    "_encab_timestamp":  _encab_timestamp, 
                    "_encab_delet":  _encab_delet
  
                };

                objDB.mv_EncabezadoLPV.update(
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
                objDB.mv_EncabezadoLPV.findAll({
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
                            "encab_IdEncabezado"  :  dbModel[0].encab_IdEncabezado,
                            "encab_idEmpresa"  :  dbModel[0].encab_idEmpresa,
                            "encab_fechaInicio"  :  dbModel[0].encab_fechaInicio,
                            "encab_fechaFin"  :  dbModel[0].encab_fechaFin,
                            "encab_timestamp"  :  dbModel[0].encab_timestamp, 
                            "encab_delet"  :  dbModel[0].encab_delet
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