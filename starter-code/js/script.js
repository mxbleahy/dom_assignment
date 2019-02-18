setInterval(runClock, 1000);
setInterval(runClockDigtal, 1000);

$(document).ready(function() {
  $(".Digital").click(function() {
    $(".clockFrame").hide();
  });
  $(".Analog").click(function() {
    $(".clockFrame").show();
  });
});

function runClock() {
  let clock = new Date();
  let sec = clock.getSeconds();
  let min = clock.getMinutes();
  let hr = clock.getHours();
  let secDeg = sec * 6;
  let minDeg = min * 6 + 0.1 * sec;
  let hrDeg = hr * 30 + 0.5 * min;
  secInd.style.transform = "rotate(" + secDeg + "deg)";
  minInd.style.transform = "rotate(" + minDeg + "deg)";
  hrInd.style.transform = "rotate(" + hrDeg + "deg)";
  $("#secInd").fadeOut(50);
  $("#secInd").fadeIn(50);
}

function runClockDigtal() {
  let clock = new Date();
  let sec = clock.getSeconds();
  let min = clock.getMinutes();
  let hr = clock.getHours();
  if (hr < 12) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let realTime = hr + ":" + min + ":" + sec;
  document.getElementById("DgClock").innerHTML = realTime;
}
