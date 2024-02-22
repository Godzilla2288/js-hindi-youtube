// primitive

// 7 typpes : String, Number, Boolean, Null, Undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
//console.log(typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34465682316764676n


// Reference ( Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "sourav",
    age : 24,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof bigNumber);



// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "souravguharoy"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
 email : "user@google.com",
 upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "sourav@google.com"

console.log(userOne);
console.log(userTwo);