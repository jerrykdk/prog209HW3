document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("next").style.visibility = "hidden";
    playerArray = [];
    computerArray = [];


    document.getElementById("deal").addEventListener("click", function() {
        deck.load();


       let i;
       let random;

        for (i = 0; i < 26 ; i++){
            random = Math.floor(Math.random() * (52));
            while(deck.cardArray[random].inuse === true) {
                random = Math.floor(Math.random() * (52));
            }
            playerArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;

            random = Math.floor(Math.random() * (52));
            while(deck.cardArray[random].inuse === true) {
                random = Math.floor(Math.random() * (52));
            }
            computerArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;
        }


     document.getElementById("deal").style.visibility = "hidden";
     document.getElementById("next").style.visibility = "visible";

    });
 
    
let cpuScore = 0; 
let plyScore = 0;
let rndCounter = 0;
playersScore = document.getElementById("playerScore");
computersScore = document.getElementById("computerScore");
roundsCounter = document.getElementById("roundCounter")

document.getElementById("next").addEventListener("click", function() {


    let pCard = document.getElementById("playerCard");
    let cCard = document.getElementById("computerCard");
    

    let whoWon = document.getElementById("whoWon");

    function switchSuit(a){  
        switch(a) {   
        case 1: return "SPADE";
        case 2: return "CLUB";
        case 3: return "DIAMOND";
        case 4: return "HEART";
        default: return "";   
        }
    }


    function switchRank(a){  
        switch(a) {   
        case 2: return "2";
        case 3: return "3";
        case 4: return "4";
        case 5: return "5";
        case 6: return "6";
        case 7: return "7";
        case 8: return "8";
        case 9: return "9";
        case 10: return "10";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        case 14: return "Ace";
        default: return "";   
        }
    }
        pCard.innerHTML = switchSuit(playerArray[0].suit) + " " + switchRank(playerArray[0].rank);
        cCard.innerHTML = switchSuit(computerArray[0].suit) + " " + switchRank(computerArray[0].rank);
        pCard = document.getElementById("playerCard").style.color = "black";
        cCard = document.getElementById("computerCard").style.color = "black";
        if(switchSuit(playerArray[0].suit) === "DIAMOND" || switchSuit(playerArray[0].suit) === "HEART") 
        {   
            pCard = document.getElementById("playerCard").style.color = "red";
            
        }

        if(switchSuit(computerArray[0].suit) === "DIAMOND" || switchSuit(computerArray[0].suit) === "HEART")
        {
            cCard = document.getElementById("computerCard").style.color = "red";
        }



        if(playerArray[0].rank > computerArray[0].rank){ 
            plyScore++; 
            whoWon.innerHTML = "Player won this round";
            rndCounter++;
        }
        
        if(computerArray[0].rank > playerArray[0].rank){ 
            cpuScore++; 
            whoWon.innerHTML = "Computer won this round";
            rndCounter++;
        }

        if(playerArray[0].rank === computerArray[0].rank) { 
            if(playerArray[0].suit > computerArray[0].suit) {
                plyScore++; 
                whoWon.innerHTML = "Player won this round";
                rndCounter++;
            }
            if(playerArray[0].suit < computerArray[0].suit) {
                cpuScore++; 
                whoWon.innerHTML = "Computer won this round";
                rndCounter++;
            }
        }

        playersScore.innerHTML = "Player Score:  " + plyScore;
        computersScore.innerHTML = "Computer Score:  " + cpuScore;
        roundsCounter.innerHTML = "Total Rounds Played: " + rndCounter;
        
        computerArray.splice(0,1);
        playerArray.splice(0,1);
    
    if(rndCounter === 26) {
    if(cpuScore > plyScore) {
        whoWon.innerHTML = "Computer won the game. Game over."; }
    if(cpuScore < plyScore) {
        whoWon.innerHTML = "Player won the game. Game over."; }
    if(cpuScore === plyScore) {
            whoWon.innerHTML = "It's a tie. Game over."; }
    }
   
    });

});