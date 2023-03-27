console.log("Shalom ieladim"); //ej 1 mostrar un mensaje por consola

function arrayej2fun(){let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];console.log(array);} //ej 2 function  mostrar los valores de un array en la consola, (lo hacemos con una función tradicional, y con una función flecha)
arrayej2fun();
let arrayej2fle = ()=>{let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];console.log(array);} //ej 2 flecha
arrayej2fle();


let arrayej3 = [1,2,3,4,5,6,7,8,9,10]  
let arrayej3fle = (arrayej3)=>{arrayej3.push(11); console.log(arrayej3);} //ej 3 gregar un valor a un array y mostrar (el array) por consola (funciones flecha)
arrayej3fle(arrayej3);

let arrayej4 =["hola", "como va", "hola", "chao", "hola"]
let pos = arrayej4.lastIndexOf('hola')  //ej 4 devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo
console.log(pos);

let arrayej5 = [1,2,3,4,5,6,7,8,9,10]  
let suma = arrayej5.reduce((acumulador,valoractual) => acumulador + valoractual,0); // Ej 5 mostrar por consola la sumatoria de todos los valores de un array de valores numericos
console.log(suma);  

let arrayej6 = [1,2,3,4,5,6,7,8,9,10]  
let rev = arrayej6.reverse(); //Ej 6 inviertir el orden de los elementos de un array
console.log(rev);  

let arrayej7 = [10,9,8,7,6,5,4,3,2,1]
let ord =arrayej7.sort();
console.log(ord);


