class Rect {

	constructor(container, sec) {

		this.a = 0.1;
		this.sec = sec;
		this.flag = false;
		this.div = document.createElement("div");
		this.div.style.width = 754.6 + "px"; //span positionCover의 가로 픽셀값+보더3픽셀 넣기 개발자모드로 확인해서 확인해서
		this.div.style.height = 100 + "%";
		this.div.style.position = "absolute";
		this.div.style.left = 0;
		this.div.style.top = 0;
		this.div.style.zIndex = 1;
		this.junk = (parseFloat(this.div.style.width)) / (this.sec);
		//this.div.style.background = "black";
		this.div.style.backgroundColor = "rgba(0,0,0,0.7)";
		
		this.div.style.borderRadius=10+"px";
		container.appendChild(this.div);
	}

	move() {
		this.div.style.width = parseFloat(this.div.style.width) - this.junk + "px";
		if (parseFloat(this.div.style.width) < 62) { //3분기준 41 2분기준 62 ->10초부터 깜빡임 (가로픽셀/초)*10
			this.flag = !this.flag;
		}
		if (this.flag) {
			this.div.style.background = "transparent";
		}
		else {
		    this.div.style.backgroundColor = "rgba(0,0,0,0.7)";
		}
	}

}
