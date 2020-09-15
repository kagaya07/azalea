
function showIppan() {
  document.getElementById("ippan_area").className = "active";
  document.getElementById("hojin_area").className = "passive";
  console.log("一般用に変更");
}

function showHojin() {
  document.getElementById("ippan_area").className = "passive";
  document.getElementById("hojin_area").className = "active";
  console.log("法人用に変更");
}

(function nana() {
  alert("ハロハロ！");
})();

//food写真のやつ
function showImage() {
  var htmlstr = "";
  for(var i=1; i<=3; i++) {
    htmlstr += "<img src='img/food" + i + ".jpg'>";
  }
  document.getElementById("imageArea").innerHTML = htmlstr;
  //ボタンの無効化処理
  this.disabld = true;
}

//ヒーローの写真
function showhero(number) {
  var htmlimg = "<img src='img/ti" + number + ".png'>";
  document.getElementById("HeroArea").innerHTML = htmlimg;
}
window.onload = function() {
  document.getElementById("call").onclick = function() {
    showhero(1);
  };
  document.getElementById("btn").onclick = showImage;
};


