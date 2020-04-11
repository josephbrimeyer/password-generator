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

// for loop for random number
for (let j = 0; j < passwordLength; j++) {
  let nums = Math.floor(Math.random()*10);
  console.log(nums);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
