function main() {
  let a = document.wap.name.value;
  let b = document.wap.mobile.value;
  let c = document.wap.email.value;
  let d = document.wap.spouse.value;
  let e = document.wap.address.value;
  let f = document.wap.al_mobile.value;
  document.getElementById("header_left").innerHTML = a;
  document.getElementById("header_right_one").innerHTML = b;
  document.getElementById("header_right_two").innerHTML = f;
  document.getElementById("spouse").innerHTML = c;
  document.getElementById("email").innerHTML = d;
  document.getElementById("address").innerHTML = e;

  return false;
}

function formating() {
  let a = document.getElementById("spouse");
  let b = document.getElementById("email");
  let c = document.getElementById("address");
  a.style.fontWeight = "bold";
  b.style.fontWeight = "bold";
  c.style.fontWeight = "bold";
}

function font_style() {
  let a = document.getElementById("spouse");
  let b = document.getElementById("email");
  let c = document.getElementById("address");
  a.style.fontStyle = "italic";
  b.style.fontStyle = "italic";
  c.style.fontStyle = "italic";
}
