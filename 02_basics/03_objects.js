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
console.log(JsUser["email"]); // *That's why " " is being used. Prefer this Method
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
console.log(JsUser['email']); // => hitesh@google.com

JsUser.email = "hitesh@chatgpt.com" // How to change Object Values or Overwrite them.
                                     // => hitesh@chatgpt.com   // Email Value Changed.
// Object.freeze(JsUser) // Locking/Freezing of Values so that no one can Change them. 
JsUser.email = "hitesh@microsoft.com" // Email Value does not Change*
console.log(JsUser); 
/*  => {
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',*
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'                   // Symbol
  }       */

  JsUser.greeting = function () { // Adding a FUNCTION to the Object
      console.log("Hello JS user");
  }
  JsUser.greetingTwo = function () {
    console.log( `Hello JS user ${this.name}` ); // Only way to Reference the NAME inside this
 }     //  => Hello JS user Hitesh .                           // Object. { THIS = IMPORTANT }

console.log(JsUser.greeting); // => [Function (anonymous)]
 // The Function did not get Executed and only Reference of the Function came back. IMPORTANT

  console.log(JsUser.greeting()); // Accessing the greeting Function and the only way to 
                                           // Access a FUNCTION.
  console.log(JsUser.greetingTwo());

// Final Note : whenever we access Object Values, Majority of the time we will Access it
    //  through the DOT Method but there are Few cases where we have to use Square Brackets
    //  like for Smybols. Ex - {console.log(typeof JsUser[mySym]);}
