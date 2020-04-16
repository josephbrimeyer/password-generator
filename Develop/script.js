// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength;
let upperString = "ABCDEFGHILKJMNOPQRSTUVWXYZ";
let lowerString = "abcdefghijklmnopqrstuvwxyz"
let numberString = "0123456789";
let symbolString = "!#$%&()*+-^<[?@]";
let myString = "";
let finalPassword = "";

function writePassword() {
  let password = finalPassword;
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log();
}
function userInput() {
  finalPassword = "";
  passwordLength = prompt("How many characters would you like your password to be?");
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  }
  let upperC = confirm("Do you want upper case letters in your password?");
  if (upperC) {
    myString += upperString
    }
  let lowerC = confirm("Would you like to have lower case letters in your password?");
  if (lowerC) {
    myString += lowerString
    }
  let numbers = confirm("Would you like to have numbers in your password?");
  if (numbers) {
    myString += numberString
    }
  let symbols = confirm("Would you like to have special characters in your password?");
  if (symbols) {
    myString += symbolString
    }
  if (upperC === false && lowerC === false && numbers === false && symbols === false) {
    alert("You must select at least one of the criteria!  Please try again.");
    return;
  }
  console.log(myString);
  console.log(passwordLength);

  generatePassword()
  writePassword()
  
}
function generatePassword() {
  console.log(passwordLength);
  console.log(myString)
  console.log(myString.length);
    for (let i = 0; i < passwordLength; i++) {
    let random = Math.floor(Math.random() * myString.length);
    finalPassword += myString.substring (random,random+1);
    console.log(finalPassword);
  }
  return finalPassword;
}
generateBtn.addEventListener("click", userInput);


