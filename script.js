function highlightWord() {
  var sE1 = document.querySelector("#physical");
  var sE2 = document.querySelector("#atmosphere");
  sE1.classList.add("text-warning");
  sE2.classList.add("text-danger");
}

function unHighlightWord() {
  var sE1 = document.querySelector("#physical");
  var sE2 = document.querySelector("#atmosphere");
  sE1.classList.remove("text-warning");
  sE2.classList.remove("text-danger");
}

function searchResult() {
  var result = document.querySelector("#searchBar");
  if (result.value.toLowerCase() == "temperature") {
    alert("You are on the right page!");
  } else {
    alert("No result is matched, please try 'temperature'!");
  }
}

var slider = document.querySelector("#latitudeRange");
var output = document.querySelector("#latitudeData");
var temForLatitude = document.querySelector("#temperatureData1");

// Display the default slider value
output.value = slider.value;
temForLatitude.value = 50 - slider.value;

// Update the current Latitude and temperature value by dragging the handle
function changeLatitude() {
  output.value = slider.value;
  temForLatitude.value = 50 - slider.value;
}
// switch to a new image
function changeImage() {
  var imgEl1 = document.querySelector("#equatorImg");
  imgEl1.src =
    "https://www.nasa.gov/sites/default/files/thumbnails/image/equator_.png";
}
// switch back to the old image
function backToOld() {
  var imgEl1 = document.querySelector("#equatorImg");
  imgEl1.src =
    "https://www.therobotreport.com/wp-content/uploads/2019/12/Home-Background.jpg";
}
// change picture for the north pole
function changePic() {
  var imgEl1 = document.querySelector("#poleImg");
  imgEl1.src =
    "https://www.scienceabc.com/wp-content/uploads/2016/06/North-pole.jpg";
}
// switch back to the old picture for north pole
function backToOriginal() {
  var imgEl1 = document.querySelector("#poleImg");
  imgEl1.src = "https://ak.picdn.net/shutterstock/videos/1185370/thumb/1.jpg";
}

// declare variables for tinkering part
var slider2 = document.querySelector("#altitudeRange");
var output2 = document.querySelector("#altitudeData");
var temForAltitude = document.querySelector("#temperatureData2");
var groundTem = 20;
// Display the default slider value and temperature
output2.value = slider2.value;
temForAltitude.value = groundTem - (6 * slider2.value) / 1000;

// Update the current altitude and temperature value by dragging the handle
function changeAltitude() {
  output2.value = slider2.value;
  temForAltitude.value = groundTem - (6 * slider2.value) / 1000;
}

// declare a function to print our message in Quiztime form
function printLog(selector, message) {
  document.querySelector(selector).innerHTML += message + "<br>";
}
var email = "null";
var name = "null";
// update email
function updateEmail() {
  printLog("#preInfo", "Email Address:");
  email = document.querySelector("#inputEmail3").value;
  printLog("#preInfo", email);
}
// declare a function to update username
function updateName() {
  printLog("#preInfo", "Username:");
  name = document.querySelector("#inputName").value;
  printLog("#preInfo", name);
}
// get answers checked by user
function getCheckBoxAnswer() {
  var checkboxEls = document.querySelectorAll(
    '#Questions input[type="checkbox"]:checked'
  );
  var answers = [];
  for (checkboxElement of checkboxEls) {
    answers.push(checkboxElement.value);
  }
  return answers;
}

//print out checked answers
function printAnswer() {
  var printAnswers = getCheckBoxAnswer();
  printLog("#preInfo", "User Answers:");
  printLog("#preInfo", printAnswers);
}
//reset name, email and uncheck answers
function resetInfo() {
  document.querySelector("#inputEmail3").value = "";
  document.querySelector("#inputName").value = "";
  document.querySelector("#preInfo").innerHTML = "Record:<br><br>";

  var checkedAnswers = document.querySelectorAll(
    '#Questions input[type="checkbox"]:checked'
  );
  for (checkedEl of checkedAnswers) {
    checkedEl.checked = false;
  }
}
//show user an alert for successful submission
function submitMessage() {
  alert("Your answer is submitted! We will send you feedback by email.");
}
