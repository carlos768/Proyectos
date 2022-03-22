window.onload = function(){
    var count = 0;
    document.getElementById("add").onclick = function(){
    count ++;
    document.getElementById("click").innerHTML = count;
    document.getElementById("rest").onclick = function(){
    count --;
    document.getElementById("click").innerHTML = count;
        }
    }

    document.getElementById("reset").onclick = function(){
        count = 0;
        document.getElementById("click").innerHTML = 0;
    }
}