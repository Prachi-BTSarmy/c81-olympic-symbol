canvas = document.getElementById("OlympicSymbol");
ctx = canvas.getContext("2d")

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(190, 120, 380, 200,);
ctx.stroke();

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(280, 200 ,40 , 0, 2*Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(380, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(480, 200, 40, 0, 2*Math.PI);
ctx.stroke();  

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(330, 240, 40, 0, 2*Math.PI);
ctx.stroke();  

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(430, 240, 40, 0, 2*Math.PI);
ctx.stroke();  

