var readlineSync = require('readline-sync');


//Game Setup Function Section

function checkGridPlacements(checker){

    var numberofSpots = 0;

        for(indexNumber = 0; indexNumber < 10; indexNumber++){
            var incrementGrid = checker[indexNumber];
    
            var gridSpots = incrementGrid.filter(item => item >= 1 && item <= 5).length; 

            numberofSpots += gridSpots;
            }
        return numberofSpots;
    }


function checkGridPlacementsStepTwo(){
       
    var countt = 0;
    var checker = prepareGrid();
    var checkerTwo = checkGridPlacements(checker);

    while(countt<1){
        if(checkerTwo == 17){
            countt++;

        }else{
            var checker = prepareGrid();
            prepareGrid();
            var checkerTwo = checkGridPlacements(checker);
    }
}
return checker;
}

function prepareGrid(){

    var grid = [];
    iMax = 10;
    jMax = 10;
    count = 0;

    const battleShips = {
        destroyer: 2,
        carrier: 5,
        submarine: 3,
        cruiser: 3,
        battleship: 4,
        }


for (let i = 0; i < iMax; i++) {
    grid[i] = [];
  
   for (let j = 0; j < jMax; j++) {  
       grid[i][j] = count;
     }
  }

  for(const shipLength in battleShips) { 
    var shipStore = 0;                      
    shipStore += battleShips[shipLength];     

    var counter = 0;
    while(counter == 0){  
    var shipDirection = Math.floor(Math.random() * 2);
    counter ++;
    } 

        if(shipDirection == 0){
            var vertical = Math.floor(Math.random() * 10);     
            var horizontal = Math.floor(Math.random() * 10);
            var i = 0; 

                   while(i < shipStore){   
                   
                        if(vertical + shipStore < 10){
                       
                            for(i = 0; i <shipStore; i++){      
                            grid[vertical][horizontal] += shipStore;   
                            vertical++;                         
                            }

                        }else{
                            var vertical = Math.floor(Math.random() * 10);
                            }
                    }
            }

              if(shipDirection == 1){
            var vertical = Math.floor(Math.random() * 10);     
            var horizontal = Math.floor(Math.random() * 10);
            var i = 0; 
              }

                   while(i < shipStore){     
                        
                        if(horizontal + shipStore < 10){

                            for(i = 0; i <shipStore; i++){     
                            grid[vertical][horizontal] += shipStore;
                            horizontal++;
                            }

                        }else{
                            var horizontal = Math.floor(Math.random() * 10);
                            }
                    }
                  }

                  let sum =0;

                  for(let rowIndex = 0; rowIndex < grid.length; rowIndex++){
                      const row = grid[rowIndex];
                      for(let colIndex = 0; colIndex < row.length; colIndex++){
                      const grid = row[colIndex];
                      if (grid === 1){
                          sum++;
                      }
                  }
                }
            return grid;  
            }

//Game Action Function Section

    function getUserGuess(){

        var verticalArr = ['A','B','C','D','E','F','G','H','I','J'];
        var horizontalArr = ['0','1','2','3','4','5','6','7','8','9','10'];
        var guessTest = 0;
    
    while(guessTest < 1){

        var guess = readlineSync.question("pick a location on the 10x10 grid: ");
        var guessHalfOne = guess.slice(0,1);
        var guessHalfTwo = guess.slice(1);
        
        if(verticalArr.includes(guessHalfOne) && horizontalArr.includes(guessHalfTwo)){
            guessTest ++;
        }else{
            console.log('Whoa, thats not on the Grid!');
        }
    }
    return guess;  
}


const transformUserGuess = () => {
    var userGuess = getUserGuess();
    var verticalLetters = ['A','B','C','D','E','F','G','H','I','J'];

    var inputOne = userGuess.slice(0,1);
   const hrzntlIndex = verticalLetters.indexOf(inputOne);

    var inputTwo = userGuess.slice(1);
    const vertIndex = parseInt(inputTwo)-1;
    return[hrzntlIndex, vertIndex]; 
}

const checkUserGuess = () => {
    var transformedGuess = transformUserGuess();
    var y = transformedGuess[0];
    var x = transformedGuess[1];
    var gridGuess = result[y][x];    
    return [gridGuess, y, x, result];       
}

const multipleGuess = () => {
    var correctGuess = 0;
    
    while(correctGuess < 17){    
        
        var getUserGuess = checkUserGuess();
        var guessValue = getUserGuess[0];
        var guessVertical = getUserGuess[1];
        var guessHorizontal = getUserGuess[2];
        var resultGrid = getUserGuess[3];
        console.log(guessValue);
        if(guessValue > 0){
            console.log('you hit a ship!');
            resultGrid[guessVertical][guessHorizontal] = 0;
            correctGuess += 1;
        }else{
        console.log('you missed the ships!');
    }
}
    console.log('you sunk all the ships you savage, you win!');
}


//Game Sequence

var gameOn = 0;

    console.log('lets play Battleship! Do you have what it takes to sink my Armada?');
    var result = checkGridPlacementsStepTwo();
    multipleGuess();

while(gameOn < 1){

    if(readlineSync.keyInYN('Would you like to play again?')){
        console.log('lets play Battleship! Do you have what it takes to sink my Armada?');
        var result = checkGridPlacementsStepTwo();
        multipleGuess();
    }else{
        console.log('Thanks for playing, you savage!');
        gameOn++;
        }
    }
        