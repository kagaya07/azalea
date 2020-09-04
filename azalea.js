
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











