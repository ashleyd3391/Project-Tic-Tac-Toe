const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const startGame = document.getElementById("startBtn");
const restartGame = document.getElementById("restartBtn");

const boardGame = document.getElementById("board");
const square1 = document.getElementById("m1");
const square2 = document.getElementById("m2");
const square3 = document.getElementById("m3");

const square4 = document.getElementById("m4");
const square5 = document.getElementById("m5");
const square6 = document.getElementById("m6");

const square7 = document.getElementById("m7");
const square8 = document.getElementById("m8");
const square9 = document.getElementById("m9");

const player1Name = player1.value;

restartGame.disabled = "true";


const gameboard = (() => {

        
        
      
  })();


  function createPlayers(name) {
    return{
        greetPlayers(greeting){
            console.log(greeting);
            alert(greeting);  
        }
    }
  };

function displayNameTags(name){
  return{

    createNameTag(nameTag){
          nameTag = document.createElement("h1");
          nameTag.textContent = name.value + ":";
          document.body.append(nameTag);
          nameTag.style.color = "red";
          nameTag.style.margin = "1rem";
          nameTag.style.width = "10rem";
          nameTag.style.marginTop = "-35rem"
          nameTag.style.marginBottom = "20rem";
    }
          
  }
};


  startGame.addEventListener("click", () => {
    let player1Name = new createPlayers(`${player1.value}`);
    player1Name.greetPlayers("Hi" + " " +`${player1.value}` + " " + "and" + " " + `${player2.value}` + "!"  + " " + "Prepare"  + " " + "for"  + " " + "a"  + " " + "battle" + " " + "of" + " " + "tic-tac-toe," + " " + "let" + " " + "the" + " " + "best"  + " " + "player"  + " " + "win.");

    startGame.disabled = "true";

    let player1NameTag = new displayNameTags(player1);
    let player2NameTag = new displayNameTags(player2);

    player1NameTag.createNameTag(player1.value);
    player2NameTag.createNameTag(player2.value);


    player1.parentNode.removeChild(player1);
    player2.parentNode.removeChild(player2);

    function renderGame(){
      boardGame.style.display = "grid";
    };

    renderGame();

    let player1Symbol = "O";
    let player2Symbol = "X";

    const squares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
    
  let turn = 0;

  function checkPlayerTurn(player){
    
    turn++;
    console.log(turn);
    
    if(turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9){
      boardGame.style.color = "pink";
      let player = player1;
    }

    else if(turn == 2 || turn == 4 || turn == 6 || turn == 8){
      boardGame.style.color = "blue";
      let player = player2;
    }

    return player;
  };

    function addPlayerMoves(player){


      squares.forEach(square => {
        square.addEventListener("click", () => {


    
          checkPlayerTurn(player2);
          
          if(player = player1){
            square.textContent = player1Symbol;
          }

          else if (player = player2){
            square.textContent = player2Symbol;
          }


         
        });
        
      });
    
    };


  
    addPlayerMoves();


    
  });





//resets player names
//    player1.value = "";
//    player2.value = "";
  