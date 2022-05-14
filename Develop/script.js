// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generatePassword() {
  var length = prompt("Choose how many characters from 8 to 128");
  while (length > 8 || length > 128 || isNaN(length)) {length = prompt("Please ender a number between 8-128");}

  var confirmLower = confirm("Do you want you password to include lower case letters?");
  var confirmUpper = confirm("Do you want you password to include upper case letters?");
  var confirmNumbers = confirm("Do you want your password to include numbers?");
  var confirmSpecial = confirm("Do you want your password to include special characters?");

  var lower = arrayFromLowToHigh(97, 122);
  var upper = arrayFromLowToHigh(65, 90);
  var numbers = arrayFromLowToHigh(48, 57);
  var symbols = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));

  function arrayFromLowToHigh(low, high){
    var array = [];

    for (var i = low; i <= high; i++){
      array.push(i);
      }
    return array;
  }
  console.log(lower)
  console.log(upper)
  console.log(numbers)
  console.log(symbols)
}


function writePassword() {
console.log("button was clicked")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
