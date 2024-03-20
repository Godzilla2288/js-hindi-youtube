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

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ] // If you want a SINGLE Array
    // =>  [                              // and Do Not want an Array inside an Array inside      
    //          1, 2, 3, 4, 5,            // an Array then use the FLAT Method
    //          6, 7, 6, 7, 4,
    //          5
    //       ]
const real_another_array = another_array.flat(Infinity) // Here thr DEPTH is = 2 but you can use
console.log(real_another_array);       // INFINITY , so that you don't have to calculate the 
                                      // Depth Yourself.

console.log(Array.isArray("Hitesh")); // => false. Checks whether "HITESH" is an ARRAY or not?? 
console.log(Array.isArray(["Hitesh"])); // => true
console.log(Array.from("Hitesh")); // => [ 'H', 'i', 't', 'e', 's', 'h' ]
   // Tries to CONVERT the Value into an Array.

   console.log(Array.from({name: "hitesh" })) // => []. EMPTY ARRAY.
    // It can not directly convert it so it gives an Empty Array. Here it is Object, key value pair. Interesting Case for INTERVIEWS.

let score1 = 100    
let score2 = 200    
let score3 = 300    

console.log(Array.of(score1, score2, score3)); // => [ 100, 200, 300 ]
// Returns a new Array from a set of Elements. Now set of elements can be anything like
                                             // it can be Variables  or Arrays or Anything. 


