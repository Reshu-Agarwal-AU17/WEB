function phint() {
  var x = document.getElementById("hint");
  x.innerHTML = "Enter Minimum 10 Digit Password!";
}
function pcheck() {
  var hint = document.getElementById("hint");
  hint.style.display = "none";
  var loader = document.getElementById("loader");
  loader.style.opacity = "1";

  var uinput = document.getElementById("password").value;
  uinput.length >= 10
    ? (loader.style.opacity = "0")
    : (loader.style.opacity = "1");
  var check = document.getElementById("tick");
  uinput.length >= 10
    ? (check.style.opacity = "1")
    : (check.style.opacity = "0");
}
