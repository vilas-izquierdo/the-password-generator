// variables

var generateBtn = document.querySelector("#generate");
let password = ""
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let holder = ""
let length = 0
let includeLower = false
let includeUpper = false
let includeSpecial = false
let includeNumber = false
let letter = ""

// main function for prompts/alerts and generating the random list based on selections

function makePassword() {
  var length = (window.prompt("How many characters would you like it to be?"))

// if they enter a number less than 8 or more than 128, return message telling them to do better

  if (length < 8 || length > 128) {
    alert("Must be longer than 8 characters and less than 128")
    makePassword()
    return ("")
  }

// number yes or no

  includeNumber = window.confirm("Do you wany any numbers?")
  if (includeNumber !== false) {

    holder = numbers + holder
    letter = numbers[Math.floor(Math.random() * numbers.length)]
    password = password + letter
  }

// lowercase yes or no

  includeLower = window.confirm("Do you want any lowercase?")
  if (includeLower !== false) {

    holder = lowercase + holder
    letter = lowercase[Math.floor(Math.random() * lowercase.length)]
    password = password + letter
  }

// uppercase yes or no

  includeUpper = window.confirm("Do you wany any uppercase?")
  if (includeUpper !== false) {

    holder = uppercase + holder
    letter = uppercase[Math.floor(Math.random() * uppercase.length)]
    password = password + letter
  }

// special character yes or no

  includeSpecial = window.confirm("Do you wany any special characters?")
  if (includeSpecial !== false) {

    holder = special + holder
    letter = special[Math.floor(Math.random() * special.length)]
    password = password + letter
  }

// check if they didn't select any options

  if (holder.length === 0) {
    alert("Enter something")
    return ("")
  }
  while (password.length < length) {
    letter = holder[Math.floor(Math.random() * holder.length)]
    password = password + letter
  }
  return password;
}

// write the password to #password once generated

function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// check for click on the generate button

generateBtn.addEventListener("click", writePassword);

