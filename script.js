let container = document.querySelector(".container");
let numsquares = 32;

function grid(){
	for(let x = 0; x<numsquares; x++){
		let line = document.createElement("div");
		line.classList.add("line");
		line.style.cssText = "width:960px;height:960px;";
		for(let x = 0; x<numsquares;x++){
			let box = document.createElement("div");
			let color = 255;
			box.classList.add("box");
			box.style.cssText=`width:960/${numsquares};height:960/${numsquares};`;
			box.addEventListener('mouseover',()=>{
				color-=50;
				box.style.cssText=`background-color:rgb(${color},${color},${color});`;
			});
			line.appendChild(box);
		}
		container.appendChild(line);
	}

}

grid();


