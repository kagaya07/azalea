
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

$(function() {
  $("#msg").css("font-size", "40px");
});

$(function() {
  $("#parent p").css("color", "#00bfff");
});

$(function() {
  $("p ~ a").css("font-size", "30px");
});

$(function() {
  var elm = $("#fruits > li");
  elm.css("background-color", "pink")
  .filter(":even").css("color", "white");
});

$(function() {
  $("input[name='tel']").css("background-color", "#e0ffff");
});

$(function() {
  console.log($("div").filter(".item").html());
  console.log($("div").find(".item").html());
});

$(function() {
  $("#msg1").html($("#msg2").html());
});

$(function() {
  $("#msg3").val($("#msg4").val());
});

$(function() {
  $("img").attr("src", "img/IMG_9731.jpeg");
});

$(function() {
  $("input[value='orange']").removeAttr("checked");
});

$(function() {
  $("#btn").on("click", sayHello);
});
function sayHello() {
  alert("こんにちはー");
}

$(function() {
  $("#btnn").on("click", { name: "とるて" }, sayHello);
});
function sayHello(event) {
  alert(event.data.name + "さん、こんにちは！");
}












