gl = 123;
function check() {
  gl = 455;
}
check();
window.console && console.log("gl = " + gl);
