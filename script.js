//DEPENDENCIES
//connect to time
var firstTimeBlock = $("#first-time-block");
var secondTimeBlock = $("#second-time-block");
var thirdTimeBlock = $("#third-time-block");
var fourthTimeBlock = $("#fourth-time-block");
var fifthTimeBlock = $("#fifth-time-block");
var sixthTimeBlock = $("#sixth-time-block");
var seventhTimeBlock = $("#seventh-time-block");
var eighthTimeBlock = $("#eighth-time-block");
var ninthTimeBlock = $("#ninth-time-block");

// connect to save button
var firstButton = $("#first-button");
var secondButton = $("#second-button");
var thirdButton = $("#third-button");
var fourthButton = $("#fourth-button");
var fifthButton = $("#fifth-button");
var sixthButton = $("#sixth-button");
var seventhButton = $("#seventh-button");
var eighthButton = $("#eighth-button");
var ninthButton = $("#ninth-button");

// connect to the text area
var firstTextArea = $("#first-text-area");
var secondTextArea = $("#second-text-area");
var thirdTextArea = $("#third-text-area");
var fourthTextArea = $("#fourth-text-area");
var fifthTextArea = $("#fifth-text-area");
var sixthTextArea = $("#sixth-text-area");
var seventhTextArea = $("#seventh-text-area");
var eighthTextArea = $("#eighth-text-area");
var ninthTextArea = $("#ninth-text-area");

var hour = moment().format("k");

// DATA
// current time to print to screen (header)
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// FUNCTIONS
// grab the current time from moment.js
function getCurrentTime() {
  if (hour < 9) {
    firstTextArea.addClass("future");
  } else if (hour === 9) {
    firstTextArea.addClass("present");
  } else if (hour > 9) {
    firstTextArea.addClass("past");
  }
  if (hour < 10) {
    secondTextArea.addClass("future");
  } else if (hour == 10) {
    secondTextArea.addClass("present");
  } else if (hour > 10) {
    secondTextArea.addClass("past");
  }
  if (hour < 11) {
    thirdTextArea.addClass("future");
  } else if (hour === 11) {
    thirdTextArea.addClass("present");
  } else if (hour > 11) {
    thirdTextArea.addClass("past");
  }
  if (hour < 12) {
    fourthTextArea.addClass("future");
  } else if (hour === 12) {
    fourthTextArea.addClass("present");
  } else if (hour > 12) {
    fourthTextArea.addClass("past");
  }
  if (hour < 13) {
    fifthTextArea.addClass("future");
  } else if (hour === 13) {
    fifthTextArea.addClass("present");
  } else if (hour > 13) {
    fifthTextArea.addClass("past");
  }
  if (hour < 14) {
    sixthTextArea.addClass("future");
  } else if (hour === 14) {
    sixthTextArea.addClass("present");
  } else if (hour > 14) {
    sixthTextArea.addClass("past");
  }
  if (hour < 15) {
    seventhTextArea.addClass("future");
  } else if (hour === 15) {
    seventhTextArea.addClass("present");
  } else if (hour > 15) {
    seventhTextArea.addClass("past");
  }
  if (hour < 16) {
    eighthTextArea.addClass("future");
  } else if (hour === 16) {
    eighthTextArea.addClass("present");
  } else if (hour > 16) {
    eighthTextArea.addClass("past");
  }
  if (hour < 17) {
    ninthTextArea.addClass("future");
  } else if (hour === 17) {
    ninthTextArea.addClass("present");
  } else if (hour > 17) {
    ninthTextArea.addClass("past");
  }
}

// save input to local storage
function saveInputOne(event) {
  event.preventDefault();
  localStorage.setItem("9AM", JSON.stringify(firstTextArea.val()));
  firstTextArea.val("");
}
function saveInputTwo(event) {
  event.preventDefault();
  localStorage.setItem("10AM", JSON.stringify(secondTextArea.val()));
  secondTextArea.val("");
}
function saveInputThree(event) {
  event.preventDefault();
  localStorage.setItem("11AM", JSON.stringify(thirdTextArea.val()));
  thirdTextArea.val("");
}
function saveInputFour(event) {
  event.preventDefault();
  localStorage.setItem("12PM", JSON.stringify(fourthTextArea.val()));
  fourthTextArea.val("");
}
function saveInputFive(event) {
  event.preventDefault();
  localStorage.setItem("1PM", JSON.stringify(fifthTextArea.val()));
  fifthTextArea.val("");
}
function saveInputSix(event) {
  event.preventDefault();
  localStorage.setItem("2PM", JSON.stringify(sixthTextArea.val()));
  sixthTextArea.val("");
}
function saveInputSeven(event) {
  event.preventDefault();
  localStorage.setItem("3PM", JSON.stringify(seventhTextArea.val()));
  seventhTextArea.val("");
}
function saveInputEight(event) {
  event.preventDefault();
  localStorage.setItem("4PM", JSON.stringify(eighthTextArea.val()));
  eighthTextArea.val("");
}
function saveInputNine(event) {
  event.preventDefault();
  localStorage.setItem("5PM", JSON.stringify(ninthTextArea.val()));
  ninthTextArea.val("");
}

// grab inputs from local storage
function getInputOne() {
  var firstInput = localStorage.getItem("9AM", firstTextArea);
  firstTextArea.val(firstInput);
}

function getInputTwo() {
  var secondInput = localStorage.getItem("10AM", secondTextArea);
  secondTextArea.val(secondInput);
}

function getInputThree() {
  var thirdInput = localStorage.getItem("11AM", thirdTextArea);
  thirdTextArea.val(thirdInput);
}

function getInputFour() {
  var fourthInput = localStorage.getItem("12PM", fourthTextArea);
  fourthTextArea.val(fourthInput);
}

function getInputFive() {
  var fifthInput = localStorage.getItem("1PM", fifthTextArea);
  fifthTextArea.val(fifthInput);
}

function getInputSix() {
  var sixthInput = localStorage.getItem("2PM", sixthTextArea);
  sixthTextArea.val(sixthInput);
}

function getInputSeven() {
  var seventhInput = localStorage.getItem("3PM", seventhTextArea);
  seventhTextArea.val(seventhInput);
}

function getInputEight() {
  var eighthInput = localStorage.getItem("4PM", eighthTextArea);
  eighthTextArea.val(eighthInput);
}

function getInputNine() {
  var ninthInput = localStorage.getItem("5PM", ninthTextArea);
  ninthTextArea.val(ninthInput);
}

function displayInput() {
  getInputOne();
  getInputTwo();
  getInputThree();
  getInputFour();
  getInputFive();
  getInputSix();
  getInputSeven();
  getInputEight();
  getInputNine();
}

// USER INTERACTIONS
// buttons with event listeners (save input to local storage)
firstButton.on("click", saveInputOne);
secondButton.on("click", saveInputTwo);
thirdButton.on("click", saveInputThree);
fourthButton.on("click", saveInputFour);
fifthButton.on("click", saveInputFive);
sixthButton.on("click", saveInputSix);
seventhButton.on("click", saveInputSeven);
eighthButton.on("click", saveInputEight);
ninthButton.on("click", saveInputNine);

// INITIALIZATION
// start the app on page load
displayInput();
getCurrentTime();
