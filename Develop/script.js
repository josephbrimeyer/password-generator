// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength = prompt("How many characters would you like to have in your password?");
let minLength = 8;
let maxLength = 128;
let upCase = confirm("Do you want upper case letters in your password?");
let lowCase = confirm("Would you like to have lower case letters in your password?");
let nums = confirm("Would you like to have numbers in your password?");
let syms = confirm("would you like to have special characters in your password?");


console.log(passwordLength);
console.log(upCase);
console.log(nums);
console.log(syms);

//let newString = "";


//if (nums) {
  //newString.
//}

//let userInput = {
  //passwordLength: (answer),
  //upperCase: (answer),
  //lowerCase: (answer),
  //numbers: (answer),
  //symbols: (answer),

//}
//console.log(userInput);

//var car = {
  //make: "Honda",
  //model: "Fit",
  //color: "Blue Raspberry",
  //mileage: 3000,
  //isWorking: true,

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let answer = confirm("Do you like apples?");
console.log(answer)