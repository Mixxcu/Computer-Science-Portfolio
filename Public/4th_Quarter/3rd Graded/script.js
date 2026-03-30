function plotPoint() {
    var x0 = 0;
    var y0 = 0;
    var x = 7;
    var y = 8;
    var in1 = document.getElementById("in1");
    var out1 = document.getElementById("out1");
    console.log(x0, y0, x, y) // checks the arguments passed to this function
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.top = (200 - (y - y0) - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    document.getElementById('coordinatePlane').appendChild(point);

    if (x > x0 && y > y0){
      out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }
}
plotPoint();

function plotPoint1() {
    var x0 = 0;
    var y0 = 0;
    var x1 = -10;
    var y1 = -2;
    var in2 = document.getElementById("in1");
    var out2 = document.getElementById("out1");
    console.log(x0, y0, x1, y1) // checks the arguments passed to this function
    in2.innerHTML = x0 + " " + y0 + " " + x1 + " " + y1;
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    point.style.left = (x1 - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.top = (200 - (y1 - y0) - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    document.getElementById('coordinatePlane').appendChild(point);

    if (x1 > x0 && y1 > y0){
      out2.innerHTML = "NE"
    }
    else if (x1 < x0 && y1 < y0){
      out2.innerHTML = "SO"
    }
    else if (x1 > x0 && y1 < y0){
      out2.innerHTML = "SE"
    }
    else if (x1 < x0 && y1 > y0){
      out2.innerHTML = "NO"
    }
    else{
      out2.innerHTML = "divisa"
    }
}
plotPoint1();