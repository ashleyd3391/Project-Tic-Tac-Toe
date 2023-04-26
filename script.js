
//defined variables

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

//


//Begins game by greeting players and generating board

restartGame.disabled = "true";

  function createPlayers(name) {
    return{
        greetPlayers(greeting){
            console.log(greeting);

            if((player1.value == "") || (player2.value == "")){
              createAlert("Please write your names to start the game", "rgb(34, 70, 148)", "max-content", "30rem", "-25rem", "84rem", "white", "-24rem");
                
            }

            else{
            createAlert(greeting, "rgb(34, 70, 148)", "400px", "44rem", "-54rem", "72rem", "white", "-53rem");
          
            function renderGame(){
              boardGame.style.display = "grid";
            };

            renderGame();

            player1.parentNode.removeChild(player1);
            player2.parentNode.removeChild(player2);

            startGame.disabled = "true";
            
            };
      }
    }
  };

  //

  //Creates a message to the players to signal winners or other alerts

  function createAlert(text, color, width, marginLeft, marginTop, closemarginLeft, closeColor, closeMarginTop){
    const popup = document.createElement('p');
    popup.style.backgroundColor = color;
    popup.style.marginTop = marginTop;
    popup.style.marginLeft = marginLeft;
    popup.style.width = width;
    popup.style.fontSize = "3rem";
    popup.style.padding = "3rem";
    popup.style.zIndex = "3";
    popup.style.position = "absolute";
    popup.style.borderRadius = "10px";
    popup.style.color = "white";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.textContent = text;
    
    document.body.append(popup);
  


    const close = document.createElement('button');
    close.style.width = "35px";
    close.style.height = "35px";
    close.style.color = "#363636";
    close.style.padding = "2px";
    close.textContent = "X";
    close.style.marginLeft = closemarginLeft;
    close.style.position = "absolute";
    close.style.marginTop = closeMarginTop;
    close.style.zIndex = "10";
    close.style.fontSize = "1rem";
    close.style.backgroundColor = closeColor;
    close.style.border = "none";
    document.body.append(close);

    close.addEventListener("click", () => {
      document.body.removeChild(popup);
      document.body.removeChild(close);
    });
    

  };

  //

  //Determines which symbol is used depending on the player and the turn

  startGame.addEventListener("click", () => {
    let player1Name = new createPlayers(`${player1.value}`);
    player1Name.greetPlayers("Hi" + " " +`${player1.value}` + " " + "and" + " " + `${player2.value}` + "!"  + " " + "Prepare"  + " " + "for"  + " " + "a"  + " " + "battle" + " " + "of" + " " + "tic-tac-toe," + " " + "let" + " " + "the" + " " + "best"  + " " + "player"  + " " + "win.");

  

    let player1Symbol = "O";
    let player2Symbol = "X";

    const squares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
    

//

//Keeps track of game by counting turns and adding each time a move is made until there is a winner or a tie
  let turn = 0;

  function checkPlayerTurn(player){
    
    if(turn == 1 || turn == 3 || turn == 5 || turn == 7){
      boardGame.style.color = "rgb(146, 31, 108)";
      return "player1";

    }

    else if(turn == 2 || turn == 4 || turn == 6 || turn == 8){
      boardGame.style.color = "rgb(34, 70, 148)";
      return "player2";

    }

    else if(turn <= 9){

      squares.forEach(square => {
        square.removeEventListener("click", addPlayerMoves);
      });

      createAlert("It's a tie!", "rgb(34, 70, 148)", "400px", "44rem", "-54rem", "72rem", "white", "-53rem");
    }


  
  };
//

//Determines who is the winner when a column or row has the same symbol
  function checkWinner(){

    if(((square1.textContent == player1Symbol) && (square2.textContent == player1Symbol) && (square3.textContent == player1Symbol)) 
    || ((square1.textContent == player1Symbol) && (square4.textContent == player1Symbol) && (square7.textContent == player1Symbol)) 
    || ((square7.textContent == player1Symbol) && (square8.textContent == player1Symbol) && (square9.textContent == player1Symbol)) 
    || ((square4.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square6.textContent == player1Symbol)) 

    || ((square2.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square8.textContent == player1Symbol)) 
    || ((square3.textContent == player1Symbol) && (square6.textContent == player1Symbol) && (square9.textContent == player1Symbol)) 
    || ((square1.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square9.textContent == player1Symbol)) 
    || ((square3.textContent == player1Symbol) && (square5.textContent == player1Symbol) && (square7.textContent == player1Symbol))){
      
      createAlert(player1.value + " " + "wins!", "rgb(146, 31, 108)", "150px", "52rem", "-46rem", "64rem", "white", "-45rem");

      createConfetti();

      squares.forEach(square => {
        square.removeEventListener("click", addPlayerMoves);
      });

    }

    else if(((square1.textContent == player2Symbol) && (square2.textContent == player2Symbol) && (square3.textContent == player2Symbol)) 
    || ((square1.textContent == player1Symbol) && (square2.textContent == player1Symbol) && (square3.textContent == player1Symbol)) 
    || ((square1.textContent == player2Symbol) && (square4.textContent == player2Symbol) && (square7.textContent == player2Symbol)) 
    || ((square7.textContent == player2Symbol) && (square8.textContent == player2Symbol) && (square9.textContent == player2Symbol)) 
    || ((square4.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square6.textContent == player2Symbol)) 

    || ((square2.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square8.textContent == player2Symbol)) 
    || ((square3.textContent == player2Symbol) && (square6.textContent == player2Symbol) && (square9.textContent == player2Symbol)) 
    || ((square1.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square9.textContent == player2Symbol)) 
    || ((square3.textContent == player2Symbol) && (square5.textContent == player2Symbol) && (square7.textContent == player2Symbol))){
      
      createAlert(player2.value + " " + "wins!", "rgb(34, 70, 148)", "150px", "52rem", "-46rem", "64rem", "white", "-45rem");
      
      createConfetti();

      squares.forEach(square => {
        square.removeEventListener("click", addPlayerMoves);
      });
  
    };
//

//Throws confetti for the winner

    function createConfetti(){
        const confetti = document.createElement('img');
        confetti.style.width = "45%";
        confetti.style.height = "40%";
        confetti.style.marginTop = "-70rem"
        confetti.style.position = "absolute";
        confetti.style.background = "none";
        confetti.style.marginLeft = "30rem";
        confetti.setAttribute("src", "confetti.gif");
        document.body.appendChild(confetti);
    };
//

//Restarts the game by refreshing window
    restartGame.removeAttribute("disabled");
    restartGame.addEventListener("click", () => {

        window.location.reload();
    });
  };
//

//Allows player to add their move to the board, removes ability once game is over
    function addPlayerMoves(){

        turn++;
        console.log(turn);
    
        const result = checkPlayerTurn();
        

        if(result == "player1"){
          if((this.textContent == player1Symbol) || (this.textContent == player2Symbol)){
          console.log("invalid move");
          turn--;
          createAlert("Invalid move! Try again", "rgb(34, 70, 148)", "max-content", "43rem", "-50rem", "74rem", "white", "-49rem");
         
          }
        
          else{
            this.textContent = player1Symbol;
          }
        }

        else if (result == "player2"){
          if((this.textContent == player1Symbol) || (this.textContent == player2Symbol)){
            console.log("invalid move");
            turn--;
            createAlert("Invalid move! Try again", "rgb(34, 70, 148)", "max-content", "43rem", "-50rem", "74rem", "white", "-49rem");
           
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


