player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Turno de pergunta " + player1_name;
document.getElementById("player_answer").innerHTML="Turno de resporta " + player2_name;

function enviar()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    resposta_certa = parseInt (number1) * parseInt (number2);
    console.log(respota_correta);
}

function checar()
{
    get_answer = document.getElementById("imput_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").InnerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name; 
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHtml = "AnswerTurn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}