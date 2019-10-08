let username = "JackOfAllTrades";
let userCheck = /[\D][\D][\d]*/; // Change this line
let result = userCheck.test(username);

console.log(result);

//1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

// 2) Username letters can be lowercase and uppercase.

//3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.