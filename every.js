//every: Verifica que todos os elementos del array cumplan con la misma
//condicion. Si todos los elemtos cumplen con la condicion, devuelve
//verdadero, si uno de ellos no la cumple devuelve falso
const numeros = [10,20,30,40,50, -5];

//determinar si todos los elemntos del array de numeros son positivos

const soloPositivos = numeros.every( data => {
    return data >0;
});

const soloPositivosv2 = numeros.every ( data => data>0);

console.log(soloPositivos);

//forEach - every - filter
//verifivar si todos los elementos de una matriz son posistivos
const matriz = [[1,2,3], [4,-5,6], [7,8,9]];

matriz.forEach(function(item){
    console.log(item.every(item => item>0))
});
