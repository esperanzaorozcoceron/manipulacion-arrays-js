const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++'); // Map lo que te permite es iterar sobre cada elemento del array y segun lo que hayas indicado que haga, te devuelve un nuevo array con los valores modificados.
// Por lo tanto  map sería un metodo inmutable para transformar los valores de un array

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);