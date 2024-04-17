// Terminal - node 05_iterations/six.js

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);                                  // forEach does not Return Values.
    return item
} )

console.log(values);

//  =>
// js
// ruby
// java
// python
// cpp
// undefined

//                      Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                            
                                                             // It Returns Values
const newNums = myNums.filter( (num) => num>4 )            // Single Line Arrow Call-Back Function
console.log(newNums);

// => [ 5, 6, 7, 8, 9, 10 ]

const newNums1 = myNums.filter( (num) => {                 // When you write Curly Braces then you
  return  num>4 })                                        // Start a Scope  and when you start a
console.log(newNums1);                        // Scope, then you have to write the Return keyword 

//  => [ 5, 6, 7, 8, 9, 10 ]


const newNums2 = []                                        // Same thing as above but in 'forEach'

myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)                                 // This method is also right but it is 
    }                                                  // just a little lengthy. You can do in
} )                                                      // whatever method you like.

console.log(newNums2);

// => [ 5, 6, 7, 8, 9, 10 ]





























































