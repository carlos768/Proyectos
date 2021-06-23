let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slider = document.getElementById('slider');

let imgs = [
	
	"img/1.jpg",
	"img/2.jpg",
	"img/3.jpg"

]

let num = 0;

prev.addEventListener("click", function(){
	if (num > 0){
		num--;
		slider.src = imgs[num];
	}else{
		num = imgs.length - 1;
		slider.src = imgs[num];
	}
})

next.addEventListener("click", function(){
	if (num < 2){
		num++;
		slider.src = imgs[num];
	}else{
		num = 0;
		slider.src = imgs[num]
	}
})