// Terminal - node 05_iterations/one.js

//    For   Loop

for (let i = 0; i < 10; i++) {    //  ctrl + D for Duplicating. //   => 0
    const element = i;                                          //   => 1
    if (element == 5) {                                         //   => 2
        // console.log("5 is best number");                        //   => 3
    }                                                           //   => 4
    // console.log(element);                                       //   => 5 is best number
}                                                               //   => 5
                                                                //   => 6
// console.log(i);                                              //   => 7
 //  => ReferenceError: i, is not defined.                      //   => 8
// Block Scope. 'i' Variable can not be accessed Outside the For Loop.    //   => 9

// console.log(element);   //  => ReferenceError: element is not defined

for (let i = 1; i <=10; i++) {
   console.log(`Outer loop value is: ${i}`);
    for (let j = 1; j <=10; j++) {       // Here we took 'j' instead of 'i' because we are in the
                                     // Same Scope as 'i' and there will be mismatch if we do it.
        // console.log(`Inner loop value is: ${j} Outer loop value is: ${i}`);
                       // We have Access of 'i' value inside 'j' because we are Inside the Scope.
        console.log( i+'*'+j + ' = ' + i*j  );               
    }                                            //  => 1*1 = 1
}
















