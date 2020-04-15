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
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log();
}
function userInput() {
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
  
  for (let i = 0; i < myString.length; i++) {
    let myString = Math.floor(Math.random() * passwordLength);
    finalPassword =+ myString;
    console.log(myString);
    console.log(finalPassword);
  }
  return finalPassword;
}
generateBtn.addEventListener("click", userInput);
