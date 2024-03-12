const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // Do Not use PUSH Method to merge Two Arrays.

// console.log(marvel_heros); // => ['thor','Ironman','spiderman', ['superman','flash','batman'] ]
    // Array INSIDE of an Array. Here dc_heroes Array is an SINGLE Element in this Array.

// console.log(marvel_heros[3][1]); // => flash   

const allHeros = marvel_heros.concat(dc_heros) // For MERGING Two Arrays.
  // => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros); // This Method returns a new Array without Modifying any Existing Arrays.

const all_new_heros = [...marvel_heros, ...dc_heros] // Same output as Concat. // SPREAD OPERATOR
  // => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
  // Most people prefer this over CONCAT Operator to Concat/Add more than One Array.
console.log(all_new_heros);

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


