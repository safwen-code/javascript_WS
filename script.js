console.dir(document.getElementById("message"));
st = document.getElementById("message").innerHTML;
function shunk(st) {
  alert("hi there " + st);
  document.getElementById("message").innerHTML = "josef";
}

counter = 1;
list = document.getElementById("the-list");
console.log(list);
function add() {
  var x = document.createElement("li");
  x.className = "list-item";
  x.innerHTML = "the counter is " + counter;
  list.appendChild(x);
  counter++;
}

add();
shunk(st);
