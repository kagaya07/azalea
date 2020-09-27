
$(function() {
  $("#btn")
    .on("click", sayHello);
});

function sayHello() {
  alert("コンコンコン");
  $("#btn").off("click", sayHello);
}

$(function() {
  $("#rem").on("click", addHello);
});
function addHello() {
  alert("こんにちは");
  $("#rem").off("click", addHello);
  $(this).attr("disabled", "disabled")
}

$(function() {
  $("#msg").addClass("highlight");
})

$(function() {
  $("#mac").removeClass("large");
})

$(function() {
  $("input[name='target']").on("change", function() {
    $("#style_2, #style_3").toggleClass("active, passive");
  });
});

$(function() {
  $("#cake").append("<li>ロールケーキ</li>").prepend("<li>オペラ</li>");
});

$(function() {
  $("#shi").after("<p>雲隠れにし夜半の月かな</p>").before("<p>巡りあひて</p>")
});

/*
$(function() {
  $("#cake").empty();
});
*/

$(function() {
  $("#tap").on("click", function() {
    $("#img").replaceWith("<img src='img/apple.jpeg'></img>");
  });
});

$(function() {
  setSubCategory();
  $("#main").on("change", setSubCategory);
});
function setSubCategory() {
  var subList = [
      ["ヨークシャテリア", "ゴールデンレトリバー", "柴犬", "ダックスフンド"],
      ["アメリカンショートヘア","マチカン","チンチラ"]
  ];

  var i = $("#main > option:selected").val();

  var sub = $("#sub");
  sub.empty();

  for(var j=0; j < subList[i].length; j++) {
    sub.append("<option value='" + j + "'>" + subList[i][j] + "</option>");
  }
}










