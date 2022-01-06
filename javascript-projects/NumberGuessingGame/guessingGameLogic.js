'use strict';
let secretNo = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNo);
let score = 20;
let highScore = 0;

let disableCheck = false;
//document.querySelector('.number').textContent = secretNo;

document.querySelector('.again').addEventListener('click', ()=>{
    score=20;
    secretNo = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.check').disabled = disableCheck;
    
});

document.querySelector('.check').addEventListener('click', function(){
    const guessedNo = Number(document.querySelector('.guess').value);

    if(!guessedNo){
        alert("Enter a valid no.");
    }
    else{
        if(score>1){
            if(guessedNo>secretNo){
                document.querySelector('.message').textContent = '📈Too high';
                score--;
                document.querySelector('.score').textContent = score;
            }else if(guessedNo<secretNo){
                document.querySelector('.message').textContent = '📉Too low';
                score--;
                document.querySelector('.score').textContent = score;
            }else if(guessedNo===secretNo){
                document.querySelector('.message').textContent = '🏆You guessed it right!';
                score++;
                if(score>highScore){
                    highScore=score;
                    document.querySelector('.highscore').textContent = highScore;
                }
                document.querySelector('.score').textContent = score;
                document.querySelector('.number').textContent = secretNo;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.check').disabled = !disableCheck;
            }
        }else{
            document.querySelector('.message').textContent = '👎You Lost!';
            document.querySelector('.number').textContent = secretNo;
            document.querySelector('body').style.backgroundColor = '#c42222';
            document.querySelector('.check').disabled = !disableCheck;
        }
        
        
    }
});

