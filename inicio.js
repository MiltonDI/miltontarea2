console.log("Primer programa funcional....");

const numeros = [7, 10, 20, 30, 40, 50, 60, 70, 1, 9, 11, 15];

//progrmacion imperativa
console.log("Programacion imperativa...");
for(var i=0; i<numeros.length; i++)
{
    console.log(numeros[i]);
}

//Progtamacion funcional
numeros.forEach( data => {
console.log("Elemento : ", data);
});

numeros.forEach (function(item){
    console.log("Elemeto => ", item)
});

//listar los elementos pares del vector de numeros
//utilice la funcion filter
const pares = numeros.filter(data => {
 return data%2==0;
});

const paresv2 = numeros.filter (data => data%2==0);

console.log("Elementos pares del vector: ",paresv2);

const arreglo=[1,2,3,4,5,6,7,8,9];
//elementos impares del vector numeros
const impares=function getImpares(array){
    return array.filter(data => {
        return (data%2==1);
    });
}

console.log("impares del vector números: ", impares(numeros));
console.log(" impares del vector arreglo ", impares(arreglo));

//Se tiene un vector fe ciudades. Se pide imprimir cada ciudad
const ciudades = ["Esmeraldas", "Quito", "Guayaquil", "Portoviejo", "Manta"];

ciudades.forEach(data => {
    console.log(data);
});

//Se tiene un parrafo, y cada palabra esta separada por un espacio
//en clanco. Se pide, utilizando la funcion split. imprimir cada
//palabra del parrafo:
//Bienvenido a la Puce sede Esmeraldas
//Bienvenido
//a
//la
//Puce
//sede
//Esmeraldas
const parrafo = "Bienvenido  a la Puce sede Esmeraldas";

function getPalabras(str){
    str.split(" ").forEach( data => {
        console.log(data);
    })
}

getPalabras(parrafo);
