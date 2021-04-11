

let Planos=(idPlanos)=>{
    if(idPlanos>6 && idPlanos<=50){

        let mensaje="EN HORA BUENA plano verdadero  " +idPlanos;
        return (mensaje);

    }else{
        let error="ERROR es falso, es falso"
        return(error);
    }
}

console.log(Planos(30 ))