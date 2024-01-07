// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt("Select the length for your password, it must be between 8-128 characters long");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    prompt("Your password must be between 8 and 128 characters and numeric value");
    return;
  }
 
}
function getPasswordOptions2() {
  let passwordUppercase = confirm("Do you want to include uppercase characters in your password ?");
  let passwordlowercase = confirm("Do you want to include lower case characters ?");
  let passwordSpecialCharacters = confirm("Do you want to include special characters ?");

}

// Function for getting a random element from an array
function getRandom(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  password += arr.length(randomIndex)
  
}



// Function to generate password with user input
function generatePassword() {
  let allCharacters = [];

  if (passwordSpecialCharacters){
    allCharacters = allCharacters.concat(specialCharacters);
  }

  if (passwordlowercase){
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }

  if (passwordUppercase){
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }
  let password = "";
  for (let i = 0; i < password.length; i++) {
    password += getRandom(allCharacters)
    
  }
  return password;

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions() + getPasswordOptions2();
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


