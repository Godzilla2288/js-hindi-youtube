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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => bk.edition > 2010 )
// const userBooks = books.filter( (bk) => {                                 // Here used 'Return'
//     return bk.genre === 'Science' && bk.edition > 2014                   // Keyword because of
//   } )                                                                   // Curly Braces.[Scope]
console.log(userBooks);

//  =>
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]






















































