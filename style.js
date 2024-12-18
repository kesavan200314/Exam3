
//three
let array = [3, 2, 3, 4, 5];
let f = array[0];
let l = array[array.length - 1];
console.log(f, l);

// forw
//for of loop
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
  console.log(number)
}
//map method
const numbers2= [1, 2, 3, 4, 5]
const doubled = numbers.map(number => number * 2)
console.log(doubled)

//reduce method
const numbers3 = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

//five
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  console.log(flattened);

  //sevan
//   .filter()
const x = [1, 2, 3, 4, 5];

const y = x.filter(el => el*2 === 2);

console.log("y is: ", y); 
//.find()
const one = [1, 2, 3, 4, 5];

const Two = x.find(el => el*2 === 2);

console.log("one is: ", Two); 








