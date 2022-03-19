function CurTime() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var hours = d.getHours();
  if(hours<10){hours="0"+hours}
  var minutes = d.getMinutes();
  if(minutes<10){minutes="0"+minutes}
  var seconds = d.getSeconds();
  if(seconds<10){seconds="0"+seconds}
  var timer = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time-banner").textContent = timer;
  if (hours >= 0 && hours < 12) {
    document.getElementById("banner").textContent = "Chào buổi sáng";
  } else if (hours >= 12 && hours < 17) {
    document.getElementById("banner").textContent = "Chào buổi chiều";
  }
  if (hours >= 17 && hours < 24)
    document.getElementById("banner").textContent = "Chào buổi tối";
}
setInterval(CurTime, 1000);

function blink_banner() {
  var element = document.getElementById("banner");
  element.classList.toggle("blink_banner");
}
setInterval(blink_banner, 1000);