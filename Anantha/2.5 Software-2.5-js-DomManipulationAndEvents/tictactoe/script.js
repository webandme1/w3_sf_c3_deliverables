const initializeGame = (() =>{
    document.getElementById('kyc').style.display="inline";
    document.getElementById('viewport-box').style.display="none";
    document.getElementById('restart-play-area').style.display="none";
    document.getElementById('restartGame').addEventListener('click',restartGame);
})();

const player1 = {piece:'0',name:"You", playfirst:false};  // A Player
const player2 = {piece:'X',name:"Computer", playfirst:true}; //Computer
let comp;
let player;

const startTheGame = () =>{
    document.getElementById('kyc').style.display="none";
    document.getElementById('viewport-box').style.display="inline";
    document.getElementById('restart-play-area').style.display="inline";
    
    //Fill the values
    const whoWillStartTheGame = document.getElementById('whostarts1').checked;
    if(whoWillStartTheGame){
        player1.playfirst = false;
        player2.playfirst = true;
    }
    else
    {
        player1.playfirst = true;
        player2.playfirst = false;
    }
    const nameOfPlayer = document.getElementById('name').value;
    // console.log(nameOfPlayer);
    if (nameOfPlayer.trim() != "")
    {
        player1.name = nameOfPlayer;
    }  
    const pieceXselected = document.getElementById('piece1').checked;
    // console.log(pieceXselected);
    if(pieceXselected){
        player1.piece = "X";
        player2.piece = "0";
    }
    else
    {
        player1.piece = "0";
        player2.piece = "X";
    }

    //initialize player1 and player2
    game.computer = player2;
    game.player = player1;

    if(player2.playfirst)
    {
        playFirstMove();
    }
}
document.getElementById('btnStart').addEventListener("click",startTheGame);

let game = {
computer: {},
player:{},
winsWhen:new Map([
                 ["line-t-l-r",[11,12,13]],
                 ["line-m-l-r",[21,22,23]],
                 ["line-b-l-r",[31,32,33]],
                 ["line-f-v",  [11,21,31]],
                 ["line-s-v",  [12,22,32]],
                 ["line-t-v",  [13,23,33]],
                 ["line-d-l-r",  [11,22,33]],
                 ["line-d-r-l",  [13,22,31]]
]),
playerMoves:[],
computerMoves:[],
hasWon:false,
reset:function(){
    this.computer={},
    this.player={};
    this.playerMoves=[];
    this.computerMoves=[];
    this.hasWon=false;
}
};

function restartGame(){
    game.reset();
   
    let alldivs = document.getElementsByClassName('grid-item');
    for (let i = 0; i < alldivs.length; i++) {
        alldivs[i].innerHTML = "&nbsp;";
    }

    game.winsWhen.forEach( (v,k) => {
             document.getElementById(k).style.opacity = "0" ;
    });
    startTheGame();
}


// Utility Functions *********************************************************************************************

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

function getRandomCell() {
    const r = getRandomInt(1,4);
    const c = getRandomInt(1,4);
    return r + '' + c;
};

// Utility Functions *********************************************************************************************


// Gaming Functions *********************************************************************************************
function TotalMovesPerformedInTheGameSoFar(){
    return game.computerMoves?.length + game.playerMoves?.length;
}
//Let computer make the first move ##################################
const playFromComputer = () => {
    let totalMoves=0;
    totalMoves = TotalMovesPerformedInTheGameSoFar() ;
    let computeMoveHappened=false;
    let cellref="";
    do {
            cellref = getRandomCell();   
            if( game.hasWon == false && cellref!="" && totalMoves<9 && (game.playerMoves!=null && (game.playerMoves?.length == 0 || game.computerMoves?.length == 0 ||  moveExists(cellref)==false)))
            {
                computeMoveHappened = true;

                var t =  setTimeout(function() {
                    // The setTimeout() is executed only once. If you need repeated executions, use setInterval() instead.
                    // console.log(cellref);
                    // console.log(game.computer.piece);
                    document.getElementById(cellref).innerHTML = game.computer.piece;
                },1000);
                game.computerMoves.push(cellref);
                let ifwon = hasWon('c'); 
                updateGameStatus(ifwon,'c');
            }
            else if(totalMoves == 9 || game.hasWon == true)
            {
                computeMoveHappened = true;
            }
    }
    while (computeMoveHappened == false);
}
const playFirstMove = () => {
        let cellref = getRandomCell();
        var t =  setTimeout(function() {
            // The setTimeout() is executed only once. If you need repeated executions, use setInterval() instead.
            document.getElementById(cellref).innerHTML = game.computer.piece;
            game.computerMoves.push(cellref);
            updateGameStatus(hasWon('c'),'c');
        },1000);
}
//Let computer make the first move ##################################

