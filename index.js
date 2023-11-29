var d1 = (1+Math.floor(Math.random()*6));
var d2 = (1+Math.floor(Math.random()*6));

function checkWinner(d1, d2) {
    if (d1 == d2) {
        document.querySelector("h1").innerHTML = "Draw ;-;";
        return 0;
        
    } else if(d2 > d1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        return 2;
    }
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    return 1;
}

function setImg(d1, d2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice"+ d1 +".png")
    document.querySelector(".img2").setAttribute("src", "./images/dice"+ d2 +".png")
}
setImg(d1, d2);
checkWinner(d1, d2);

function refreshPage(){
    window.location.reload();
}
