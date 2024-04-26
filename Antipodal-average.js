console.log("PROMEDIO ANTIPODA");

const ARR = [1, 2, 3, 5, 22, 6];
console.log(ARR);
let i, res = [];
function acortar(matriz) {
    ar1 = matriz.splice(0,(matriz.length/2));
    //primera mitad = variable.acortar(donde inicia, donde termina[tamaño de la matriz/2]);
    matriz.reverse();
    for ( i=0; i < matriz.length; i++ ){
        res.push((ar1[i] + matriz[i])/2);
    }
    return res;
}
console.log(acortar(ARR));