//  ---分割代入---

let categorise = ['post','news','info','other'];

//インデックス呼び出し
let post = categorise[0];//post

let [a,b] = categorise;
console.log(a,b); //post,news

let [c,,e,f] = categorise;
console.log(c,e,f); //post, info, other



//残った配列の中身(データを)を新しい配列にまとめる
let [aa,bb, ...rest] = categorise;
console.log(aa,bb, rest)  //...不要 post, news, ['info, 'other']




//変数の初期値を設定する 配列のデータの長さが特定できない場合
let  [a1 =1, b1 =2] = [3];
console.log(a1, b1);// 3 2


//オブジェクトの場合 
let post2 = {
    id: 1,
    content: 'dummy',
    created: '2020-02-08',
};
//変数名のrenameができる valueは囲む必要なし

const {id, content: business } = post2; //dummy→business
console.log(id,　business); //contentはすでに参照できなくなっている

//関数


//ここでは戻り値がないので:void(省略可能)
//戻り値は retrunと書く
//？　つけると実引数なしでもエラーにならない
function greet(name?: string): void {
    console.log(`Hello world! ${name}`);//Hello world! undefind
}
greet();


function sample(name: string = 'Natsuki'): void {
    console.log(`Hello ${name}`); //Hello Nao 初期値ではなく実引数が優先される
}
sample('Nao');

//可変長引数(引数の数が決まっていない関数)

//例　受け取った合計値を返す関数
//1,2,3,9で受け取ったものを配列としてまとめるので楽


//...values:number[] リスト型で中身がnumber型の変数values...でリストをバラバラにすろ
//それがnumber型であることを宣言
//この状態でvaluesに対してreduceを当ててる
//reduce(callback)でreduceは隣り合う２つの配列要素に対し左から右にコールバック関数を適用していくメソッド
//２つめのreturnはコールバック関数の中身をたしている
function sum(...values: number[]): number {
    return values.reduce(function(prev, current) {
        return prev + current;
    });
}
console.log(sum(1, 2, 3, 9));


//アロー関数

//function書かない
// () = {}

let add = (x1: number =1, x2: number ): number => {
    return x1 * x2
};

console.log(add(2,4));
//add(2,4);  console.log(add);ではない


//{}とreturn を省略できる　
//引数が一つかつ　型注釈つけない時()なしok、引数0は()省略出来ない
let hello = (name: string) =>  `Hello, ${name}!`;
console.log(hello('Nekosan'));


//DOM操作の場合などはアロー関数とfunctionでthisの扱いが違うので注意
//定義前の関数呼び出しが前後する時はfunction関数

