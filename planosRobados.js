
function robarPlanos(idPlano){
    if(idPlano>6 && idPlano<=50){

        let mensaje="tu plano es el " +idPlano;
        return (mensaje);

    }else{
        let error="el plano es falso"
        return(error)
    }
}

console.log(robarPlanos(7));