function moveExists(cellref){
    if( ( game.playerMoves!=null && game.playerMoves.includes(cellref)==false) && (game.computerMoves!=null && game.computerMoves.includes(cellref)==false) )
    {
        return false;
    }
    else
    {
        return true;
    }
}

let playerFirstMoveCompleted = false;

//Event based triggers
const playSubsequentMoves = (event) =>{
    //console.dir(event);
    let invalidMove=false;
        
    if(game.hasWon == false && ((game.playerMoves?.length == 0 && game.computerMoves?.length == 0) || moveExists(event.target.id)==false))
    {
        document.getElementById(event.target.id).innerHTML = game.player.piece;
        game.playerMoves.push(event.target.id);
        const ifwon = hasWon('p'); 
        updateGameStatus(ifwon,'p');
    }
    else
    {
        alert("Invalid Move");
        invalidMove=true;
    }
   
    if(invalidMove == false)
    {
        playFromComputer();
    }
}
document.getElementById('grid-container').addEventListener("click",playSubsequentMoves);

function updateGameStatus(status,who){
    let playerName="";
    let totalMovesSoFar = TotalMovesPerformedInTheGameSoFar();
    if(status!=null && status[0]==true)
    {
        if(who == 'p')
        {
            playerName = game.player.name;
        }
        else if(who == 'c')
        {
            playerName = game.computer.name;
        }
        else
        {
            //Must never come here
            playerName = "N.A"
        }
        if(playerName == "You")
        {
            alert(`You win!!!`);
        }
        else
        {
            alert(`${playerName} wins!!!`);
        }
        game.hasWon=true;
        document.getElementById(status[1]).style.opacity = 1;
       
    }
    else if(status!=null && status[0]==false &&  totalMovesSoFar == 9){
        alert("Game tied!!")
    }
}
function hasWon(who){
    let matchCount=0;
    let status;
    let toCheckWins=false;
    if(who == 'p' &&  game.playerMoves.length >= 3 )
    {
        game.winsWhen.forEach((value_winsWhen, key_winsWhen) => {
            matchCount = 0;
            game.playerMoves.filter( (value)  => {
                if(value_winsWhen.includes(parseInt(value)))
                {
                    matchCount += 1;
                }
            });
            if(matchCount==3 && toCheckWins == false)
            {
                // When P wins
                status =  [true, key_winsWhen];
                toCheckWins = true;
            }
            else if(toCheckWins == false)
            {
                // When no one has won
                status = [false,""];
            }
        });
    }
    else if(who == 'c' &&  game.computerMoves.length >= 3)
    {
        game.winsWhen.forEach((valuec_winsWhen, keyc_winsWhen) => {
            matchCount = 0;
            game.computerMoves.filter( (value)  => {
                if(valuec_winsWhen.includes(parseInt(value)))
                {
                    matchCount += 1;
                }
            });
            if(matchCount==3 && toCheckWins == false)
            {
                //When C Wins
                status = [true, keyc_winsWhen];
                toCheckWins = true;
            }
            else if(toCheckWins == false)
            {
                // When no one has won yet
                status = [false,""];
            }
        });
    }
    else
    {
        //When total moves performeed by any player is less than 3
        status = [false,""];
    }
    return status;
}

// Gaming Functions *********************************************************************************************

