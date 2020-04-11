// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength = prompt("How many characters would you like to have in your password?");
let minLength = 8;
let maxLength = 128;
let upCase = confirm("Do you want upper case letters in your password?");
let lowCase = confirm("Would you like to have lower case letters in your password?");
let nums = confirm("Would you like to have numbers in your password?");
let syms = confirm("would you like to have special characters in your password?");
let input;
//if (passwordLength < 8 || passwordLength > 128) {
//alert("Please select a number between 8 and 128.")
//}

console.log(passwordLength);
console.log(upCase);
console.log(nums);
console.log(syms);

let upCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
let lowCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symsArray = ["!", "#", ",", "$", "%", "&", "'", "(", ")", "*", "+", "-",
  ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];



while (passwordLength > 8 || passwordLength < 128) {
  passwordLength = prompt("How many characters would you like to have in your password?");

  // If the letter is h, run the following functions/methods.
  if (letter === "h") {
    car.honk();
    reWriteStats();
  }
  // If the letter is d, run the following functions/methods.
  else if (letter === "d" && car.isWorking) {
    car.driveToWork();
    reWriteStats();
  }
  // If the letter is w, run the following functions/methods.
  else if (letter === "w" && car.isWorking) {
    car.driveAroundWorld();
    reWriteStats();
  }
  // If the letter is t, run the following functions/methods.
  else if (letter === "t") {
    car.getTuneUp();
    reWriteStats();
  }
}


// for loop for random number
for (let j = 0; j < passwordLength; j++) {
  let nums = Math.floor(Math.random() * 10);
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
