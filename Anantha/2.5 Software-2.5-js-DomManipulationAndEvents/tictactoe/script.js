const initializeGame = (() =>{
    document.getElementById('kyc').style.display="inline";
    document.getElementById('viewport-box').style.display="none";
})();

const player1 = {piece:'0',name:"Anantha", chosen:true, playfirst:false};
const player2 = {piece:'X',name:"Computer", chosen:false, playfirst:true};
let comp;
let player;

const startTheGame = () =>{
    document.getElementById('kyc').style.display="none";
    document.getElementById('viewport-box').style.display="inline";
    
    //initialize player1 and player2
    game.computer = player2;
    game.player = player1;
    playFirstMove();
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
hasWon:false
};



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

//Let computer make the first move ##################################
const playFromComputer = () => {
    let totalMoves=0;
    totalMoves = game.computerMoves?.length + game.computerMoves?.length;
    let computeMoveHappened=false;
    let cellref="";
    do {
            cellref = getRandomCell();   
            if( game.hasWon == false && cellref!="" && totalMoves<9 && (game.computer.playfirst && (game.playerMoves?.length == 0 || game.computerMoves?.length == 0 ||  moveExists(cellref)==false)))
            {
                computeMoveHappened = true;

                // var t =  setTimeout(function() {
                    // The setTimeout() is executed only once. If you need repeated executions, use setInterval() instead.
                    console.log(cellref);
                    console.log(game.computer.piece);
                    document.getElementById(cellref).innerHTML = game.computer.piece;
                    game.computerMoves.push(cellref);
                    let ifwon = hasWon('c'); 
                    updateGameStatus(ifwon,'c');
                // },1000);
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
    if( (game.playerMoves!=null && game.playerMoves.includes(cellref)==false) && (game.computerMoves!=null && game.computerMoves.includes(cellref)==false) )
    {
        return false;
    }
    else
    {
        return true;
    }
}

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
        
        alert(`${playerName} has won!!!`);
        game.hasWon=true;
        if(status[1].indexOf("line-d-")!=-1)
        {
            document.getElementById(status[1]).style.opacity = 1;
        }
        else
        {
            document.getElementById(status[1]).style.display="inline";
        }
    }
}
function hasWon(who){
    let matchCount=0;
    let status;
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
            if(matchCount==3 && status == null)
            {
                status =  [true, key_winsWhen];
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
            if(matchCount==3 && status == null)
            {
                status = [true, keyc_winsWhen];
            }
        });
    }
    else
    {
        //Must never come here
        status = [false,""];
    }
    return status;
}

// Gaming Functions *********************************************************************************************

