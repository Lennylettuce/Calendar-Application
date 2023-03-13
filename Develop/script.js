 var today = dayjs();
  $('#current-day').text(today.format('MMM D, YYYY'));
  
      //
      var userInput = $(".description");
      var saveButton = $(".saveBtn");
      var saveText = $(".time-block");
      var eventText = [];

    function saveText(event){
      event.preventDefault();
      var textArea = $(event.currentTarget).siblings('.description');
      var textVal = textArea.val();
   
     
      var timeBlock = {
        value: textVal,
        id: textArea.attr("id"),
      };
       

      eventText.push(timeBlock);
      //now in eventText get text div id
      localStorage.setItem('text', JSON.stringify(eventText));
    
    }

    function renderText(){
      //look at event text array, loop and select each id 
      for (var i = 0; i < eventText.length; i++){
        //take current thing and get id
        var textInput = $(eventText[i].id);
        textInput.val(eventText[i].value);
      }
    }
    
  //write code to keep track of current text/localstorage
//THANK YOU BRETT!

//work code below, maybe do a for loop for ea like he did above.........

//renderLast();


//function renderLast() {
  //var text = localStorage.getItem("text");

  //if (!text) {
    //return;
  //}

  //userEmailSpan.textContent = email;
//}

//signUpButton.addEventListener("click", function(event) {
  //event.preventDefault();

  //var email = document.querySelector("#email").value;
  //var password = document.querySelector("#password").value;

  //if (email === "") {
    //displayMessage("error", "Email cannot be blank");
  //} else if (password === "") {
    //displayMessage("error", "Password cannot be blank");
  //} else {
    //displayMessage("success", "Registered successfully");

    //localStorage.setItem("email", email);
    //localStorage.setItem("password", password);
    //renderLast();
  //}
//});


$(document).ready(function () {

  saveButton.on('click', saveText);

    if (localStorage.getItem('text')){
      eventText = JSON.parse(localStorage.getItem('text'));
      renderText();
    }
      
      

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
//THEN the text for that event is saved in local storage(working on)
//WHEN I refresh the page
//THEN the saved events persist (almost there!)