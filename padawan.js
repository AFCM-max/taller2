
let padawan={
    nombre:"walter",
    edad:21,
    estatura:1.90,
    planeta:"tierra13"
}

function recibirdatos(aprendiz,clasificar){

if(aprendiz.edad<15){
    let mensaje= "manejo de la fuerza menor de 15"
    clasificar(mensaje);
}else{
    let mensaje="manejo de sable de luz mayor de 15"
    clasificar(mensaje);
}
}

recibirdatos(padawan, function(mensaje){
   console.log(padawan.nombre+ " Es " + mensaje);
});

