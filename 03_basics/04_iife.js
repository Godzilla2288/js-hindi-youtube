//  Immediately Invoked Function Expressions (IIFE)                // ()()

// Sometimes there is a problem from Global Scope Pollution, so to Remove the pollution
// from Global Scope Variables or whatever declaration is there, we have used IIFE.


function chai(){             // Normal way of invoking a function
    console.log(`DB CONNECTED`);
}
// chai()


(function chai1(){
    console.log(`DB CONNECTED`);
})();

( function  aurcode() {
    console.log(`DB CONNECTED TWO`);
} )()

















