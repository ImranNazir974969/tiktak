console.log("Wellcome tic tac toe");
let isTurn = new Audio("Sound.mp3");
let gameover = new Audio("headshot.mp3");
let turn = "X";
let gameEnd = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const CleckWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 1, 4, 0],
        [3, 4, 5, 1, 13, 0],
        [6, 7, 8, 1, 22, 0],
        [0, 3, 6, -8, 14, 90],
        [1, 4, 7, 1, 14, 90],
        [2, 5, 8, 10, 14, 90],
        [0, 4, 8, 1, 13, 45],
        [2, 4, 6, 0, 14, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is won";
            gameEnd = true;
            document.querySelector('.pic').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            document.querySelector('.line').style.width = "25vw";
            turn="";
            document.querySelector('#line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('#line').style.transform = 'draw';
        }
    })
}
// game logoic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            isTurn.play();
            CleckWin();
            if (!gameEnd) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

function resetbtn(){

    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = "";
    });

    turn = "X";
    gameEnd = false;
    document.getElementById('info').innerText = "Turn for " + turn;
    document.querySelector('.pic').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0px";
}


