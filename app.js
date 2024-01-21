let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg");
let msg2=document.querySelector("#mess");

let turnO = true;//playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame=()=>{
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if (turnO) {
            //playerO
            box.innerText ="O";
            turnO = false;
        }
        else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg2.innerText=`Congratulations!!! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if(post1val!=""&&post2val!=""&&post3val!=""){
            if(post1val===post2val && post2val===post3val){
                console.log("Winner",post1val);
                showWinner(post1val);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

