// Terminal - node 05_iterations/four.js

const myObject = {
    js: 'javascript',
    cpp: 'C++',
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

for (const key in programming) {          // => 0
    console.log(key);                     // => 1
}                                         // => 2
                                          // => 3
                                          // => 4

for (const key in programming) {     
    console.log(programming[key]);                
}

// =>
// js
// rb
// py
// java
// cpp

















































































