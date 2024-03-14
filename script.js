let count = document.getElementById('counter');
let increase = document.getElementById('incrementBtn');
let score = 0;
count.innerHTML = score;
increase.addEventListener("click",()=>{
	score++;
	count.innerHTML = score;
});