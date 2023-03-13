 var today = dayjs();
  $('#current-day').text(today.format('MMM D, YYYY'));

//used this jquery object to target DOM elements for local storage

  var saveBtn = $(".saveBtn");
  
  saveBtn.on("click", function(){
    var div = $(this).siblings(".hours").text();
    var text = $(this).siblings(".description").val();

    localStorage.setItem(div, text);
  });

  function saveText(){
    $(".hours").each(function(){
      var hour = $(this).text();
      var savedText = localStorage.getItem(hour);

      if (savedText !== null) {
        $(this).siblings(".description").val(savedText);
      }
    });
  }

saveText();

$(document).ready(function () {

  
       
    var currentHour = dayjs().format('H');

    for(var i = 9; i < 22; i++){
      if (currentHour > i) {
        $('#hour-' + i).removeClass('future present').addClass('past');
      } else if (currentHour == i) {
        $('#hour-' + i).removeClass('future past').addClass('present');
      }else if (currentHour < i) {
        $('#hour-' + i).removeClass('present past').addClass('future');
      }
    }

});
   

//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar(DONE)
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours(DONE)
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future(DONE)
//WHEN I click into a time block
//THEN I can enter an event(DONE)
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage(DONE)
//WHEN I refresh the page
//THEN the saved events persist (DONE)
    

  //extra comments..

// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //ok this works, had to comment out other function..
  //next step is to get this to work for each of the time-block divs
  //because this code only has the hour-9 one defined
  //row timeblock in common with all hour- lol!
  //queryselectorall gives array of all timeblocks then itterate throught that
      //select via partent in event target
      //get every timeblock write everything all at once(save as one big array)
      //now get val()
      //look for sibling .find(?)
      //jquery method take javascript element into jquery object
      //create object for when saving each timeblock

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//event handler applied before html rendered
//document ready function (event handlers/selectors from dom)


// TODO: Add code to display the current date in the header of the page.(DONE)

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? (DONE)
  

//page loads, get items from local storage
  //add check if val - dont write if undefined
    //get text out of local storage getItem here 
    //set equal to eventText
//docready like init function tells brower to fire these at specific time when page loads

