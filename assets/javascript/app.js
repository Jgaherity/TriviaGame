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
        $("#1answera").text("A. " + response.results[0].incorrect_answers[0]);
        $("#1answerb").text("B. " + response.results[0].incorrect_answers[1]);
        $("#1answerc").text("C. " + response.results[0].incorrect_answers[2]);
        $("#1answerd").text("D. " + response.results[0].correct_answer);

        $("#2answera").text("A. " + response.results[1].incorrect_answers[0]);
        $("#2answerb").text("B. " + response.results[1].correct_answer);
        $("#2answerd").text("D. " + response.results[1].incorrect_answers[1]);
        $("#2answerc").text("C. " + response.results[1].incorrect_answers[2]);

        $("#3answerd").text("D. " + response.results[2].incorrect_answers[0]);
        $("#3answera").text("A. " + response.results[2].correct_answer);
        $("#3answerb").text("B. " + response.results[2].incorrect_answers[1]);
        $("#3answerc").text("C. " + response.results[2].incorrect_answers[2]);

        $("#4answerc").text("C. " + response.results[3].correct_answer);
        $("#4answera").text("A. " + response.results[3].incorrect_answers[0]);
        $("#4answerb").text("B. " + response.results[3].incorrect_answers[1]);
        $("#4answerd").text("D. " + response.results[3].incorrect_answers[2]);

        $("#5answera").text("A. " + response.results[4].incorrect_answers[0]);
        $("#5answerb").text("B. " + response.results[4].incorrect_answers[1]);
        $("#5answerc").text("C. " + response.results[4].incorrect_answers[2]);
        $("#5answerd").text("D. " + response.results[4].correct_answer);

        $("#6answera").text("A. " + response.results[5].incorrect_answers[0]);
        $("#6answerb").text("B. " + response.results[5].incorrect_answers[1]);
        $("#6answerc").text("C. " + response.results[5].incorrect_answers[2]);
        $("#6answerd").text("D. " + response.results[5].correct_answer);

        $("#7answerc").text("C. " + response.results[6].correct_answer);
        $("#7answera").text("A. " + response.results[6].incorrect_answers[0]);
        $("#7answerb").text("B. " + response.results[6].incorrect_answers[1]);
        $("#7answerd").text("D. " + response.results[6].incorrect_answers[2]);


        $(".selected").on("click", function() {
        //user is able to select more than one... unsure how to only highlihgt one with jquery 
        $(this).addClass("active");
        var temp = $(this).html();
        //wish there was a way to may results[i] instead of individual numbers. for loop isnt appropriate here tho. 
        if(response.results[0].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        } 
        else if (response.results[1].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        }
        else if (response.results[2].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        }
        else if (response.results[3].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        }
        else if (response.results[4].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        }
        else if (response.results[5].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        }
        else if (response.results[6].correct_answer == temp){
            console.log("right");
            correct++;
            alert(correct);
        }
        else{
            console.log("wrong");
        }   
        });
    });


    var windowTimeout = function(){
        console.log()
        setTimeout(function() {
        alert("You ran out of time. Your score is: " + correct);
        $(".backgroundImage").append($("<div class='modal'>"));
      }, 2000);
    }
    //windowTimeout();

});