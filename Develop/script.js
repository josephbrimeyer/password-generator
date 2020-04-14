// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordBtn = document.querySelector("#password");
let passwordLength;
let upperString = "ABCDEFGHILKJMNOPQRSTUVWXYZ";
let lowerString = "abcdefghijklmnopqrstuvwxyz"
let numberString = "0123456789";
let symbolString = "!#$%&()*+-^<[?@]";
let myString = "";
let answer = 0;

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log();
}


passwordLength = prompt("How many characters would you like your password to be?");
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?")); 
{


let upperC = confirm("Do you want upper case letters in your password?");
console.log(upperC);
let lowerC = confirm("Would you like to have lower case letters in your password?");
console.log(lowerC);
let numbers = confirm("Would you like to have numbers in your password?");
console.log(numbers);
let symbols = confirm("Would you like to have special characters in your password?");
console.log(symbols);

if (upperC === false || lowerC === false || numbers === false || symbols === false (alert("You might select at least one of the criteria!"))); 
{
  

if (upperC) {
  console.log(upperC)
}
if (lowerC) {
  console.log(upperC)
}
if (numbers) {
  console.log(numbers)
}
if (symbols) {
  console.log(symbols)
}
}

function UseableCharacters (upperC, lowerC, numbers, symbols) {
  if (upperC) {
    useableCharacters += upperString
  }
  if (lowerC) {
    useableCharacters += lowerString
  }
  if (numbers) {
    useableCharacters += numberString
  }
  if (symbols) {
    useableCharacters += symbolString
  }
}


//let myString = upperC.concat +(lowerC).concat(numbers).concat(symbols);

console.log(useableCharacters);

// Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

    // need a function here to generate random password and post it to HTML.
    function generatePassword() {
      let finalPassword = "";

      for (let i = 0; i < passwordLength; i++) {
        finalPassword += combinedArr[Math.floor(math.random() * combinedArr.length)];
      }
      return finalPassword;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
  }
}

