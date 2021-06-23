let btn = document.getElementById('btn')
let bg = document.body
let bc = document.getElementById('bc');
let colors = [
	
	"#1abc9c",
	"#2ecc71",
	"#3498db",
	"#9b59b6",
	"#34495e",
	"#16a085",
	"#27ae60",
	"#2980b9",
	"#8e44ad",
	"#2c3e50",
	"#f1c40f",
	"#e67e22",
	"#e74c3c",
	"#ecf0f1",
	"#95a5a6",
	"#f39c12",
	"#d35400",
	"#c0392b",
	"#bdc3c7",
	"#7f8c8d"
]

btn.addEventListener("click", function(){
	bg.style.backgroundColor = colors[Math.floor(Math.random()*21)];
	bc.innerText = bg.style.backgroundColor;
	bc.style.color = bg.style.backgroundColor;
})