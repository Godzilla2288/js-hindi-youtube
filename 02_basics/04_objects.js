// {} = Empty Object

// const tinderuser = new Object() => {} // Singleton Object
const tinderuser = {} // => {}  // Non Singleton Object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
  // =>  { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sourav",
            lastname: "guha roy"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "c", 4: "d"}
const obj4 = {5: "e", 5: "f"}

 const obj3 = { obj1, obj2}

// const obj3 = Object.assign(obj1, obj2,obj4)

// const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);











