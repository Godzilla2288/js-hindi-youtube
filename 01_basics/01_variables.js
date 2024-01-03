const accountId = 144562
let accountEmail = "sourav@google.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

// accountId = 2// not allowed

accountEmail = "sgr@gmail.com" 
accountPassword = "555555"
accountCity = "Bengalore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])