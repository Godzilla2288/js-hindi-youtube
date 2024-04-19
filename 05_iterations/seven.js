// Terminal - node 05_iterations/seven.js

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                                            // Same Call-Back Function like Before
 
const newNums = myNumbers.map( (num) => console.log((num + 10)) )             // No need to use 'Return' Keyword.
// const newNums = myNumbers.map( (num) => { return num + 10 } )

// console.log(newNums);                                                  // Automatically "Returns".
// =>
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//                    C_H_A_I_N__I_N_G

const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums1 = myNumbers1.map(   )

// const chai2 = () => {
//     let username = 2 + 2
//     console.log(username);                 //  => {}    // Empty Parenthesis.
// }

// chai2()

// const addTwo = (num1, num2) => {        // You can Store Arrow Functions inside a Variable.
//     // return num1 + num2
//     console.log( num1 + num2)
// }

// // console.log(addTwo(3, 4))  
// addTwo(3, 4)  

const newNums1 = myNumbers1
                 .map( (num) => num * 10 )            // The value of this method passes on to the
                 .map( (num) => num + 1 )             // Next chain/method
                .filter( (num) => num >= 40)

console.log(newNums1);

// => [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]
































