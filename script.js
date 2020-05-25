window.onload = function(){
    for(let i = 0; i < 9; i++){
        document.querySelector(".tic-tac-toe").innerHTML += '<div class = "box"></div>'
    }
    let step = 0;
    document.querySelector(".tic-tac-toe").onclick = function(event){
        console.log(event)
        if(event.target.className == "box"){
            if(step%2 == 0){
                event.target.innerHTML = "x";
            } else {
                event.target.innerHTML = "0";
            }
            step++;
            chechWinner();
        }
    }

    function chechWinner(){
        let allBlock = document.getElementsByClassName("box");
        if(allBlock[0].innerHTML == "x" && allBlock[1].innerHTML == "x" && allBlock[2].innerHTML == "x") alert("X win");
        if(allBlock[3].innerHTML == "x" && allBlock[4].innerHTML == "x" && allBlock[5].innerHTML == "x") alert("X win");
        if(allBlock[6].innerHTML == "x" && allBlock[7].innerHTML == "x" && allBlock[8].innerHTML == "x") alert("X win");
        if(allBlock[0].innerHTML == "x" && allBlock[3].innerHTML == "x" && allBlock[6].innerHTML == "x") alert("X win");
        if(allBlock[1].innerHTML == "x" && allBlock[7].innerHTML == "x" && allBlock[4].innerHTML == "x") alert("X win");
        if(allBlock[2].innerHTML == "x" && allBlock[5].innerHTML == "x" && allBlock[8].innerHTML == "x") alert("X win");
        if(allBlock[0].innerHTML == "x" && allBlock[4].innerHTML == "x" && allBlock[8].innerHTML == "x") alert("X win");
        if(allBlock[2].innerHTML == "x" && allBlock[4].innerHTML == "x" && allBlock[6].innerHTML == "x") alert("X win");

        if(allBlock[0].innerHTML == "0" && allBlock[1].innerHTML == "0" && allBlock[2].innerHTML == "0") alert("0 win");
        if(allBlock[3].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[5].innerHTML == "0") alert("0 win");
        if(allBlock[6].innerHTML == "0" && allBlock[7].innerHTML == "0" && allBlock[8].innerHTML == "0") alert("0 win");
        if(allBlock[0].innerHTML == "0" && allBlock[3].innerHTML == "0" && allBlock[6].innerHTML == "0") alert("0 win");
        if(allBlock[1].innerHTML == "0" && allBlock[7].innerHTML == "0" && allBlock[4].innerHTML == "0") alert("0 win");
        if(allBlock[2].innerHTML == "0" && allBlock[5].innerHTML == "0" && allBlock[8].innerHTML == "0") alert("0 win");
        if(allBlock[0].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[8].innerHTML == "0") alert("0 win");
        if(allBlock[2].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[6].innerHTML == "0") alert("0 win");
    
    }
}
