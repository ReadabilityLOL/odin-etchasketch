let container = document.querySelector(".container");


function grid(){
	for(let x = 0; x<16; x++){
		let line = document.createElement("div");
		line.classList.add("line");
		for(let x = 0; x<16;x++){
			let box = document.createElement("div");
			let color = 255;
			box.classList.add("box");
			box.addEventListener('mouseover',()=>{
				color-=50;
				box.style.cssText=`background-color:rgb(${color},${color},${color});`
			});
			line.appendChild(box);
		}
		container.appendChild(line);
	}
}

grid();

let button = document.querySelector(".reset");
button.addEventListener('click',()=>{
	grid();
});
