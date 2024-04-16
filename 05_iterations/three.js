// Terminal - 

//  for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 30, 4, 5]   // => 1
                               // => 2
for (const num of arr) {       // => 30
    console.log(num);          // => 4
}                              // => 5

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}
//  => 
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is            // If we don't want to print the 'space' then we can use the
// Each char is w          // "continue" Keyword in the loop.
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !


//   Maps
                                             // It is a Object.
const map = new Map()
map.set('IN', "India")                      // key value pair
map.set('USA', "United States of America")  // You get all "unique" values in Maps
map.set('Fr', "France") // It remembers the original insertion order of the keys, unlike objects
map.set('IN', "India")                      // key value pair

console.log(map);



