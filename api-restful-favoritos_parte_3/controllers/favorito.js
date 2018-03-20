'use strict'

var Favorito = require('../models/favorito');

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
    var idFavorito = req.params.id;
    Favorito.findById (idFavorito, function(err,favorito){
      if(err)
        res.status(500).send({ message :' Error al devolver los marcadores'});
      if(!favorito)
        res.status(400).send({ message :' No hay marcadores'});
     
        res.status(200).send({favorito});

    }); 
}

function getFavoritos(req,res){  
    Favorito.find({}).sort('-_id').exec((err,favoritos) => {
      if(err)
        res.status(500).send({ message :' Error al devolver los marcadores'});
      if(!favoritos)
        res.status(400).send({ message :' No hay marcadores'});
     
        res.status(200).send({favoritos});
    });
}

function saveFavorito(req,res){  
   var favorito = new Favorito();
   var params = req.body; 
    favorito.titulo = params.titulo;
    favorito.url = params.url;
    favorito.description = params.description;
    favorito.save(function(err,favoritoStored){
    if(err){
      res.status(500).send({ message :' Error al insertar el favorito'});

   }else
     res.status(200).send({ favorito : favoritoStored}); });

}

function updateFavorito(req,res){  
    var idFavorito = req.params.id;
    var params = req.body;
    
    Favorito.findByIdAndUpdate(idFavorito,params,(err, favoritoUpdate)=>{
    
      if(err){
      res.status(500).send({ message :' Error al actualizar el favorito'});
    }else
    res.status(200).send({ favorito : favoritoUpdate});
    });
}

function deleteFavorito(req,res){  
  var idFavorito = req.params.id;
  var params = req.body;
  
  Favorito.findById (idFavorito, function(err,favorito){
    if(err)
      res.status(500).send({ message :' Error al devolver los marcadores'});
    if(!favorito)
      res.status(400).send({ message :' No hay marcadores'});
    else{

      favorito.remove(err => {
          if(err){
            res.status(500).send({ message :' Error marcado no se ha eliminado'});

          }else{
            res.status(200).send({ mesaage : "El marcador se ha borrado"});
          }

      });
    }
     

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
