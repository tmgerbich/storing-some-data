
const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}


let player1 = {
    name: 'Player 1',
    getHand: getHand()
}

let player2 = {
    name: 'Player 2',
    getHand: getHand()
}

function playRound(player1, player2) {
    let player1Hand = player1.getHand;
    let player2Hand = player2.getHand;
    console.log('Player 1 chooses ' + player1Hand + '.');
    console.log('Player 2 chooses ' + player2Hand + '.');
    let winner = {};

    if (player1Hand == player2Hand) {
        console.log('It\'s a tie!');
    }

    else if (player1Hand == 'rock' && player2Hand == 'paper') {
        console.log('Player 2 wins!');
        winner = player2;
    }

    else if (player1Hand == 'rock' && player2Hand == 'scissors') {
        console.log('Player 1 wins!');
        winner = player1;
    }

    else if (player1Hand == 'paper' && player2Hand == 'rock') {
        console.log('Player 1 wins!');
        winner = player1;
    }

    else if (player1Hand == 'paper' && player2Hand == 'scissors') {
        console.log('Player 2 wins!');
        winner = player2;
    }

    else if (player1Hand == 'scissors' && player2Hand == 'paper') {
        console.log('Player 1 wins!');
        winner = player1;
    }

    else if (player1Hand == 'scissors' && player2Hand == 'rock') {
        console.log('Player 2 wins!');
        winner = player2;
    }

    return winner;
}

whoWon = playRound(player1, player2);
console.log(whoWon);
