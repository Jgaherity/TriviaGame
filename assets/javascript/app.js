//player has limited time to finish quiz. game ends when time runs out
//when time expires, reveal num of questions that were answered correctly
//player cannot pick more than one answer per question

//when html loads, execute function
$(document).ready(function() {

    var trivia = {
        first: {
            question: '1. Created in 2009, what was the first decentralized cryptocurrency?',
            answers: {
                a: 'Z-Cash', 
                b: 'LiteCoin',
                c: 'Bitcoin',
                d: 'Bitcoin cash'
            },
            correctAnswers: {
                a: 'Bitcoin',
            }
        },
        second: {
            question: '2. Created in 2009, what was the first decentralized cryptocurrency?',
            answers: {
                a: 'Z-Cash',
                b: 'LiteCoin',
                c: 'Bitcoin',
                d: 'Bitcoin cash'
            },
            correctAnswers: {
                a: 'Bitcoin',
            }
        },
        third: {
            question: '3. Created in 2009, what was the first decentralized cryptocurrency?',
            answers: {
                a: 'Z-Cash',
                b: 'LiteCoin',
                c: 'Bitcoin',
                d: 'Bitcoin cash'
            },
            correctAnswers: {
                a: 'Bitcoin',
            }
        }
    }


    var correct = 0;
    //all correct possible answers
    //jquery click functions for each correct answer 
    // $( ".answer" ).click(function() {
    //     if(this.id == "correct"){
    //         correct++;
    //         alert(correct);
    //         console.log(correct);
    //     }
    // });

    $("#question1").text(trivia.first.question);
    $("#question2").text(trivia.second.question);
    $("#question3").text(trivia.third.question);

    $("#1answera").text(trivia.first.answers.a);
    $("#1answerb").text(trivia.first.answers.b);
    $("#1answerc").text(trivia.first.answers.c);
    $("#1answerd").text(trivia.first.answers.d);

    //IF selected answer == trivia.first.correctAnswers.a, correct++
    //capture value of click
    $(".selected1").on("click", function() {
        //alert("Selected thing");
        var temp = $(this).html();
        //console.log(temp);
        if(trivia.first.correctAnswers.a == temp){
            console.log("right");
            correct++;
        } else{
            console.log("wrong");
        }
        //console.log("Correct answer: " + trivia.first.correctAnswers.a);
        //console.log("Guessed answer: " + temp);
        //console.log(temp);

      });


    
    $("#2answera").text(trivia.second.answers.a);
    $("#2answerb").text(trivia.second.answers.b);
    $("#2answerc").text(trivia.second.answers.c);
    $("#2answerd").text(trivia.second.answers.d);

    //IF selected answer == trivia.first.correctAnswers.a, correct++
    $("#3answera").text(trivia.third.answers.a);
    $("#3answerb").text(trivia.third.answers.b);
    $("#3answerc").text(trivia.third.answers.c);
    $("#3answerd").text(trivia.third.answers.d);

    


    var windowTimeout = function(){
        //console.log()
        setTimeout(function() {
        alert("You ran out of time. Your score is: " + correct);
        //$(".backgroundImage").append($("<div class='modal'>"));
      }, 2000);
    }
    windowTimeout();

});