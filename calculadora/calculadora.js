'use strict'

var args = process.argv.slice(2);
var operation = args[1];
var num1 = args[0];
var num2 = args[2];

var resultado = "\n Introduce bien los párametros \n";

if(args.length == 3){
   
    switch(operation){

         case "mas":
            resultado = "Suma : " + (parseFloat(num1) + parseFloat(num2));
            break;
        

          case "menos":
            resultado = "Resta : " + (parseFloat(num1) - parseFloat(num2));
            break;
          
          case "por":
            resultado = "Multiplicación : " + (parseFloat(num1) * parseFloat(num2));
            break;

          case "division":
            resultado = "Divición : " + (parseFloat(num1) / parseFloat(num2));
            break;

    }
   

}


console.log(resultado);


