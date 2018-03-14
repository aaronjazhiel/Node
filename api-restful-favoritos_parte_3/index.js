
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://13.58.210.131:9000/cursofavoritos',function (err,rest){

if(err){
    throw err;
}else {

     console.log('Connetion the database mongo sussefull');
    app.listen(port,function(){
        console.log('API REST FAVORITOS http://localhost:' +port +'/favorito');
    });
}

});