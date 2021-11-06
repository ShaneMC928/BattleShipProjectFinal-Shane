
var readlineSync = require('readline-sync');

gameOn = 0;
while(gameOn < 1){

var battleGrid = ['A1','A2','A3','B1','B2','B3','C1','C2','C3'];
var gridValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var ship1 = Math.round(Math.random() * 7)+1;
var ship2 = Math.round(Math.random() * 7)+1;
gridValues[ship1] = 1;
gridValues[ship2] = 2;
var answer1 = gridValues[ship1];
var answer2 = gridValues[ship1];
var sink1 = 0;
var sink2 = 0;
i = 0;

//Ensure ships are placed on two different indexes 
    while(i < 1){
        if(gridValues[ship1] != gridValues[ship2]){
            i++;
        }else{
        var ship2 = Math.round(Math.random() * 7)+1;
        }}

//Main Game
console.log('Lets Play Battleship!');

    while(sink1 < 1 || sink2 < 1 ){
        var guess = readlineSync.question("pick a location on the 9x9 grid i.e A1 through C3: ");
        var checker = battleGrid.indexOf(guess);
        var guessCheck = battleGrid.includes(guess);
    
    if (guessCheck == false) {         
        console.log("Whoa, where did you get that number from? It's not even on the grid!");
    } else if (gridValues[checker] == 1) {
        gridValues[ship1] = 0;
        console.log("The Mini Battleship is sunk!"); 
        sink1++;
  
    } else if (gridValues[checker] == 2 ) {
        console.log("The Mini Destroyer is sunk!");
        gridValues[ship2] = 0;
        sink2++; 
    } else {
        console.log("You missed!");
  }
}
     console.log("You Win!");
        if(readlineSync.keyInYN('Would you like to play again?')){
        }else{
        gameOn++;
        }}

        console.log("Aye Aye Captain, have a shark free day!"); 
