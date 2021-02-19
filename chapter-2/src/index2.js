//  ---分割代入---
var categorise = ['post', 'news', 'info', 'other'];
//インデックス呼び出し
var post = categorise[0];
console.log(post); //post
var a = categorise[0], b = categorise[1];
console.log(a, b); //post,news
var c = categorise[0], d = categorise[2], f = categorise[3];
console.log(c, d, f); //post, info,other
//残った配列の中身(データを)は新しい配列になる ...の後は好きな配列名
var aa = categorise[0], bb = categorise[1], rest = categorise.slice(2);
console.log(aa, bb, rest); //...不要 post, news, [ 'info, 'other' ]
//[変数の初期値を設定する] 配列のデータの長さが特定できない場合
var _a = [3, 4, 5, 6], _b = _a[0], a1 = _b === void 0 ? 1 : _b, _c = _a[1], b1 = _c === void 0 ? 2 : _c;
console.log(a1, b1); // 3 4
//オブジェクトの場合 
var post2 = {
    id: 1,
    content: 'dummy',
    created: '2020-02-08'
};
//変数名のrenameができる valueは囲む必要なし
var id = post2.id, business = post2.content; //dummy→business
console.log(id, business); //post2.contentとするとアクセス出来た
//関数
//ここでは戻り値がないので:void(省略可能)
//戻り値は retrunと書く
//？　つけると実引数なしでもエラーにならない
function greet(name) {
    console.log("Hello world! " + name); //Hello world! undefind
}
greet();
//練習
function nyanko(id) {
    console.log("id\u306F " + id + "\u3067\u3059");
}
nyanko(2);
function sample(name) {
    if (name === void 0) { name = 'Natsuki'; }
    console.log("Hello " + name); //Hello Nao 初期値ではなく実引数が優先される
}
sample('Nao');
//可変長引数(引数の数が決まっていない関数)
//例　受け取った合計値を返す関数
//1,2,3,9で受け取ったものを配列としてまとめるので楽
//...values:number[] リスト型で中身がnumber型の変数values...でリストをバラバラにする
//それがnumber型の配列であることを宣言
//この状態でvaluesに対してreduceを当ててる
//reduce(callback)でreduceは隣り合う２つの配列要素に対し左から右にコールバック関数を適用していくメソッド
//２つめのreturnはコールバック関数の中身をたしている
function sum() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(function (prev, current) {
        return prev + current;
    });
}
console.log(sum(1, 2, 3, 9));
//アロー関数
//function書かない () = {}
var add = function (x1, x2) {
    if (x1 === void 0) { x1 = 1; }
    return x1 * x2;
};
console.log(add(2, 4)); //add(2,4);  console.log(add);ではない
var aDD = function (xx1, xx2) {
    if (xx1 === void 0) { xx1 = 2; }
    if (xx2 === void 0) { xx2 = 7; }
    return xx1 * xx2;
};
console.log(aDD());
//{}とreturn を省略できる　
//引数が一つかつ　型注釈つけない時()なしok、引数0は()省略出来ない
var hello = function (name) { return "Hello, " + name + "!"; };
console.log(hello('Nekosan'));
//DOM操作の場合などはアロー関数とfunctionでthisの扱いが違うので注意
//定義前の関数呼び出しが前後する時はfunction関数
