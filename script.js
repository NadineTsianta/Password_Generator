// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

let passwordNumbers;
let passwordLength;
let passwordUppercase;
let passwordLowercase;
let passwordSpecialCharacters;

let usercheck = true;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("Select the length for your password, it must be between 8-128 characters long");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    prompt("Your password must be between 8 and 128 characters and numeric value");
    return;
  }
  passwordNumbers = confirm ("Do you wnat to include numbers in your password ?")

  passwordUppercase = confirm("Do you want to include uppercase characters in your password ?");
  passwordLowercase = confirm("Do you want to include lower case characters ?");
  passwordSpecialCharacters = confirm("Do you want to include special characters ?");

  if (!passwordLowercase && !passwordUppercase && !passwordSpecialCharacters && !passwordNumbers) {
    alert("Your password must contain letters and/or characters alongside numbers");
    /*
    If they said no to everthing,
    we are going to store a false value into some kind of variable
    Then when we get to the generatePassword function
    We check the variable to see if it's false,
    if it is, return nothing and don't run the algorithm
    
    */
   usercheck = false;
    return;
  }
  

  return passwordLength;

}


// Function for getting a random element from an array
function getRandom(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}


// Function to generate password with user input
function generatePassword() {

  if (!usercheck) {
return "";
  };

  let allCharacters = [];

  if (passwordSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  if (passwordLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  } 
  if (passwordNumbers) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
 
  if (passwordUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }
  let genPassword = "";

  /*
  for - the sntax to start a loop
  let i =0; the looping variable that will change over time (it doesn't have to start at 0)
  i<passwordLength; - this is the condition. If condition is true, continue loop, else stop the loop
  i++ ; - after we run the code, change the looping variable
  */
  for (let i = 0; i < passwordLength; i++) {
    genPassword += getRandom(allCharacters);
  }

  return genPassword;

}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  let password = generatePassword();
  let passwordText = document.querySelector('#password');


  passwordText.value = password;
  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/**
 * What is is doing?
 * Why do I need it?
 * How do I use it?
 */