const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
AllBox = document.querySelectorAll('section span'),
players = document.querySelector('.players');

window.onload = ()=>{
    for (let i = 0; i < AllBox.length; i++) {
        AllBox[i].setAttribute('onclick','clickedBox(this)');
        
    }
    selectXBtn.onclick=()=>{
        selectBox.classList.add('hide'); 
        playBoard.classList.add('show');
        players.setAttribute('class','players active player');


    }
    selectOBtn.onclick=()=>{
        selectBox.classList.add('hide'); 
        playBoard.classList.add('show');


    }
}
let playerXIcon = "bi bi-x";
let playerOIcon = "bi bi-circle";
let playersign = 'X';
let runbot = true;

function clickedBox(element){
if(players.classList.contains('player')){
    
    element.innerHTML = `<i class="${playerOIcon}"></i>`
    players.classList.add('active');
    playersign = 'O';
    element.setAttribute('id',playersign);

}else{
    element.innerHTML = `<i class="${playerXIcon}"></i>`
    players.classList.add('active');
    element.setAttribute('id',playersign);
}

element.style.pointerEvents= 'none';
let randomDelaytime = ((Math.random()*1000 )+ 200).toFixed();
setTimeout(()=>{bot(runbot)},randomDelaytime)
     
}



function bot(){
    if(runbot){
    playersign = 'O';
    let array= [];
    for (let i = 0; i < AllBox.length; i++) {
        if(AllBox[i].childElementCount == 0){
            array.push(i);
        }
        
    }
     let randomBox = array[Math.floor(Math.random()*array.length)];
     if(array.length>0){
        if(players.classList.contains('player')){
            AllBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`
            players.classList.add('active');
            playersign = 'X';
            AllBox[randomBox].setAttribute('id',playersign);
            
            
         
        }else{
            AllBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`
            players.classList.remove('active'); 
            AllBox[randomBox].setAttribute('id',playersign);
        }
        
     }
     
    
     AllBox[randomBox].style.pointerEvents = 'none';
     playersign = 'X';
}

}

function getClass(idname){
    return document.querySelector(".box" + idname).id;
}
function checkthreeclasses(val1, val2, val3, sign){
    if(getClass(val1)== sign && getClass(val2)== sign && getClass(val3)==sign){
        return true;
    } 
}
function selectwinner(){
    if(checkthreeclasses(1, 2, 3, playersign) || checkthreeclasses(4, 5, 6, playersign) || checkthreeclasses(6, 7, 8, playersign) || checkthreeclasses(1, 4, 7, playersign)|| checkthreeclasses(2, 5, 8, playersign) || checkthreeclasses(3, 6, 9, playersign) || checkthreeclasses(1, 5, 9, playersign) || checkthreeclasses(3, 5, 7, playersign))
     console.log(playersign + " " + "is the winner");
     runbot= false;
     bot(runbot);
}