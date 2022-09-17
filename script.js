const upperCase= "ABCDEFGHIKJLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const special= "!#$&%^&*"
const numbers="1234567890"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  while (password == ""){
    alert("Error, Please try again!")
    password = generatePassword() 
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  let pin = Number(prompt("How long do you want your password? (8-128)"))

while(pin < 8 || pin > 128){
  alert("Please select between 8 - 128 characters.")
  pin = Number(prompt("How long do you want your password? (8-128)"))
}

let upper = confirm("Would you like uppercase letters?")
let lower = confirm("Would you like lowercase letters?")
let spec = confirm("Would you like symbols?")
let numb = confirm("Would you like numbers?")
let value = ""
let password = ""

if(upper){
  value += upperCase
}
if(lower){
  value += lowerCase
}
if(spec){
  value += special
}
if(numb){
  value += numbers
}

for(let i = 0; i < pin; i++){
  let calc = Math.floor(Math.random()*value.length)
  password += value.charAt(calc)
}
return password

}