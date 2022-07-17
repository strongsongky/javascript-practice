const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const firstnamemsg = document.getElementById("firstname-msg");
const lastname = document.getElementById("lastName");
const lastnamemsg = document.getElementById("lastname-msg");
const email = document.getElementById("email");
const emailmsg = document.getElementById("email-msg");
const password = document.getElementById("password");
const passwordmsg = document.getElementById("password-msg");
const submitbnt = document.getElementById("submit-btn");
const keydownvalue = firstname.value;

submitbnt.addEventListener("click", formValidation);
firstname.addEventListener("keydown", handleInputValue);

function handleInputValue(e) {
  keydownvalue = e.target.value;
}

function formValidation(e) {
  e.preventDefault();
  if (keydownvalue.length === 0) {
    firstnamemsg.innerHTML = "First Name cannot be empty.";
    firstnamemsg.style.display = "block";
    return false;
  }
}
