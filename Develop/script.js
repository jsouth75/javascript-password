// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// messages displayed when generate password clicked
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// prompts for password 
function generatePassword() {
  var length = prompt("Choose from 8 to 128 characters you want your password to contain");

  while (length < 8 || length > 128 || isNaN(length)) {
    length = prompt("Please ender a number between 8 to 128");
  }
  console.log(length);

  var confirmLower = confirm("Do you want your password to include lower case letters?");
  console.log("lowercase= " + confirmLower);
  
  var confirmUpper = confirm("Do you want your password to include upper case letters?");
  console.log("uppercase= " + confirmUpper);
  
  var confirmNumbers = confirm("Do you want your password to include numbers?");
  console.log("numbers= " + confirmNumbers);

  var confirmSpecial = confirm("Do you want your password to include special characters?");
  console.log("special characters= " + confirmSpecial);

  // ASCII character codes
  var lower = arrayFromLowToHigh(97, 122);
  console.log(lower);

  var upper = arrayFromLowToHigh(65, 90);
  console.log(upper);

  var numbers = arrayFromLowToHigh(48, 57);
  console.log(numbers);

  var symbols = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));
  console.log(symbols);

  // generating a random list depending on selected characters
  function arrayFromLowToHigh(low, high) {
    var array = [];
    for (var i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }
 
  // Pulls from character codes depending on selection from function generatePassword
  var characters = [];
  if (confirmLower) {
    characters = characters.concat(lower);
  }
  if (confirmUpper) {
    characters = characters.concat(upper);
  }
  if (confirmNumbers) {
      characters = characters.concat(numbers);
  }
  if (confirmSpecial) {
        characters = characters.concat(symbols);      
  }
  console.log(characters);
  
  var passwordCharacters = [];
  for (var i = 0; i < length; i++) {
    var characterCode = characters[Math.floor(Math.random() * characters.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  console.log(passwordCharacters)
  }
  return passwordCharacters.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
