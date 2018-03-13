'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var  api = express.Router();

api.get('/prueba/:nombre?',FavoritoController.prueba);
api.get('/getFavorito/:id',FavoritoController.getFavorito);
api.get('/getFavoritos/:id',FavoritoController.getFavoritos);
api.post('/saveFavorito',FavoritoController.saveFavorito);
api.get('/updateFavorito/:id',FavoritoController.updateFavorito);
api.get('/deleteFavorito/:id',FavoritoController.deleteFavorito);


module.exports = api;


