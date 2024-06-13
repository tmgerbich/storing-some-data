
const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

let player1 = {
    name: 'Player 1',
    getHand: getHand
}

let player2 = {
    name: 'Player 2',
    getHand: getHand
}

let player3 = {
    name: 'Player 3',
    getHand: getHand
}

let player4 = {
    name: 'Player 4',
    getHand: getHand
}

function playRound(player1, player2) {
    let player1Hand = player1.getHand();
    let player2Hand = player2.getHand();
    // console.log('Player 1 chooses ' + player1Hand + '.');
    // console.log('Player 2 chooses ' + player2Hand + '.');
    let winner = null;

    if (player1Hand == player2Hand) {
        // console.log('It\'s a tie!');
    }

    else if (player1Hand == 'rock' && player2Hand == 'paper') {
        // console.log('Player 2 wins!');
        winner = player2;
    }

    else if (player1Hand == 'rock' && player2Hand == 'scissors') {
        // console.log('Player 1 wins!');
        winner = player1;
    }

    else if (player1Hand == 'paper' && player2Hand == 'rock') {
        // console.log('Player 1 wins!');
        winner = player1;
    }

    else if (player1Hand == 'paper' && player2Hand == 'scissors') {
        // console.log('Player 2 wins!');
        winner = player2;
    }

    else if (player1Hand == 'scissors' && player2Hand == 'paper') {
        // console.log('Player 1 wins!');
        winner = player1;
    }

    else if (player1Hand == 'scissors' && player2Hand == 'rock') {
        // console.log('Player 2 wins!');
        winner = player2;
    }

    return winner;
}

// whoWon = playRound(player1, player2);
// console.log(whoWon);

function playGame(player1, player2, playUntil) {
    let player1Score = 0;
    let player2Score = 0;
    let roundWinners = [];


    function counter() {
        let player1Counter = 0;
        let player2Counter = 0;
        for (let i = 0; i < roundWinners.length; i++) {
            if (roundWinners[i] === player1.name) {
                player1Counter++;
            } else if (roundWinners[i] ===  player2.name) {
                player2Counter++;
            }
        }

        let winMap = new Map();
        winMap.set( player1.name+' Wins', player1Counter);
        winMap.set( player2.name+' Wins', player2Counter);
        return winMap;
    }

    let currentScore;

    while (player1Score < playUntil && player2Score < playUntil) {
        let latestWinner = playRound(player1, player2);
        if (latestWinner) {
            roundWinners.push(latestWinner.name);
        }

        currentScore = counter();
        player1Score = currentScore.get( player1.name+' Wins');
        player2Score = currentScore.get( player2.name+' Wins');
    }

        if(currentScore.get( player1.name+' Wins') > currentScore.get( player2.name+' Wins')) {
            return player1;
        }
        else if(currentScore.get( player1.name+' Wins') < currentScore.get( player2.name+' Wins')) {
            return player2;
        }

}

let roundWinner = playGame(player1, player2, 3);
// console.log('Winner of the round is ' + roundWinner.name);


function playTournament(player1, player2, player3, player4, playUntil) {
    let round1Winner = playGame(player1, player2, playUntil);
    let round2Winner = playGame(player3, player4, playUntil);
    let finalsWinner = playGame(round1Winner, round2Winner, playUntil);
    return finalsWinner;

}

let rPSWinner = playTournament(player1, player2, player3, player4, 3);
console.log(rPSWinner.name + ' is the world champion');