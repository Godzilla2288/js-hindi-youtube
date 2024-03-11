// array

// () = Parenthesis
// {} = Braces/Curly Braces
// [] = Brackets/Square brackets

const myArr = [0, 1, 2, 3, 4, 5]
// The things inside of an Array are called "ELEMENTS". ex - 1.

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // It simply ADDS a value to an Array.
// myArr.push(7)
// myArr.pop()  // It simply REMOVES the Last value from an Array.

// myArr.unshift(9) // Adds a value to the FRONT of an Array.
// myArr.unshift(10) // => [ 10, 9, 0, 1, 2, 3, 4, 5]

// myArr.shift()  // Deletes a value from the FRONT of an Array.

// console.log(myArr.includes(9)); // Asks the question of whether the Array includes
//             // 9 or not?? [ In this case it returns => false (Boolean Type)]
// console.log(myArr.indexOf(9));  // => -1 . In this 9 does not Exist in the Array,          
//             // and so it returns -1 .
// console.log(myArr.indexOf(3));  // => 3 . In this case no 3 Exist in the Array,
//             // and so it returns the Index Position of no 3 which is 3 in this case.
            
// const newArr = myArr.join() // It converts the myArr ARRAY into STRING.

// console.log(myArr); // => [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // => 0,1,2,3,4,5
// console.log(typeof newArr); // => string.


 // SLICE, SPLICE

console.log("A ", myArr); // => A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // It Does Not Manipulate the ORIGINAL Array. 

console.log(myn1); // => [ 1, 2 ]
console.log("B ", myArr); // => B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) // It Manipulates the ORIGINAL Array. 
console.log("C ", myArr);  // => C  [ 0, 4, 5 ]
console.log(myn2); // => [ 1, 2, 3 ]
