// Terminal - node 05_iterations/four.js

//     For  in  Loop                                       // By default this Loop is used for
                                                           // Objects and Maps.

const myObject = {
    js: 'javascript',
    cpp: 'C++',                                      // Object
    rs: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// =>
// js shortcut is for javascript
// cpp shortcut is for C++
// rs shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {          // => 0              // Only prints the Indexing.
    console.log(key);                     // => 1
}                                         // => 2
                                          // => 3
                                          // => 4

for (const key in programming) {                          // Array
    console.log(programming[key]);                
}

// =>
// js
// rb
// py
// java
// cpp


const map = new Map()
map.set('IN', "India")                      
map.set('USA', "United States of America")  
map.set('Fr', "France") 
map.set('IN', "India")  

for (const key in map) {
    console.log(key);                //  => No Output
}












































































