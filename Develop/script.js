var timeDisplayEl = $('#time-display'); //JQurey storing reference to id=timedisplay as a global variable
//console.log(timeDisplayEl);
//stores the reference to the time-displayEl
//DOM equivilant to the above code:
//var timeDisplayEl = document.querySelector("#time-display");

//function to display current date and time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a'); //created variable rightNow, then used moment library to grab the time and then format the time as it's written in the ( )
  console.log(rightNow);
  timeDisplayEl.text(rightNow); //updates var text
}

//create eventListener that listens to all the buttons with JQuery by given button a class "saveBtn" and using selector method $()
$(".saveBtn").on("click", function(){
  var currentBtn = $(this);

  var textarea = currentBtn.siblings("notes");

  var time = currentBtn.parent().attr("id");

  localStorage.setItem(time, textarea.val());
  //console.log(description.val());
})
//DOM equivilant to the above code:
//document.getElementsByClassName("saveBtn").addEventlistener

//can loop throug elements with same tag name with "each" method with JQurey
$("textarea").each(function() {
  let currentArea = $(this);
  let currentHour = moment().hours();
  
  let time = currentArea.parent().attr("id");

  //console.log(time, currentHour);

  if (time < currentHour) {
    currentArea.addClass("past");
    currentArea.removeClass("present");
    currentArea.removeClass("future");
  } else if (time > currentHour) {
    currentArea.addClass("future");
    currentArea.removeClass("past");
    currentArea.removeClass("present");
  } else {
    currentArea.addClass("present");
    currentArea.removeClass("future");
    currentArea.removeClass("past");
  }
});

$("#9").children("textarea").val(localStorage.getItem('9'));
$("#10").children("textarea").val(localStorage.getItem('9'));
$("#11").children("textarea").val(localStorage.getItem('9'));
$("#12").children("textarea").val(localStorage.getItem('9'));
$("#1").children("textarea").val(localStorage.getItem('9'));
$("#2").children("textarea").val(localStorage.getItem('9'));
$("#3").children("textarea").val(localStorage.getItem('9'));
$("#4").children("textarea").val(localStorage.getItem('9'));
$("#5").children("textarea").val(localStorage.getItem('9'));

displayTime(); //makes above function happen as soon as page opens



