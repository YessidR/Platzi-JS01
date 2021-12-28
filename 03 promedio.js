

function calcularMediaAritmetica(lista){
    // let sumalista = 0;
    // for (let i = 0; i < lista.length; i++ ){
    //     sumalista = sumalista + lista[i];
    // }

    // El metodo reduce recibe una func y suma cada uno de los elementos
    const sumalista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumalista / lista.length;

    return promedioLista;
}