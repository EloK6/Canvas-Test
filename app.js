function pencil() {
	var canvas = document.getElementById("happy");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
		ctx.moveTo(110, 75);
		ctx.arc(75, 75, 35, 0, Math.PI, false);
		ctx.moveTo(60, 60);
		ctx.arc(55, 60, 5, 0, Math.PI * 2, true);
		ctx.moveTo(95, 60);
		ctx.arc(90, 60, 5, 0, Math.PI * 2, true);
		ctx.stroke();
	}
}

pencil();

function draw() {
	var canvas = document.getElementById("game");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		//PAC
		ctx.beginPath();
		ctx.arc(40, 40, 10, Math.PI / 10, -Math.PI / 10, false);
		ctx.lineTo(35, 40);
		ctx.fill();

		//
	}
}

draw();
