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
		ctx.arc(40, 40, 10, (Math.PI / 180) * 20, -(Math.PI / 180) * 20, false);
		ctx.lineTo(35, 40);
		ctx.fill();

		//Points
		for (var i = 0; i < 8; i++) {
			ctx.fillRect(50 + i * 15, 39, 4, 4);
		}

		for (i = 0; i < 6; i++) {
			ctx.fillRect(115, 50 + i * 15, 4, 4);
		}

		for (i = 0; i < 8; i++) {
			ctx.fillRect(55 + i * 15, 95, 4, 4);
		}

		//Ghost
		// ctx.beginPath();
		ctx.moveTo(83, 116);
		ctx.lineTo(83, 102);
		ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
		ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
		ctx.lineTo(111, 116);
		ctx.lineTo(106, 111);
		ctx.lineTo(101, 116);
		ctx.lineTo(97, 111);
		ctx.lineTo(92, 116);
		ctx.lineTo(87, 111);
		ctx.lineTo(83, 116);
		ctx.fill();

		// Marks for drawing the curve
		// ctx.beginPath();
		// ctx.moveTo(83, 116);
		// ctx.lineTo(83, 102);
		// ctx.lineTo(83, 94);
		// ctx.lineTo(89, 88);
		// ctx.lineTo(97, 88);
		// ctx.lineTo(105, 88);
		// ctx.lineTo(111, 94);
		// ctx.lineTo(111, 102);
		// ctx.lineTo(111, 116);
		// ctx.lineTo(106, 111);
		// ctx.lineTo(101, 116);
		// ctx.lineTo(97, 111);
		// ctx.lineTo(92, 116);
		// ctx.lineTo(87, 111);
		// ctx.lineTo(83, 116);
		// ctx.stroke();
	}
}

draw();
