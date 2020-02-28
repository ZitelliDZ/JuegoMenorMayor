$(document).ready(function () {


var nivel = 0;
var intentos = 3;
var tolerance;

var frac1;
var frac2;


$("#boton1").css("visibility", "hidden");
$("#boton2").css("visibility", "hidden");
$("#text1").css("visibility", "hidden");
$("#text2").css("visibility", "hidden");


$("#boton3").click(Comenzar);
$("#frac2").html($("barraprogresiva").val());
console.log($("barraprogresiva").val());

function Comenzar() {
	calculardificultad();
	$("#number").css("color","#fff");
	$("#intentos").html("3");

	$("#felicidades").html("No Quiero Meterte Presión Pero");
	$("#loser").html("=^)");
	$("#pregunta").html("?");

	$("#intentos").css("color","#fff");

	$("#barraprogresiva").css("width", "0%");
	$("#boton1").css("visibility", "visible");
	$("#boton2").css("visibility", "visible");
	
	$("#boton3").css("visibility", "hidden");
	$("#frac1").html(decimalToFraction(frac1));
	$("#frac2").html(decimalToFraction(frac2));
	$("#frac1").css("visibility", "visible");
	$("#frac2").css("visibility", "visible");
	
	$("#loser").html("=^)");
	$("#number").html("");
	comenzarreloj();
}

/*
calculardificultad();


$("#frac1").html(decimalToFraction(frac1));
$("#frac2").html(decimalToFraction(frac2));

//$("#frac3").html(frac1);
//$("#frac4").html(frac2);
*/


$("#boton1").click(Mayor);
$("#boton2").click(Menor);



function decimalToFraction(value, donly = true) {
	var h1 = 1;
	var h2 = 0;
	var k1 = 0;
	var k2 = 1;
	var i;
	
	if (parseInt(value) == value) { // si el valor es un número entero, detener el código
		return value;
	} else if (value < 0) {
		value = -value;
	}
	
	if (donly) {
		i = parseInt(value);
		value -= i;
	}
	
	var b = value;
	
	do {
		var a = Math.floor(b);
		var aux = h1;
		h1 = a * h1 + h2;
		h2 = aux;
		aux = k1;
		k1 = a * k1 + k2;
		k2 = aux;
		b = 1 / (b - a);
	} while (Math.abs(value - h1 / k1) > value * tolerance);
	
	return  ((donly & (i != 0)) ? i +'*'+ ' ' : '') + (h1 == 0 ? '' : h1 + "/" + k1);
}


function calculardificultad() {


	var negativo;


	if(Math.floor(Math.random()*10)%2 == 0 ){
		negativo = -1;
	}else{
		negativo = 1;
	}

	frac1= Math.random();
	if((0 < (frac1 - 0.012)) && ((frac1 + 0.012) <1)){
  		frac2= frac1 + (0.012 * negativo);
  	}else{
  		frac2= frac1 + (0.0012 * negativo);
  	}

	switch (nivel) {
	  case 0:
	    frac1= Math.floor(Math.random()*100)+1;
	    frac2= Math.floor(Math.random()*100)+1;
	    break;
	  case 1:
	  	tolerance = 1.0E-2;	  
	    break;
	  case 2:
	  	tolerance = 1.0E-3;   
	    break;
	  case 3:
	    tolerance = 1.0E-4;
	    break;
	  
	  default:
	  	tolerance = 1.0E-5;
	    break;
	}
}

function Mayor() {
	if(frac1 > frac2){
		if(nivel != 4){
			actualizarBarra();
			nivel += 1;

			calculardificultad();
			$("#frac1").html(decimalToFraction(frac1));
			$("#frac2").html(decimalToFraction(frac2));
		}else{
			$("#barraprogresiva").css("width", "100%"); 
			$("#confetti").css('visibility', 'visible');
			$("#felicidades").html("Felicidades !!!");
			$("#loser").html("=^o");
			window.clearInterval(tiempo);
		}

		
	}else{
		if(intentos==3){
			intentos -= 1;
			$("#number").css("color","#FDDA50");
			$("#intentos").css("color","#FDDA50");
			$("#intentos").html(intentos);
		}else{
			if(intentos==2){
				intentos -= 1;
				$("#number").css("color","#D40101");
				$("#intentos").css("color","#D40101");
				$("#intentos").html(intentos);

			}else{
				$("#number").css("color","#FF0000");
				$("#intentos").css("color","#FF0000");
				$("#intentos").html("0");
				$("#loser").html("Loser");
				$("#boton1").css("visibility", "hidden");
				$("#boton2").css("visibility", "hidden");

				$("#text1").css("visibility", "hidden");
				$("#boton3").css("visibility", "visible");
				window.clearInterval(tiempo);
				nivel=0;
				intentos=3;
				$("#number").html("");
				$("#pregunta").html("");
				$("#frac1").css("visibility", "hidden");
				$("#frac2").css("visibility", "hidden");
			}
		}
	}
}
function Menor() {
	if(frac1 < frac2){
		if(nivel != 4){
			actualizarBarra();
			nivel += 1;

			calculardificultad();
			$("#frac1").html(decimalToFraction(frac1));
			$("#frac2").html(decimalToFraction(frac2));
		}else{
			$("#barraprogresiva").css("width", "100%"); 
			$("#confetti").css('visibility', 'visible');
			$("#felicidades").html("Felicidades !!!");
			$("#loser").html("=^o");
			window.clearInterval(tiempo);
		}

		
	}else{
		if(intentos==3){
			intentos -= 1;
			$("#number").css("color","#FDDA50");
			$("#intentos").css("color","#FDDA50");
			$("#intentos").html(intentos);
		}else{
			if(intentos==2){
				intentos -= 1;
				$("#number").css("color","#D40101");
				$("#intentos").css("color","#D40101");
				$("#intentos").html(intentos);

			}else{
				$("#number").css("color","#FF0000");
				$("#intentos").css("color","#FF0000");
				$("#intentos").html("0");
				$("#loser").html("Loser");
				$("#boton1").css("visibility", "hidden");
				$("#boton2").css("visibility", "hidden");

				$("#text1").css("visibility", "hidden");
				$("#boton3").css("visibility", "visible");
				window.clearInterval(tiempo);
				nivel=0;
				intentos=3;
				$("#number").html("");

				$("#pregunta").html("");
				$("#frac1").css("visibility", "hidden");
				$("#frac2").css("visibility", "hidden");
			}
		}
	}
}

function actualizarBarra(){
	switch(nivel){
	  case 0:
	   	$("#barraprogresiva").css("width", "20%");
	    break;
	  case 1:
	   	$("#barraprogresiva").css("width", "40%");  
	    break;
	  case 2:
	   	$("#barraprogresiva").css("width", "60%"); 
	    break;
	  case 3:
	   	$("#barraprogresiva").css("width", "80%");
	    break;
	  
	  default:
	  	
	    break;
	}
}


var n ;
var l; 
var tiempo;
function comenzarreloj(argument) {
	$("#text1").css("visibility", "visible");
	$("#text2").css("visibility", "visible");

	
	n = 15;
	l = document.getElementById("number");
	tiempo = window.setInterval(function(){
		if(n < 0){
			$("#number").css("color","#D40101");
			
			$("#loser").html("Loser");
			$("#boton1").css("visibility", "hidden");
			$("#boton2").css("visibility", "hidden");

			$("#text1").css("visibility", "hidden");
			$("#boton3").css("visibility", "visible");
			window.clearInterval(tiempo);
			nivel=0;
			intentos=3;
			$("#number").html("");

			$("#pregunta").html("");
			$("#frac1").css("visibility", "hidden");
			$("#frac2").css("visibility", "hidden");
			
		}else{
		
			l.innerHTML = n;
	  		n--;

		}



	},1000);


}



});




