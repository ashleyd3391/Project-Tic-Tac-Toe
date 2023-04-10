const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const startGame = document.getElementById("startBtn");
const restartGame = document.getElementById("restartBtn");
const boardGame = document.getElementById("board");
const player1Name = player1.value;

restartGame.disabled = "true";


const gameboard = (() => {
    const add = (a, b) => a + b;

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

    console.log(player2.value);

    player1.parentNode.removeChild(player1);
    player2.parentNode.removeChild(player2);

    function renderGame(){
      boardGame.style.display = "grid";
    };

    renderGame();

  });


//resets player names
//    player1.value = "";
//    player2.value = "";
  