// singleton  [ only made with Constructors]
// Object.create   [ made with Constructor Method]

// object literals

const mySym = Symbol("key1") // defining a Symbol.


const JsUser = {
   name: "Hitesh", // behind the scenes the NAME Key is being kept as a String*
   "full name": "Hitesh Choudhary", // ***
   // mySym: "mykey1",  // It is Not being used as Smybol.
   [mySym]: "mykey1",  // Now it is being used as Smybol.
   age: 18,
   location: "Jaipur",
   email: "hitesh@google.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]  // Array Value
}

console.log(JsUser.email); // Try Not to use this technique
console.log(JsUser["email"]); // *That's why " " is being used.
// console.log(JsUser.full name); //  Wrong Syntax. we can not access the ***Above key from the 
                                    //  Dot Method.
// console.log(JsUser."full name"); //  Wrong Syntax
console.log(JsUser["full name"]); //  Right and the only way to access the ***Above key.

console.log(JsUser.mySym); // Wrong Syntax to access SYMBOL.
console.log(typeof JsUser.mySym);  // => Undefined.  Wrong Syntax.
console.log(typeof JsUser[mySym]);  // => String. Correct and the only Syntax to access SYMBOL.
console.log(typeof JsUser.age);   // => Number
console.log(typeof JsUser.isLoggedIn);   // => Boolean
console.log(typeof JsUser.lastLoginDays);   // => Object
console.log(typeof JsUser.email);   // => String
console.log(typeof JsUser["full name"]);   // => String






