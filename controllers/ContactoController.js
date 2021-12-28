const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_con_idContacto,_con_idEmpresa,_con_nombre,_con_apellido,_con_Correo,_con_telefono,_con_puesto,_con_idExterna,_con_fechaNac,_con_Curp,_con_rfc,_con_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                   "contac_con_idContacto":_con_idContacto, 
                   "contac_con_idEmpresa": _con_idEmpresa,
                   "contac_con_nombre": _con_nombre,
                   "contac_con_apellido":_con_apellido, 
                   "contac_con_Correo":_con_Correo, 
                   "contac_con_telefono": _con_telefono, 
                   "contac_con_puesto":_con_puesto,
                   "contac_con_idExterna": _con_idExterna,
                   "contac_con_fechaNac":_con_fechaNac,
                   "contac_con_Curp":_con_Curp,
                   "contac_con_rfc":_con_rfc,
                   "contac_con_delete": _con_delete, 

                };

                objDB.mv_Contactos.create(
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
    Actualizar(_con_idContacto,_con_idEmpresa,_con_nombre,_con_apellido,_con_Correo,_con_telefono,_con_puesto,_con_idExterna,_con_fechaNac,_con_Curp,_con_rfc,_con_delete)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "contac_con_idContacto":_con_idContacto, 
                    "contac_con_idEmpresa": _con_idEmpresa,
                    "contac_con_nombre": _con_nombre,
                    "contac_con_apellido":_con_apellido, 
                    "contac_con_Correo":_con_Correo, 
                    "contac_con_telefono": _con_telefono, 
                    "contac_con_puesto":_con_puesto,
                    "contac_con_idExterna": _con_idExterna,
                    "contac_con_fechaNac":_con_fechaNac,
                    "contac_con_Curp":_con_Curp,
                    "contac_con_rfc":_con_rfc,
                    "contac_con_delete": _con_delete, 
 
                };

                objDB.mv_Contactos.update(
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
                objDB.mv_Contactos.findAll({
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
                            'con_idContacto': dbModel[0].con_idContacto, 
                            'con_idEmpresa': dbModel[0].con_idEmpresa,
                            'con_nombre': dbModel[0].con_nombre,
                            'con_apellido': dbModel[0].con_apellido, 
                            'con_Correo': dbModel[0].con_Correo, 
                            'con_telefono':  dbModel[0].con_telefono, 
                            'con_puesto': dbModel[0].con_puesto,
                            'con_idExterna':  dbModel[0].con_idExterna,
                            'con_fechaNac':  dbModel[0].con_fechaNac,
                            'con_Curp': dbModel[0].con_Curp,
                            'con_rfc': dbModel[0].con_rfc,
                            'con_delete': dbModel[0].con_delete, 
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

