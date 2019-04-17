var H = 12;
var M, time = 0;

function planetTemp(min, max) {
  if (H % 2 === 0 && M === 0) {
    var rand = Math.floor( Math.random() * max );
    var Temp = rand + min;
    return Temp;
  }
}

function setTime() {
  M++;
  time = H + ":" + M.toString().padStart(2,0);
  
  if (M == 60){
    M = 0;
    H++;
  }

  if (H == 25){
    H = 1;
  }

  return time;
}

setInterval( function() { setTime(); }, 1000 );
setInterval( function() { planetTemp(20,60); }, 1000 );