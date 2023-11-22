
let canvas, ctx;
window.onload = getCoordinateSystem();
//система координат
function getCoordinateSystem() {
  canvas = document.getElementById("drawingCanvas");
  ctx = canvas.getContext("2d");

  ctx.beginPath(); //контекст 
  ctx.lineWidth = 1;
  ctx.lineCap = "round";


  ctx.moveTo(10, 400); 
  ctx.lineTo(1280, 400);
  ctx.moveTo(1280, 400);
  ctx.lineTo(1270, 395);
  ctx.moveTo(1280, 400);
  ctx.lineTo(1270, 405);

  ctx.moveTo(400, 20);
  ctx.lineTo(400, 790);
  ctx.moveTo(400, 20);
  ctx.lineTo(405, 25);
  ctx.moveTo(395, 25);
  ctx.lineTo(400, 20);

  ctx.stroke();

  ctx.font = "20px";
  ctx.strokeText("Y", 410, 20);
  ctx.strokeText("X", 1280, 420);

  ctx.strokeText("2", 380, 205);
  ctx.strokeText("1", 410, 320);
  ctx.strokeText("0", 380, 420);
  ctx.strokeText("-1", 375, 505);
  ctx.strokeText("-2", 375, 605);

  ctx.strokeText("1", 495, 420);
  ctx.strokeText("2", 595, 420);
  ctx.strokeText("3", 695, 420);
  ctx.strokeText("4", 785, 420);
  ctx.strokeText("5", 905, 420);

};
//3
function reset() {
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  getCoordinateSystem();
  context.beginPath()
}
//всі фігури
function getAllFigures() {
  canvas = document.getElementById("drawingCanvas");
  ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.fillStyle = "blue";

  const circle1 = new Path2D();
  const circle2 = new Path2D();
  circle1.arc(300, 300, 100, 0, 2 * Math.PI);
  circle2.arc(800, 300, 100, 0, 2 * Math.PI);
  ctx.fill(circle1); //заповнюю фігуру
  ctx.stroke(circle1, "black");
  ctx.fill(circle2);
  ctx.stroke(circle2, "black");


  ctx.fillRect(400, 200, 100, 100);
  ctx.strokeRect(400, 200, 100, 100);

  ctx.fillRect(500, 300, 100, 100);
  ctx.strokeRect(500, 300, 100, 100);

  ctx.fillRect(400, 500, 100, 100);
  ctx.strokeRect(400, 500, 100, 100);

  ctx.fillRect(800, 400, 100, 100);
  ctx.strokeRect(800, 400, 100, 100);

  ctx.fillRect(900, 500, 100, 100);
  ctx.strokeRect(900, 500, 100, 100);

 
  // var ctx = canvas.getContext('2d');
  // ctx.fillStyle = '#f00';
  // ctx.beginPath();
  // ctx.moveTo(0, 0);
  // ctx.lineTo(100,50);
  // ctx.lineTo(50, 100);
  // ctx.lineTo(0, 90);
  // ctx.closePath();
  // ctx.fill();

  const pointsPol1 = [
    { x: 500, y: 200 },
    { x: 700, y: 200 },
    { x: 700, y: 300 },
  ];

  const pointsPol2 = [
    { x: 600, y: 500 },
    { x: 600, y: 600 },
    { x: 800, y: 600 },
  ];

  const pointsPol3 = [
    { x: 800, y: 500 },
    { x: 800, y: 600 },
    { x: 900, y: 600 },
  ];

  fillPolygon(ctx, pointsPol1);
  fillPolygon(ctx, pointsPol2);
  fillPolygon(ctx, pointsPol3);

};

function fillPolygon(context, points) {
  if (points.length > 0) {
    let point = points[0];
    context.beginPath();
    context.moveTo(point.x, point.y);   // point 1

    for (let i = 1; i < points.length; ++i) {
      point = points[i];
      context.lineTo(point.x, point.y);
    }

    context.closePath();      // go back to point 1
    context.fill();
    ctx.stroke();
  }

}

function translateSquares() {
  const canvas = document.getElementById("drawingCanvas");
  const ctx = canvas.getContext("2d");
  fillSquare(ctx, 100, 100);
  fillSquare(ctx, 300, 100);
  fillSquare(ctx, 100, 100);
  fillSquare(ctx, -500, 0);

  // Reset current transformation matrix to the identity matrix
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // Unmoved square
  ctx.fillStyle = "blue";
  ctx.fillRect(400, 200, 100, 100);
  ctx.strokeRect(400, 200, 100, 100);
};

function fillSquare(ctx, a, b) {
  ctx.translate(a, b);
  ctx.fillStyle = "red";
  ctx.fillRect(400, 200, 100, 100);
  ctx.strokeRect(400, 200, 100, 100);
}

function moveCircle(param) {
  let canvas = document.getElementById("drawingCanvas");
  let ctx = canvas.getContext("2d");

  let mouse = { x: 300, y: 300 };
  getCoordinateSystem();

  let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  };

  let drawCircle = function () {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Blue";
    circle(mouse.x, mouse.y, 100, true);
    circle(mouse.x, mouse.y, 100, false);
  };
  drawCircle();

  $("#drawingCanvas").click(function (event) {
    // $("#drawingCanvas").mousemove(function (event) {
    mouse.x = event.clientX - canvas.getBoundingClientRect().x;
    mouse.y = event.clientY - canvas.getBoundingClientRect().y;
  });

  setInterval(function () {
    // ctx.clearRect(0, 0, 1300, 800);
    drawCircle();
    ctx.strokeRect(0, 0, 1300, 800);
  }, 5);

}

function runRightCircle() {
  $("#leftCircle").animate(
    {
      cx: "800",
    },
    {
      step: function (v1) {
        $(this).attr("cx", v1);
      },
    }
  );
}

function runLeftCircle() {
  $("#leftCircle").animate(
    {
      cx: "300",
    },
    {
      step: function (v1) {
        $(this).attr("cx", v1);
      },
    }
  );
}
