import "./styles.css";
const squares = Array.from(document.querySelectorAll('.grid div'))

const layout = [
    1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,
    1,3,1,2,2,2,1,1,1,2,1,1,2,2,2,2,3,1,
    1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,2,1,
    1,2,1,1,1,2,1,1,1,2,1,1,2,1,1,1,1,1,
    1,2,2,2,2,2,0,0,0,2,0,0,2,2,2,2,2,1,
    1,1,1,1,2,1,1,1,0,2,1,1,1,2,1,1,1,1,
    1,1,2,1,2,1,1,5,0,2,2,1,1,2,1,2,1,1,
    1,1,2,2,2,1,1,6,0,2,8,1,1,2,2,2,1,1,
    1,1,1,4,1,1,1,1,1,1,1,1,1,1,2,1,1,1,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    1,1,2,1,1,1,1,1,1,2,1,1,1,2,7,2,1,1,
    1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,
    1,2,1,3,1,1,2,1,1,2,1,1,2,1,1,1,2,1,
    1,2,1,2,2,2,2,1,1,2,2,2,2,1,2,1,2,1,
    1,2,1,1,1,1,2,1,1,2,1,1,2,1,2,1,2,1,
    1,2,1,1,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
    1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

for (let i = 0; i < squares.length; i++){
    if(layout[i] === 1){
        squares[i].classList.add('wall')
    }
    else if(layout[i] === 2){
        squares[i].classList.add('path')
    }
    else if(layout[i] === 3){
        squares[i].classList.add('coin')
    }
    else if(layout[i] === 4){
        squares[i].classList.add('pacman')
    }
    else if(layout[i] === 5){
        squares[i].classList.add('blueghost')
    }
    else if(layout[i] === 6){
        squares[i].classList.add('redghost')
    }
    else if(layout[i] === 7){
        squares[i].classList.add('orangeghost')
    }
    else if(layout[i] === 8){
        squares[i].classList.add('pinkghost')
    }
}
