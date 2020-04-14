// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength;
let upperString = "ABCDEFGHILKJMNOPQRSTUVWXYZ";
let lowerString = "abcdefghijklmnopqrstuvwxyz"
let numberString = "0123456789";
let symbolString = "!#$%&()*+-^<[?@]";
let myString = "";
let answer;

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log();
}
function useableCharacters(upperC, lowerC, numbers, symbols) {
  if (upperC) {
    myString += upperString
  }
  if (lowerC) {
    myString += lowerString
  }
  if (numbers) {
    myString += numberString
  }
  if (symbols) {
    myString += symbolString
  }
}

function userInput() {
  passwordLength = prompt("How many characters would you like your password to be?");
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  }
  let upperC = confirm("Do you want upper case letters in your password?");
  let lowerC = confirm("Would you like to have lower case letters in your password?");
  let numbers = confirm("Would you like to have numbers in your password?");
  let symbols = confirm("Would you like to have special characters in your password?");

  if (upperC === false && lowerC === false && numbers === false && symbols === false) {
    alert("You must select at least one of the criteria!  Please try again.");
    return;
  }
  
  useableCharacters()
  console.log(myString);
  generatePassword()
  writePassword()
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", userInput);
//............................................................................................................
// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);