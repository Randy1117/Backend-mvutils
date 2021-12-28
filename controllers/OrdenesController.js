const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(
        _or_idorden,
        _or_idEmpresa,
        _or_idordenExt,
        _or_idCLiente,
        _or_ordenOrigen,
        _or_codMon,
        _or_subtotal,
        _or_descTotal,
        _or_descImp,
        _or_envioTotal,
        _or_envImp,
        _or_totalImp,
        _or_totalFinal,
        _or_clienteIP,
        _or_agenteID,
        _or_dirEnvioID,
        _or_dirFactID,
        _or_idCondPago,
        _or_idListaP,
        _or_mensaje,
        _or_delete
        )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "order_idorden": _or_idorden,
                   "order_idEmpresa": _or_idEmpresa,
                   "order_idordenExt": _or_idordenExt,
                   "order_idCLiente": _or_idCLiente,
                   "order_ordenOrigen": _or_ordenOrigen, 
                   "order_codMon": _or_codMon,
                   "order_subtotal": _or_subtotal,
                   "order_descTotal": _or_descTotal, 
                   "order_descImp":  _or_descImp,
                   "order_envioTotal":  _or_envioTotal,
                   "order_envImp":  _or_envImp,
                   "order_totalImp": _or_totalImp, 
                   "order_totalFinal": _or_totalFinal, 
                   "order_clienteIP":  _or_clienteIP, 
                   "order_agenteID": _or_agenteID,
                   "order_dirEnvioID": _or_dirEnvioID, 
                   "order_dirFactID": _or_dirFactID,
                   "order_idCondPago":  _or_idCondPago,
                   "order_idListaP": _or_idListaP,
                   "order_mensaje": _or_mensaje,
                   "order_or_delete":  _or_delete 

                };

                objDB.mv_ordenes.create(
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
        _or_idorden,
        _or_idEmpresa,
        _or_idordenExt,
        _or_idCLiente,
        _or_ordenOrigen,
        _or_codMon,
        _or_subtotal,
        _or_descTotal,
        _or_descImp,
        _or_envioTotal,
        _or_envImp,
        _or_totalImp,
        _or_totalFinal,
        _or_clienteIP,
        _or_agenteID,
        _or_dirEnvioID,
        _or_dirFactID,
        _or_idCondPago,
        _or_idListaP,
        _or_mensaje,
        _or_delete
        )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {

                   "order_idorden": _idorden,
                   "order_idEmpresa": _idEmpresa,
                   "order_idordenExt": _idordenExt,
                   "order_idCLiente": _idCLiente,
                   "order_ordenOrigen": _ordenOrigen, 
                   "order_codMon": _codMon,
                   "order_subtotal": _subtotal,
                   "order_descTotal": _descTotal, 
                   "order_descImp":  _descImp,
                   "order_envioTotal":  _envioTotal,
                   "order_envImp":  _envImp,
                   "order_totalImp": _totalImp, 
                   "order_totalFinal": _totalFinal, 
                   "order_clienteIP":  _clienteIP, 
                   "order_agenteID": _agenteID,
                   "order_dirEnvioID": _dirEnvioID, 
                   "order_dirFactID": _dirFactID,
                   "order_idCondPago":  _idCondPago,
                   "order_idListaP": _idListaP,
                   "order_mensaje": _mensaje,
                   "order_or_delete":  _or_delete 

                };

                objDB.mv_ordenes.update(
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
                objDB.mv_ordenes.findAll({
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
                        resolve( { "Codigo" : "-1", "Mensaje" : "La orden no existe" } );
                    }
                    else// if(filasEncontradas == 1)
                    {
                        let resultado = {
                            "Codigo" : "0",
                            "Mensaje" : "",
                            "idorden": dbModel[0].or_idorden,
                            "idEmpresa": dbModel[0].or_idEmpresa,
                            "idordenExt": dbModel[0].or_idordenExt,
                            "idCLiente": dbModel[0].or_idCLiente,
                            "ordenOrigen": dbModel[0].or_ordenOrigen, 
                            "codMon": dbModel[0].or_codMon,
                            "subtotal": dbModel[0].or_subtotal,
                            "descTotal": dbModel[0].or_descTotal, 
                            "descImp":  dbModel[0].or_descImp,
                            "envioTotal": dbModel[0].or_envioTotal,
                            "envImp": dbModel[0].or_envImp,
                            "totalImp": dbModel[0].or_totalImp, 
                            "totalFinal": dbModel[0].or_totalFinal, 
                            "clienteIP":  dbModel[0].or_clienteIP, 
                            "agenteID": dbModel[0].or_agenteID,
                            "dirEnvioID": dbModel[0].or_dirEnvioID, 
                            "dirFactID": dbModel[0].or_dirFactID,
                            "idCondPago":  dbModel[0].or_idCondPago,
                            "idListaP": dbModel[0].or_idListaP,
                            "mensaje": dbModel[0].or_mensaje,
                            "or_delete": dbModel[0].or_delete 



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

