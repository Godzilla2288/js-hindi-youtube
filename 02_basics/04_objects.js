// {} = Empty Object

// const tinderuser = new Object() => {} // Singleton Object
const tinderuser = {} // => {}  // Non-Singleton Object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
  // =>  { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(tinderuser);

const regularUser = {        // Nested Objects
    email: "some@gmail.com",
    fullname: {                // console.log(regularUser.fullname);
        userfullname: {      // => { userfullname: { firstname: 'sourav', lastname: 'guha roy' } }
            firstname: "sourav",
            lastname: "guha roy"
        }
    }   // console.log(regularUser.fullname.userfullname);
}   // =>  { firstname: 'sourav', lastname: 'guha roy' }

 console.log(regularUser.fullname.userfullname.firstname);
    //  =>  sourav

     // MERGING OBJECTS

     // Unlike in Arrays where you could only Define VALUES , in case of Objects you
          // can Define Both  KEYS  and VALUES.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // Wrong way to Merge Objects.
// console.log(obj3);  =>  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2,obj4)   // Empty Object act as TARGET.
// console.log(obj3); // obj1, obj2 AND obj4 act as SOURCE.

// it is not compulsory to add an Empty Object({}) but in many Production Grade it is Added. 

      // SPREAD OPERATOR
const obj3 = {...obj1, ...obj2, ...obj4} //  Same concept as ARRAY Merging and 90% of the time 
                                          // WE will use this SYNTAX.
//    console.log(obj3); // =>  { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// const obj1 = {1: "a", 2: "b"}   // When MERGING Objects there can not be SAME KEYS,
// const obj2 = {2: "c", 4: "d"}   // however there can be Same Values.
// const obj4 = {5: "e", 5: "a"}   //

  // const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);           // => { '1': 'a', '2': 'c', '4': 'd', '5': 'a' }


// When the VALUES comes from the DATABASE, it comes like this below :

const users = [ // Majority of the times when it will come from the Database it will come
                               // as ARRAY OF OBJECTS.
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].id); // => 2
console.log(tinderuser);  // =>  { id: '123abc', name: 'Sammy', isLoggedIn: false }

//  Method to get all the Keys of an Object
console.log(Object.keys(tinderuser)); // =>  [ 'id', 'name', 'isLoggedIn' ] // Array Datatype.
// It is very interesting and very important and in future  when making Projects and specially
//   when working with Database, we will use these things.
console.log(Object.values(tinderuser)); // => [ '123abc', 'Sammy', false ]  // Array Datatype.

console.log(Object.entries(tinderuser));  //  Not used often
// => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// Checks whether a Value/Property exists or not.When using a loop on a Object to check if a Value
//      Exists or Not and if the Value does not exist then it may crash , that's why it is Used.

console.log(tinderuser.hasOwnProperty('name')); // => true // Only works on KEYS.
console.log(tinderuser.hasOwnProperty('Sammy')); // => false // ??. Does Not work on VALUES.


// Terminal = node 02_basics/04_objects.js
