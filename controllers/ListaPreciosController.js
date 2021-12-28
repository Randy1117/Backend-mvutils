const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_lp_IdListaPrecios,_lp_codLp,_lp_nomdLp,_lp_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                   "_lp_IdListaPrecios" :_lp_IdListaPrecios, 
                   "_lp_codLp"  : _lp_codLp,
                   "_lp_nomdLp"  :_lp_nomdLp, 
                   "_lp_delet"  :_lp_delet, 


                   lp_IdListaPrecios


                };

                objDB.mv_ListaPrecios.create(
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
    Actualizar(_lp_IdListaPrecios,_lp_codLp,_lp_nomdLp,_lp_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "_lp_IdListaPrecios" :_lp_IdListaPrecios, 
                    "_lp_codLp"  : _lp_codLp,
                    "_lp_nomdLp"  :_lp_nomdLp, 
                    "_lp_delet"  :_lp_delet, 
                };

                objDB.mv_ListaPrecios.update(
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
                objDB.mv_ListaPrecios.findAll({
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
                            'lp_IdListaPrecios': dbModel[0].lp_IdListaPrecios,
                            'lp_codLp': dbModel[0].lp_codLp,
                            'lp_nomdLp': dbModel[0].lp_nomdLp,                       
                            'lp_delet': dbModel[0].lp_delet,

                            
                         

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