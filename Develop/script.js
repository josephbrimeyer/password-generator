// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength;
let arrUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
let arrLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrSym = ["!", "#", ",", "$", "%", "&", "'", "(", ")", "*", "+", "-",
  ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let finalArr = [];

//let passwordLength = 
let answer = prompt("How many characters would you like to have in your password?");

if (answer < 8 || answer > 128) {
  alert("Please enter a number between 8 and 128.")
}
console.log(passwordLength);

let upperCase = confirm("Do you want upper case letters in your password?");
  //console.log(upperCase);
let lowerCase = confirm("Would you like to have lower case letters in your password?");
  //console.log(lowerCase);
let numbers = confirm("Would you like to have numbers in your password?");
  //console.log(numbers);
let symbols = confirm("would you like to have special characters in your password?");

//var x=prompt("what is 5+5?");
//while(x!=10){
	//alert("That's not right!");
	//var x=prompt("what is 5+5?");
	
//}
//alert("Good job!")

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

let upperC = confirm("Do you want upper case letters in your password?");
console.log(upperC)

for (let i = 0; i < arrUpper.length; i++) {
  let RNG = Math.floor(Math.random() * arrUpper.length)
  console.log(arrUpper[RNG])
};

if (upperC)
 {
   finalArr.push(arrUpper);
 }
 console.log(finalArr);

  for (let index = 0; index < finalArr.length; index++) {
  const insideArr = finalArr[index];
 }

   
   // for loop for random number
//for (let j = 0; j < passwordLength; j++) {
  //let nums = Math.floor(Math.random() * 10);
  //console.log(nums);
//}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
