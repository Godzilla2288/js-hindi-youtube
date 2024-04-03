// Terminal = node 03_basics/02_scopes.js



{}  //  Curly Braces = SCOPE except Objects. In case of Objects {} are used as Object Declaration.
// When {} comes with Function or If else then, it is called SCOPE, i.e. scope of that program or 
// scope of that function or scope of that if else.

var c = 300  //    Everything written Outside the IF statement is called GLOBAL SCOPE.
let a = 300  //  The Value of a is totally Independent from the If Statement. 

if (true) {    //  Everything written Inside the IF statement is called BLOCK SCOPE.
    let a = 10  // Whatever you write in Global Scope is available in Block Scope.
    const b = 20
    var c = 30   // c = 30 => 30.
    console.log("INNER ", a);  //  => INNER  10
}
 
console.log(a); // => 300
// console.log(a); //=> ReferenceError: a is not defined
// console.log(b); => ReferenceError: b is not defined
console.log(c); // => 30. which is a problem because there should have been No Output here.
// c should not have been accessable Outside the If Statement. That's why Var is not used.




















