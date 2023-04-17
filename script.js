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
const player2Name = player2.value;

restartGame.disabled = "true";

  function createPlayers(name) {
    return{
        greetPlayers(greeting){
            console.log(greeting);
            alert(greeting);  
        }
    }
  };

  function createAlert(text){
    const popup = document.createElement('p');
    popup.style.backgroundColor = "pink";
    popup.style.position = "absolute";
    popup.style.marginTop = "-59rem";
    popup.style.marginLeft = "22rem";
    popup.style.width = "min-content";
    popup.style.fontSize = "3rem";
    popup.style.padding = "3rem";
    popup.textContent = text;

    document.body.append(popup);
  };

  startGame.addEventListener("click", () => {
    let player1Name = new createPlayers(`${player1.value}`);
    player1Name.greetPlayers("Hi" + " " +`${player1.value}` + " " + "and" + " " + `${player2.value}` + "!"  + " " + "Prepare"  + " " + "for"  + " " + "a"  + " " + "battle" + " " + "of" + " " + "tic-tac-toe," + " " + "let" + " " + "the" + " " + "best"  + " " + "player"  + " " + "win.");

    startGame.disabled = "true";

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
    
    if(turn == 1 || turn == 3 || turn == 5 || turn == 7){
      boardGame.style.color = "pink";
      return "player1";

    }

    else if(turn == 2 || turn == 4 || turn == 6 || turn == 8){
      boardGame.style.color = "blue";
      return "player2";

    }

    else if(turn <= 9){

      


      squares.forEach(square => {
        square.removeEventListener("click", addPlayerMoves);
      });
    }


  
  };

  function checkWinner(){

    if(((square1.textContent == player1Symbol) && (square2.textContent == player1Symbol) && (square3.textContent == player1Symbol)) 
    || ((square1.textContent == player1Symbol) && (square4.textContent == player1Symbol) && (square7.textContent == player1Symbol)) 
    || ((square7.textContent == player1Symbol) && (square8.textContent == player1Symbol) && (square9.textContent == player1Symbol)) 
    || ((square4.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square6.textContent == player1Symbol)) 
    || ((square2.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square8.textContent == player1Symbol)) 
    || ((square3.textContent == player1Symbol) && (square6.textContent == player1Symbol) && (square9.textContent == player1Symbol)) 
    || ((square1.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square9.textContent == player1Symbol)) 
    || ((square3.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square7.textContent == player1Symbol))){
      
      createAlert(player1.value + " " + "wins!");

      squares.forEach(square => {
        square.removeEventListener("click", addPlayerMoves);
      });

    }

    else if(((square1.textContent == player2Symbol) && (square2.textContent == player2Symbol) && (square3.textContent == player2Symbol)) 
    || ((square1.textContent == player2Symbol) && (square4.textContent == player2Symbol) && (square7.textContent == player2Symbol)) 
    || ((square7.textContent == player2Symbol) && (square8.textContent == player2Symbol) && (square9.textContent == player2Symbol)) 
    || ((square4.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square6.textContent == player2Symbol)) 
    || ((square2.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square8.textContent == player2Symbol)) 
    || ((square3.textContent == player2Symbol) && (square6.textContent == player2Symbol) && (square9.textContent == player2Symbol)) 
    || ((square1.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square9.textContent == player2Symbol)) 
    || ((square3.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square7.textContent == player2Symbol))){
      alert(`${player2.value}` + " " + "wins!" + " " + "Game over!");
      
      squares.forEach(square => {
        square.removeEventListener("click", addPlayerMoves);
      });
  
    };

    restartGame.removeAttribute("disabled");
    restartGame.addEventListener("click", () => {

        window.location.reload();
    });
  };

    function addPlayerMoves(){

        turn++;
        console.log(turn);
    
        const result = checkPlayerTurn();
        

        if(result == "player1"){
          if((this.textContent == player1Symbol) || (this.textContent == player2Symbol)){
          console.log("invalid move");
          turn--;
         
          }
        
          else{
            this.textContent = player1Symbol;
          }
        }

        else if (result == "player2"){
          if((this.textContent == player1Symbol) || (this.textContent == player2Symbol)){
            console.log("invalid move");
            turn--;
           
            }
          
            else{
              this.textContent = player2Symbol;
              
            }

        };

        checkWinner();
    };
    


      squares.forEach(square => {
        square.addEventListener("click", addPlayerMoves);
        
      });

    
  });




  // Next steps:

    //remove ability to add moves after winner is chosen - done

    //add alert "it is a tie" when turn is equal to 10 - 

    //make restart button functional so a new game can be played - done

    //remove name tags on screen - done

    //display turn counter

    //display invalid moves

    // add styling
        //background & board color
        //player move colors
        //buttons
  