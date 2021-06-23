let turn = 0;
let game = [];
const reset = document.getElementById('reset');

const btnPressed = (e, pos) =>{
    turn++
    const btn = e.target;
    const color = turn % 2 ? '#30db1a' : '#df1010';
    const playerName = turn % 2 ? 'Green' : 'Red';
    btn.style.backgroundColor = color;
    game[pos] = color; 
    if(win())alert(`Player ${playerName} Win!`);
}

const win = () =>{
    if(game[0] == game[1] && game[0] == game[2] && game[0]){
        return true;
    }else if(game[3] == game[4] && game[3] == game[5] && game[3]){
        return true;
    }else if(game[6] == game[7] && game[6] == game[8] && game[6]){
        return true;
    }else if(game[0] == game[3] && game[0] == game[6] && game[0]){
        return true;
    }else if(game[1] == game[4] && game[1] == game[7] && game[1]){
        return true;
    }else if(game[2] == game[5] && game[2] == game[8] && game[2]){
        return true;
    }else if(game[0] == game[4] && game[0] == game[8] && game[0]){
        return true;
    }else if(game[2] == game[4] && game[2] == game[6] && game[2]){
        return true;
    }else{
        return false;
    }
}

document.querySelectorAll('.zone').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPressed(e, i)));


document.querySelectorAll('.zone').forEach((zone) =>{
    reset.addEventListener('click', function(){
        zone.style.backgroundColor = '#6d6b6b';
        game = [];
    })
})

// reset.addEventListener('click', function(){
//     document.querySelectorAll('.zone').style.backgroundColor = '#6d6b6b';
//     game = [];
// })