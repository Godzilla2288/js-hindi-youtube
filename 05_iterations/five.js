// Terminal - node 05_iterations/five.js

//            ForEach  Loop                                        //  Only for Arrays.

const coding = ["js", "ruby", "java", "python", "cpp"]

                           // YouTube video TimeStamp - 24:00 - ch29
coding.forEach( function (val) {             // Callback Function has No function 'Name'.
    // console.log(val);                        // Here 'val' is the Parameter.
} )

//  =>
// js
// ruby
// java
// python
// cpp

 
coding.forEach( (val) => {                   // Callback 'Arrow' Function
    //   console.log(val);
} )

//  =>
// js
// ruby
// java
// python
// cpp

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)               // Only giving the Reference of the function and not 
                                      // Executing it.
//  =>
// js
// ruby
// java
// python
// cpp


coding.forEach(  (item, index, arr) => {                   // Callback 'Arrow' function.
    //   console.log(item, index, arr);               // You can also use (a, b, c) instead of 
} )                                                // (item, index, arr) in function Parameter.

// =>
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


//                  Objects    Inside    Arrays

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach(  (item) => {                                 // Accessing a Value inside an
    console.log(item.languageName);                            // Object which is inside an Array.
} )

//  =>
// javascript
// java
// python








