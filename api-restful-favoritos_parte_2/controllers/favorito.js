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

function getFavorito(req,res){  
    var favoritoId = req.params.id;
    res.status(200).send({
                           data : "getFavorito"
                         });
}

function getFavoritos(req,res){  
    var favoritoId = req.params.id;
    res.status(200).send({
                           data : "getFavoritos"
                         });
}

function saveFavorito(req,res){  
    var params = req.body;
    res.status(200).send({
                           favorito : params
                         });
}

function updateFavorito(req,res){  
    var favoritoId = req.params.id;
    res.status(200).send({
                           data : "updateFavorito"
                         });
}

function deleteFavorito(req,res){  
    var favoritoId = req.params.id;
    res.status(200).send({
                           data : "delteFavorito"
                         });
}

module.exports = {
     prueba,
     getFavorito,
     deleteFavorito,
     updateFavorito,
     getFavoritos,
     saveFavorito
}
