// Terminal - node 05_iterations/nine.js


const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);     
    return acc + currval
}, 0)

console.log(myTotal);

// => acc: 0 and currval: 1
//    acc: 1 and currval: 2
//    acc: 3 and currval: 3
//    6
                                                                          // Using Arrow Function.
const myTotal1 = myNums.reduce( (acc1, currval1) => acc1 + currval1 , 0 )
console.log(myTotal1);           //  => 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);

// => 22996




