// let countGuesses = 1;//Log number of guesses. At least 1.
// let guessLog = [];//Log the different tries in the game.
// let playersLog = {};//Will save players.
// let innerData = {};//Will save specific player's attempts.
// let currentRound = 1;//Current round, resets when player is changed.
// let player = prompt(`Enter player's name`);//Name of the player.
// storeData(playersLog,player,currentRound,guessLog);
// guessGame(player,generateNum());//Calls for the beginning of the game (Every time page reloads).

// //---------------------------------------------------------------------------------

// function getName(){
//     let player = prompt(`Enter player's name`);//Name of the player.
//     console.log(player);
//     return player;
// };

// //---------------------------------------------------------------------------------

// function generateNum() {
//     let solution = Math.floor(Math.random() * 101);
//     console.log(`This is the generated secret number: ${solution}`);
//     return solution;        
// };

// //---------------------------------------------------------------------------------

// function guessGame(player,solution){
// //Prompt the player and turn the answer into something useful.
//     let input = prompt(`Hey ${player}! Guess the secret number between 0 and 100!`);
//     let guess = Number.parseInt(input);
//     console.log(`${player} has guessed: ${guess}`);

// //Gives a personalized message in case of first try winner. (Fanfare tune goes here)
//     if (guess === solution) {
//         guessLog.push(guess)
//         if(countGuesses === 1){
//             console.log(`${player} got it right on the first try`);
//             alert(`The answer was ${solution}. Unbelievable! You got it on the first try ${player}!!!`);
//             alert(`There's no way!! you definitely cheated ${player}!!!`)
//             ask();
//         }else{
//         alert(`The answer was ${solution}. You got it in ${countGuesses} tries ${player}!
//              Your past guesses were: ${guessLog}!`);
//             ask();
//         };//if stat. For custom message.

//     }else if (guess < solution) {
//         countGuesses++;
//         guessLog.push(guess);
//         alert(`Woo Hoo ${player} why don't you try higher! Do it again!`);
//         guessGame(player,solution);
//     }else if (guess > solution) {
//         countGuesses++;
//         guessLog.push(guess);
//         alert(`You're waaaay off ${player}, maybe lower! Try again!`);
//         guessGame(player,solution);
//     };//if stat. For higher/lower.

// };//func. Starts the game bringing a prompt to the page.

// //---------------------------------------------------------------------------------

// function ask(){
// //Asks to play again
//     storeData(playersLog,player,currentRound,guessLog)
//     countGuesses = 1;//Resets guess count
//     let answer = prompt(`Would you like to play again? y/n`);
//     if(answer == `n` || answer == `N`){
        
//     }if(answer == `y` || answer == `Y`){
//         playerChange = prompt(`Would you like to change players? y/n`);
//         if (playerChange == `n` || playerChange == `N`){
//             currentRound++
//             storeData(playersLog,player,currentRound,guessLog)
//             console.log(`Start of round ${currentRound}`);
//             guessLog = [];
//             guessGame(player,generateNum());
                
//         }if(playerChange == `y` || playerChange == `Y`){
//             currentRound = 1;
//             guessLog = [];
//             guessGame(getName(),generateNum());
//         };
//     };//if stat. Resets game or stops.
// };

// //---------------------------------------------------------------------------------

// function storeData(playersLog,player,currentRound,guessLog) {
//     innerData[currentRound] = guessLog;
//     playersLog[player] = innerData;
//     console.log(playersLog);
// }

//Here I decided to start again, just to try and do little functions and make them work together.
//All previous work is above.
//---------------------------------------------------------------------------------

function makeRandomNumber() {
    let num = Math.floor(Math.random() * 101);
    console.log(`This is the secret number: ${num}`);
    return num;
};

//---------------------------------------------------------------------------------

function askName() {
    let user = prompt(`Name your character!`);
    console.log(user);
    return user;
};

//---------------------------------------------------------------------------------

function askForANumber() {
    let input = prompt(`Hey ${player}! Guess the secret number between 0 and 100!`);
    let guess = Number.parseInt(input);
    console.log(`${player} has guessed: ${guess}`);
};