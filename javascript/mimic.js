




$(function() {
  $("#btn")
    .on("click", printHello)
    .on("click", sayHello);
});

function printHello() {
  console.log("こんにちは");
}
function sayHello() {
  alert("コンコンコン");
}