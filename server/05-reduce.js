const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0) //aqui tenemos que enviar dos parametros, en este caso el primer parametro es nuestra arrow function y el segundo es el estado inicial de sum
console.log('rta', rta);
