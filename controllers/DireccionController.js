const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_dir_idDireccion,_dir_idEmpresa,_dir_idCliente,_dir_tipoDir,_dir_dirLIne1,_dir_dirLine2,_dir_ciudad,_dir_estado,_dir_CP,_dir_Pais,_dir_correo,_dir_tel,_dir_Referencia,_dir_NumeroExterior,_dir_NumerInterior,_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                  "_dir_idDireccion": _dir_idDireccion,
                  "_dir_idEmpresa": _dir_idEmpresa,
                  "_dir_idCliente": _dir_idCliente,
                  "_dir_tipoDir": _dir_tipoDir,
                  "_dir_dirLIne1": _dir_dirLIne1,
                  "_dir_dirLine2": _dir_dirLine2,
                  "_dir_ciudad": _dir_ciudad,
                  "_dir_estado": _dir_estado,
                  "_dir_CP": _dir_CP,
                  "_dir_Pais": _dir_Pais,
                  "_dir_correo": _dir_correo,
                  "_dir_tel": _dir_tel,
                  "_dir_Referencia": _dir_Referencia,   
                  "_dir_NumeroExterior": _dir_NumeroExterior, 
                  "_dir_NumerInterior": _dir_NumerInterior, 
                  "_delet": _delet           
              

                };

                objDB.mv_Direccion.create(
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
    Actualizar(_dir_idDireccion,_dir_idEmpresa,_dir_idCliente,_dir_tipoDir,_dir_dirLIne1,_dir_dirLine2,_dir_ciudad,_dir_estado,_dir_CP,_dir_Pais,_dir_correo,_dir_tel,_dir_Referencia,_dir_NumeroExterior,_dir_NumerInterior,_delet)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {

                    "_dir_idDireccion": _dir_idDireccion,
                    "_dir_idEmpresa": _dir_idEmpresa,
                    "_dir_idCliente": _dir_idCliente,
                    "_dir_tipoDir": _dir_tipoDir,
                    "_dir_dirLIne1": _dir_dirLIne1,
                    "_dir_dirLine2": _dir_dirLine2,
                    "_dir_ciudad": _dir_ciudad,
                    "_dir_estado": _dir_estado,
                    "_dir_CP": _dir_CP,
                    "_dir_Pais": _dir_Pais,
                    "_dir_correo": _dir_correo,
                    "_dir_tel": _dir_tel,
                    "_dir_Referencia": _dir_Referencia,   
                    "_dir_NumeroExterior": _dir_NumeroExterior, 
                    "_dir_NumerInterior": _dir_NumerInterior, 
                    "_delet": _delet        
                };

                objDB.mv_Direccion.update(
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
                objDB.mv_Direccion.findAll({
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
                            'dir_idDireccion':dbModel[0].dir_idDireccion,
                            'dir_idEmpresa':dbModel[0].dir_idEmpresa,
                            'dir_idCliente':dbModel[0].dir_idCliente,
                            'dir_tipoDir':dbModel[0].dir_tipoDir,
                            'dir_dirLIne1':dbModel[0].dir_dirLIne1,
                            'dir_dirLine2':dbModel[0].dir_dirLine2,
                            'dir_ciudad':dbModel[0].dir_ciudad,
                            'dir_estado':dbModel[0].dir_estado,
                            'dir_CP':dbModel[0].dir_CP,
                            'dir_Pais':dbModel[0].dir_Pais,
                            'dir_correo':dbModel[0].dir_correo,
                            'dir_tel':dbModel[0].dir_tel,
                            'dir_Referencia':dbModel[0].dir_Referencia,   
                            'dir_NumeroExterior':dbModel[0].dir_NumeroExterior,   
                            'dir_NumerInterior':dbModel[0].dir_NumerInterior,   
                            'delet':dbModel[0].delet   
                            
                            
                        
                           
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