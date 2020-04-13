// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordBtn = document.querySelector("#password");
let passwordLength;
let RNG = [];
let finalArr = [];
let answer = 0;

//let concatArr = arrUpper.concat(arrLower).concat(arrNum).concat(arrSym)
passwordLength = prompt("How many characters would you like your password to be?");
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?")); {

  let arrUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let arrLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrSym = ["!", "#", ",", "$", "%", "&", "'", "(", ")", "*", "+", "-",
  ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let upperC = confirm("Do you want upper case letters in your password?");
console.log(upperC);
let lowerC = confirm("Would you like to have lower case letters in your password?");
console.log(lowerC);
let numbers = confirm("Would you like to have numbers in your password?");
console.log(numbers);
let symbols = confirm("Would you like to have special characters in your password?");
console.log(symbols);

if (upperC = true) {
  console.log(arrUpper)
}
if (lowerC = true) {
  console.log(arrLower)
}
if (numbers = true) {
  console.log(arrNum)
}
if (symbols = true) {
  console.log(arrSym)
}

}

//function consoleInside() {

  //for (var i = 0; i < arrCombined.length; i++) {
   // console.log(arrCombined[i]);
  //}
  
  //console.log(arrCombined)

  //let tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

//if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  //alert("please enter a valid tag");
//} else {
 // var tag = document.createElement(tagName);
 // tag.textContent = "This was made via prompts. It's a " + tagName;
 // document.body.appendChild(tag);
//}
  //if (parseInt(selPassword) < 128 && parseInt(passwordLength) > 8) {
  //selPassword = false;

  //let upperC = confirm("Do you want upper case letters in your password?");
  //console.log(upperC);

  //for (let i = 0; i < arrUpper.length; i++) {
  // let RNG = Math.floor(Math.random() * arrUpper.length)
  // console.log(arrUpper[RNG])
  //}


  //for (let i = 0; i < arrLower.length; i++) {
  // let RNG = Math.floor(Math.random() * arrLower.length)
  // console.log(arrLower[RNG])
  //}



  //for (let i = 0; i < arrNum.length; i++) {
  // let RNG = Math.floor(Math.random() * arrNum.length)
  // console.log(arrNum[RNG])
  //}



  //for (let i = 0; i < symbols.length; i++) {
  // let RNG = Math.floor(Math.random() * arrSym.length)
  // console.log(arrSym[RNG])
  //}

  //while (!upperC && !lowerC && !numbers && !symbols) {
  //alert("You might select at least one of the following criteria!");
  //let upperC = confirm("Do you want upper case letters in your password?");
  //console.log(upperCase);
  //let lowerC = confirm("Would you like to have lower case letters in your password?");
  //console.log(lowerCase);
  //let numbers = confirm("Would you like to have numbers in your password?");
  //console.log(numbers);
  //let symbols = confirm("would you like to have special characters in your password?");
  // }

  //if (upperC) {
  // finalArr.push(arrUpper);
  //}
  //if (lowerC) {
  //finalArr.push(arrLower);
  // }
  // if (numbers) {
  // finalArr.push(arrNum)
  //}
  //if (symbols) {
  // finalArr.push(arrSym)
  // }

  //console.log(finalArr);

  //for (let index = 0; index < finalArr.length; index++) {
  // const insideArr = finalArr[index];
  //}
  //}
  //passwordBtn.addEventListener("click", function () {
  //let passwordLength;
  //let selPassword = true;
  //passwordLength = prompt("How many characters would you like your password to be?");
  //index = passwordLength;

    //for (let i = 8; i < index; i++) {

    //}

  //while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
   // passwordLength = Number(prompt("Please try again.  Length must be between 8-128 characters.  How many characters would you like your password to be?"));

  //while (selPassword) {

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
    //passwordLength = Number(prompt("Please try again.  Length must be between 8-128 characters.  How many characters would you like your password to be?"));

//let passwordLength = 
//function promptForPassword(text)
//{
// if (text == '' ){
// text = "Please enter a number between 8 and 128.";   
//}
// let number = parseInt(window.prompt(text, ""));
//checkNumber(number);

//}
//function checkNumber(number){

//if (number <= 128 && number >= 8) {
//document.write("Your number " + number + " matches the requirements", "");
//} else if (isNaN(number)) {
/// promptForPassword("You did not enter a number. Please enter a number from 8 to 128", "");
//} else {
//promptForPassword("Your number (" + number + ") is not between 8 and 128", "");
//}

//}
//let answer = prompt("How many characters would you like to have in your password?");

  //if (answer < 8 || answer > 128) {
  //alert("Please enter a number between 8 and 128.")
  //}
  //console.log(passwordLength);

  //while (!passwordLength > "7" || !passwordLength < "129") {
  //alert("Please enter a number between 8 and 128.");
  //let passwordLength = prompt("How many characters would you like to have in your password?");
  //}

  //let passwordLength = prompt("How many characters would you like to have in your password?");

  //let upperCase = confirm("Do you want upper case letters in your password?");
  //console.log(upperCase);
  //let lowerCase = confirm("Would you like to have lower case letters in your password?");
  //console.log(lowerCase);
  //let numbers = confirm("Would you like to have numbers in your password?");
  //console.log(numbers);
  //let symbols = confirm("would you like to have special characters in your password?");

  //alert("You must select at least one of the critera!  Please try again.");



  // for loop for random number
  //for (let j = 0; j < passwordLength; j++) {
  //let nums = Math.floor(Math.random() * 10);
  //console.log(nums);
  //}
