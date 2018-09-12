//player has limited time to finish quiz. game ends when time runs out
//when time expires, reveal num of questions that were answered correctly
//player cannot pick more than one answer per question

//when html loads, execute function



$(document).ready(function() {

    var correct = 0;

        $.ajax({
          url: "https://opentdb.com/api.php?amount=7&category=24&difficulty=easy&type=multiple",
          //url: "https://opentdb.com/api.php?amount=5&category=24&difficulty=easy&type=multiple",
          method: "GET"
        }).then(function(response) {
           
        console.log(response);
        //questions
        $("#question1").text("1. " + response.results[0].question);
        $("#question2").text("2. " + response.results[1].question);
        $("#question3").text("3. " + response.results[2].question);
        $("#question4").text("4. " + response.results[3].question);
        $("#question5").text("5. " + response.results[4].question);
        $("#question6").text("6. " + response.results[5].question);
        $("#question7").text("7. " + response.results[6].question);

        //answers 
        $("#1answera").text(response.results[0].incorrect_answers[0]);
        $("#1answerb").text(response.results[0].incorrect_answers[1]);
        $("#1answerc").text(response.results[0].incorrect_answers[2]);
        $("#1answerd").text(response.results[0].correct_answer);

        $("#2answera").text(response.results[1].incorrect_answers[0]);
        $("#2answerb").text(response.results[1].correct_answer);
        $("#2answerd").text(response.results[1].incorrect_answers[1]);
        $("#2answerc").text(response.results[1].incorrect_answers[2]);

        $("#3answerd").text(response.results[2].incorrect_answers[0]);
        $("#3answera").text(response.results[2].correct_answer);
        $("#3answerb").text(response.results[2].incorrect_answers[1]);
        $("#3answerc").text(response.results[2].incorrect_answers[2]);

        $("#4answerc").text(response.results[3].correct_answer);
        $("#4answera").text(response.results[3].incorrect_answers[0]);
        $("#4answerb").text(response.results[3].incorrect_answers[1]);
        $("#4answerd").text(response.results[3].incorrect_answers[2]);

        $("#5answera").text(response.results[4].incorrect_answers[0]);
        $("#5answerb").text(response.results[4].incorrect_answers[1]);
        $("#5answerc").text(response.results[4].incorrect_answers[2]);
        $("#5answerd").text(response.results[4].correct_answer);

        $("#6answera").text(response.results[5].incorrect_answers[0]);
        $("#6answerb").text(response.results[5].incorrect_answers[1]);
        $("#6answerc").text(response.results[5].incorrect_answers[2]);
        $("#6answerd").text(response.results[5].correct_answer);

        $("#7answerc").text(response.results[6].correct_answer);
        $("#7answera").text(response.results[6].incorrect_answers[0]);
        $("#7answerb").text(response.results[6].incorrect_answers[1]);
        $("#7answerd").text(response.results[6].incorrect_answers[2]);


        $(".selected").on("click", function() {
        //user is able to select more than one... unsure how to only highlihgt one with jquery 
        $(this).addClass("active");
        var temp = $(this).html();
        //wish there was a way to may results[i] instead of individual numbers. for loop isnt appropriate here tho. 
        if(response.results[0].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        } 
        else if (response.results[1].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        }
        else if (response.results[2].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        }
        else if (response.results[3].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        }
        else if (response.results[4].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        }
        else if (response.results[5].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        }
        else if (response.results[6].correct_answer == temp){
            console.log("right");
            correct++;
            //alert(correct);
        }
        else{
            console.log("wrong");
        }   
        });
    });


    var windowTimeout = function(){
        console.log()
        setTimeout(function() {
        //alert("You ran out of time. Your score is: " + correct);
        //$(".emptyDiv").append($("<div class='modal'>"));
        $('.modal').addClass('display');
        $('#score').text(correct);
      }, 15000);
    }
    windowTimeout();

});