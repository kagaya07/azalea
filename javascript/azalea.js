
//コメントのお試し
/*コメント改行版
　こんな感じかな*/
var a = 10 ;
a *= 3 ;
a++  ;
console.log(a);

//bという変数に配列で値を入れる
var b = [ 2, 4, 6, 8, 10];
//コンソールにbの配列に値がいくつ入っているかを表示
console.log(b.length);

//cの変数に配列を入れる
var c = [[ 20, 40, 60],[ 80, 100, 120],[ 140, 160, 180, 200]];
//大きな配列の2番目、その中の配列の3番目の値を表示
console.log(c [2] [3]);

//配列にキー名をつける
var first_name = { "ベルナデッタ":1 , "イングリット":2 , "フェリクス":3 };
//キー名とついとなる値を表示
console.log(first_name.ベルナデッタ);

//変数に値を入れる
var x = 10 , y = 20 ;
//xに20をプラス
x += 20;
//xの値を表示
console.log(x);

//personaという関数の作成
function persona() {
  alert("こんにちは");
}

//呼び出し
persona();

// 円の面積の計算
function red(radius) {
  return radius * radius * 3.14;
}
// 上の計算式にの引数に5を代入し、callに戻す。
function call() {
  var area = red(5);
  return area;
}

// コンソールにcallを呼び出す(計算結果)
console.log(call());


function func(i) {
  console.log(i);
}

func("ABC");

var str = "10";
console.log(str + 10);
//strの値を整数になおす
var num = parseInt(str);
console.log(num + 10);

var name = "yui";
var topic = parseInt(name);
if(isNaN(topic)) {
  console.log("計算できませんでした。")
}else {
  console.log(topic + 50);
}

//こんにちはをエンコードに変換して表示
var encode = encodeURIComponent("こんにちは");
console.log(encode);
//encodeの値をデコードして表示
var decode = decodeURIComponent(encode);
console.log(decode);

//ローカル変数、グローバル変数の確認
function ff() {
  fa = "ハロハロ";
  console.log(fa);
}

ff();
console.log(fa);

//関数の定義、呼び出しを同時に行う。
(function(name) {
  console.log(name + "さん、こんにちは");
})("リチェ・アブリル");

//変数に入った値をキーで採りだす。(関数を値として変数に入れるireru)
var apple = {
  name: "リンゴ",
  greet: function(age, from) {
    console.log( this.name + "です。" );
    console.log( "生後" + age + "です。" );
    console.log( "出身地は" + from + "です。" );
  }
};

apple.greet();

var practice = {
  name: "さくらんぼ"
};

apple.greet.call(practice,"16ヶ月","青森");

//dateオブジェクト、メソッドを使い今日の日にちを表示
var today = new Date();
console.log("今日は" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日です。" );

//小数点の表示
console.log(Math.ceil(1.99));　//切り上げ
console.log(Math.round(1.22)); //四捨五入
console.log(Math.floor(1.99)); //切り捨て

//pushを使ったを使った配列の値の追加
var n = [ 10, 20, 30, 40 ];
n.push( 50, 60 );
console.log(n[4]);

var date = "2013年3月31日";
// (/[0-9]+/g)のパターンに一致するものを探す。
var result = date.match(/[0-9]+/g);
//一致したものを出力
console.log(result);

var message = "This is a pen";
//isに一致する部分全てをatに変換する。
var resut = message.replace(/is/g, "at");
console.log(resut);

// htmlのボタンにcheck();という関数を紐付けている。(e)にはhtmlの方でthisが引数として渡されてくる(thisはhtmlの要素自身を表すのでボタン〜が入る)
function check(e) {
  console.log(e.value + 'がクリックされました。')
}

//confirmメソッド
function checks() {
  var result = confirm("確認用のメッセージを表示します。");
  if (result) {
    console.log("OK")
  } else {
    console.log("キャンセル");
  }
}

//タイマー機能
var count = 0;
var timer = setInterval(output, 1000);
function output() {
  count++;
  console.log (count + "秒経過");
  if(count >= 10) {
    clearInterval(timer);
  }
}

//入力
function inputcheck() {
  if(document.frml.lastname.value == "") {
    alert("姓を入力してください");
  } else if(document.frml.firstname.value == "") {
    alert("名を入力してください");
  } else if(!document.frml.gender[0].checked && !document.frml.gender[1].checked) {
    alert("性別を入力してください");
  } else{
    document.frml.submit();
  }
}

//idでの要素の取得
function setValue() {
  var elm = document.getElementById("txl");
  elm.value = "Hello!";
}

//name属性での要素の取得html側のname属性を全て探す。
function setValues() {
  var elms =document.getElementsByName("tx");
  //nameがtxのものが来るたび１ずつindexの値をたし付与する。
  for (var i = 0; i < elms.length; i++) {
    elms[i].value = "Hello";
  }
}







