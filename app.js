/* Created by Tivotal */

window.addEventListener("load", () => {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrDeg = hr * 30 + min / 2;
  let minDeg = min * 6 + sec / 10;
  let secDeg = sec * 6;

  let clock = document.querySelector(".clock");
  clock.style.setProperty("--h", hrDeg + "deg");
  clock.style.setProperty("--m", minDeg + "deg");
  clock.style.setProperty("--s", secDeg + "deg");
});
