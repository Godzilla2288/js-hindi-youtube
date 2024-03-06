// Dates

let myDate = new Date()
 // let data = String(myDate)
 // console.log(data);

// console.log(myDate.toString());
// console.log(myDate.toDateString());  // Outputs only the DATE
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23) // Months start from 0 in javascript.
// console.log(myCreatedDate);             // Array
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")   // Same Answer
let myCreatedDate = new Date("01-14-2023")    // Same Answer
    //   let myCreatedDate = new Date("14-01-2023")    // Invalid Date
    // Indian type Date Time does not work.
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // Time in MILLISECONDS

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // The exact time when the Variable was created

console.log(Math.floor(Date.now()/1000)); // Converts Milliseconds to Seconds
        // Math.floor to omit the Decimal value.

