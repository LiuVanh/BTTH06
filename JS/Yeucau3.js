// function tg() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("seconds").src = `./images/0${t.charAt(6)}.gif`;
//   document.getElementById("miliseconds").src = `./images/0${t.charAt(7)}.gif`;
// }
// setInterval(tg, 1000);
// console.log(d);
// curDate sẽ lưu trữ thời gian hiện tại

function tg() {
  var d = new Date();
  var t = d.toLocaleTimeString();

  // Lấy giờ hiện tại
  var hours = d.getHours();

  // Lấy phút hiện tại
  var minutes = d.getMinutes();

  // Lấy giây hiện tại
  var seconds = d.getSeconds();
  //   document.getElementById("miliseconds").src =`/images/`
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

// document.getElementsByClassName("time-banner").innerHTML = "timer";
