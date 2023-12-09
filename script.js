let container = document.querySelector(".container");
let numsquares = "16";

function grid(){
	for(let x = 0; x<numsquares; x++){
		let line = document.createElement("div");
		line.classList.add("line");
		for(let x = 0; x<numsquares;x++){
			let box = document.createElement("div");
			let color = 255;
			box.classList.add("box");
			box.style.cssText=`height:${300/numsquares}px;width:${300/numsquares}px;`;
			//box.style.height = `1vw`;
			box.addEventListener('mouseover',()=>{
				color-=50;
				box.style.cssText=`background-color:rgb(${color},${color},${color});height:${300/numsquares}px;width:${300/numsquares}px;`;
			});
			line.appendChild(box);
		}
		container.appendChild(line);
	}
}

grid();

let body = document.querySelector("body");

let button = document.createElement("button");
button.classList.add("size-select");
button.textContent = "change number of boxes";
container.appendChild(button);

button.addEventListener("click",()=>{
	numsquares = prompt("enter number of squares");
	if(numsquares >=100){
		numsquares = 100;
	} else if(numsquares <= 0){
		numsquares = 1;
	}
	let boxes = document.querySelectorAll(".box"); 
	boxes.forEach(box => {
	  box.remove();
	});

	grid();
});
