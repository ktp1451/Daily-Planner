var timeDisplayEl = $('#time-display'); //JQurey storing reference to id=timedisplay as a global variable
//console.log(timeDisplayEl);
//stores the reference to the time-displayEl
//DOM equivilant to the above code:
//var timeDisplayEl = document.querySelector("#time-display");

//function to display current date and time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY'); //created variable rightNow, then used moment library to grab the time and then format the time as it's written in the ( )
  console.log(rightNow);
  timeDisplayEl.text(rightNow); //updates var text
}

//create eventListener that listens to all the buttons with JQuery by given button a class "saveBtn" and using selector method $()
$(".saveBtn").on("click", function(){
  var currentBtn = $(this);

  var textarea = currentBtn.prev();

  var time = currentBtn.parent().attr("id");

  localStorage.setItem(time, textarea.val());
  //console.log(description.val());
})
//DOM equivilant to the above code:
//document.getElementsByClassName("saveBtn").addEventlistener

//can loop throug elements with same tag name with "each" method with JQurey
$(".time-block").each(function() {
  //let currentArea = $(this);
  let currentHour = moment().hours();
  
  let time = $(this).attr("id");

  //console.log(time, currentHour)

  //
  if (time < currentHour) {
    $(this).children().eq(1).addClass("past");
  } else if (time > currentHour) {
    $(this).children().eq(1).addClass("future");
  } else {
    $(this).children().eq(1).addClass("present");
  }
});

//stores data entered in the textarea to local storage so it stays even the user refreshes the page
$("#9").children("textarea").val(localStorage.getItem("9"));
$("#10").children("textarea").val(localStorage.getItem("10"));
$("#11").children("textarea").val(localStorage.getItem("11"));
$("#12").children("textarea").val(localStorage.getItem("12"));
$("#13").children("textarea").val(localStorage.getItem("13"));
$("#14").children("textarea").val(localStorage.getItem("14"));
$("#15").children("textarea").val(localStorage.getItem("15"));
$("#16").children("textarea").val(localStorage.getItem("16"));
$("#17").children("textarea").val(localStorage.getItem("17"));

$(".newDay").on("click", function (event) {
  event.preventDefault(); //cancels page refresh
  $("textarea").each(function () { //textarea works like the button so we want to loop through each individual textarea and clear each individual value attribute
    $(this).val("");
  });
  localStorage.clear(); // clears textarea out
});

displayTime(); //makes above function happen as soon as page opens



