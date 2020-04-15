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
// function useableCharacters(upperC, lowerC, numbers, symbols) {
//   if (upperC) {
//     myString += upperString
//     console.log(myString)
//   }
//   if (lowerC) {
//     myString += lowerString
//     console.log(myString)
//   }
//   if (numbers) {
//     myString += numberString
//     console.log(myString)
//   }
//   if (symbols) {
//     myString += symbolString
//     console.log(myString)
//   }
//   }

function userInput() {
  passwordLength = prompt("How many characters would you like your password to be?");
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  }
  let upperC = confirm("Do you want upper case letters in your password?");
  if (upperC) {
    myString += upperString
    console.log(myString)
  }
  let lowerC = confirm("Would you like to have lower case letters in your password?");
  if (lowerC) {
    myString += lowerString
    console.log(myString)
  }
  let numbers = confirm("Would you like to have numbers in your password?");
  if (numbers) {
    myString += numberString
    console.log(myString)
  }
  let symbols = confirm("Would you like to have special characters in your password?");
  if (symbols) {
    myString += symbolString
    console.log(myString)
  }
  if (upperC === false && lowerC === false && numbers === false && symbols === false) {
    alert("You must select at least one of the criteria!  Please try again.");
    return;
  }
  
  //useableCharacters()
  generatePassword()
  writePassword()
}
let finalPassword = "";
function generatePassword() {
  
  for (let i = 0; i < myString.length; i++) {
    let myString = Math.floor(Math.random() * passwordLength);
    finalPassword =+ myString;
    console.log(myString);
    console.log(finalPassword);
  }
  return finalPassword;
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