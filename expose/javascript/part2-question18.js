function timeSec() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
setInterval(timeSec, 1000);
