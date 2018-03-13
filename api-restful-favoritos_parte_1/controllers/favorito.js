'use strict'

 function prueba(req,res){

    

if(req.params.nombre)
    var parametro = req.params.nombre;
else
var parametro = "SIN NOMBRE";


        res.status(200).send({
                            data:[2,3,4],
                            message : "Hola mundo con Node JS "+ parametro
                            });
}

module.exports = {
     prueba
}
