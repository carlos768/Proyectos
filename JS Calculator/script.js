"use strict"

const btnNum = document.querySelectorAll('.btn-num');
const sum = document.getElementById('sum');
const sus = document.getElementById('sus');
const res = document.getElementById('res');
const clear = document.getElementById('btn-clear');
let screen = document.getElementById('screen');

let currentNumber = "";
let calc = [];

const calcSum = () =>{
	calc.push(parseInt(currentNumber));
	screen.value += sum.innerText;
	currentNumber = "";
}

const calcSus = () =>{
	calc.push(parseInt(currentNumber));
	screen.value += sus.innerText;
	currentNumber = "";
}

const calcResult = () =>{
	calc.push(parseInt(currentNumber));
	let result = calc.reduce((a, b) => a + b, 0);
	currentNumber = "";
	screen.value = result;
}

btnNum.forEach(function(btn){
	const addNumbers = () =>{
		btn.addEventListener('click', function(){
			screen.value += btn.innerText;
			currentNumber += btn.innerText;
		})
	}
	addNumbers();
})


sum.addEventListener('click', function(){
	if (currentNumber == "") {
	currentNumber = 0;
	calcSum();
	} else {
	calcSum();
	}

	const btnNum = document.querySelectorAll('.btn-num');
	btnNum.forEach(function(btn){
	btn.removeAttribute("disabled");		
	})
	
})

sus.addEventListener('click', function(){
	if (currentNumber == "") {
		currentNumber = 0;
		calcSus();
	} else {
		calcSus();
	}

	const btnNum = document.querySelectorAll('.btn-num');
	btnNum.forEach(function(btn){
	btn.removeAttribute("disabled");		
	})
})

clear.addEventListener('click', function(){
	screen.value = "";
	currentNumber = "";
	calc = [];
})

res.addEventListener('click', function(){

	if (currentNumber == "") {
	currentNumber = 0;
	calcResult();
	} else {
	calcResult();
	}

	const btnNum = document.querySelectorAll('.btn-num');

	btnNum.forEach(function(btn){	
		btn.setAttribute("disabled", "");		
	})
})
