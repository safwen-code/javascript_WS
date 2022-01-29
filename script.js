console.dir(document.getElementById("message"));
st = document.getElementById("message").innerHTML;
function shunk(st) {
  alert("hi there " + st);
  document.getElementById("message").innerHTML = "josef";
}

shunk(st);
