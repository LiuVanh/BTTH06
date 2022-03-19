function tg() {
  var d = new Date();
  var t = d.toLocaleTimeString();

  var hours = d.getHours();

  var minutes = d.getMinutes();

  var seconds = d.getSeconds();
  var timer = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time-banner").textContent = timer;
  if (hours >= 0 && hours < 12) {
    document.getElementById("time-banner").textContent = "Chào buổi sáng";
  } else if (hours >= 12 && hours < 17) {
    document.getElementById("time-banner").textContent = "Chào buổi chiều";
  }
  if (hours >= 17 && hours < 24)
    document.getElementById("banner").textContent = "Chào buổi tối";
}
setInterval(mytimer, 1000);

