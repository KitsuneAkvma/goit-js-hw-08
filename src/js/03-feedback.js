const throttle = require("lodash.throttle");

// define DOM elements
const emailInput = document.querySelector("[name = email]");
const messageInput = document.querySelector("[name = message]");

const submitButton = document.querySelector("[type = submit]");
// save input data in an temporary object
let inputData = {
  email: "",
  message: "",
};
const listenEmailInput = () => {
  // save input value to temp. object
  inputData["email"] = emailInput.value;

  //convert temp. object with inputs data to json and save it in local storage
  localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
};

const listenMessageInput = () => {
  // save input value to temp. object
  inputData["message"] = messageInput.value;

  // convert temp. object with inputs data to json and save it in local storage
  localStorage.setItem("feedback-form-state", JSON.stringify(inputData));

  console.log(inputData);
};

// do things on page load
window.addEventListener("load", () => {
  // get last session input data if it exists
  if (localStorage.getItem("feedback-form-state")) {
    inputData = JSON.parse(localStorage.getItem("feedback-form-state"));

    // load last session data to inputs
    emailInput.value = inputData["email"];
    messageInput.value = inputData["message"];
    console.log(inputData);
  }
});

//listen to changes in email input with delay of 0.5 second
emailInput.addEventListener("input", throttle(listenEmailInput, 500));

// listen to changes in message input with delay of 0.5 second
messageInput.addEventListener("input", throttle(listenMessageInput, 500));

// when form is submited => clear inputs values and remove it from localStorage
submitButton.addEventListener("click", () => {
  inputData = {
    email: "",
    message: "",
  };

  localStorage.removeItem("feedback-form-state");
});
