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

		//Ghost-form
		ctx.beginPath();
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

		// Marks for drawing the bezierCurve
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

		//Ghost-eyes
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.moveTo(91, 96);
		ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
		ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
		ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
		ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
		ctx.moveTo(103, 96);
		ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
		ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
		ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
		ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
		ctx.fill();

		// Marks for drawing the bezierCurve
		// ctx.fillStyle = "white";
		// ctx.beginPath();
		// ctx.moveTo(91, 96);
		// ctx.lineTo(88, 96);
		// ctx.lineTo(87, 99);
		// ctx.lineTo(87, 101);
		// ctx.lineTo(87, 103);
		// ctx.lineTo(88, 106);
		// ctx.lineTo(91, 106);
		// ctx.lineTo(94, 106);
		// ctx.lineTo(95, 103);
		// ctx.lineTo(95, 101);
		// ctx.lineTo(95, 99);
		// ctx.lineTo(94, 96);
		// ctx.lineTo(91, 96);
		// ctx.fill();

		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
		ctx.fill();
	}
}

draw();
