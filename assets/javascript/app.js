//player has limited time to finish quiz. game ends when time runs out
//when time expires, reveal num of questions that were answered correctly
//player cannot pick more than one answer per question

//when html loads, execute function
$(document).ready(function() {

    var correct = 2;

    //jquery click functions for each correct answer 
    $( "#correct" ).click(function() {
        //console.log("First correct answer selected");
        correct--;
        console.log(correct);
    });

    var windowTimeout = function(){
        console.log()
        setTimeout(function() {
        alert("Add element.");
        $( ".modal" ).addClass("overlay");
        $(".backgroundImage").append($("<div class='modal'>"));
      }, 1000);
    }
    windowTimeout()



});