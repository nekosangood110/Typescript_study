"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
console.log('Hello TypeScript!');
var a = 1 + 2;
var b = a + 3; //b=6
var c = {
    apple: a,
    banana: b //6
    //型推論がnumber　型推論の参照先は値
};
var d = c.apple * 4; //3 * 4
console.log(d);
function squareOf(n) {
    return n * n;
}
squareOf(2);
squareOf('2'); //パラメータの型注釈はnumberなのでエラー
var g = {
    firstName: 'John',
    lastName: 'barroman'
};
var titile = 'Angular;';
var n = 9;
var isOpen = true;
// 配列型
var keyword = ['nya', 'AA', 0];
//タプル型
var payment = [0, 'AAA', 0];
var Ary = [0, 'A', 0];
var Arry = ['A', 0];
var Aryy = [0, true];
var Ary1 = [0, 'A', 0];
var Ary2 = ['A', 0];
var Ary3 = ['A', 0, 0];
var Ary4 = ['A', 0];
var Ary5 = [0, 'A', false];
var Ary6 = ['A', 0, 0];
var Ary7 = ['a', false];
// オブジェクト
var person = {
    name: 'Jack',
    age: 20
};
console.log(person.name);
var person1 = {
    name: 'Aki',
    age: 15
};
console.log(person1);
// オブジェクト ネスト
var person2 = {
    name: {
        first: 'Aki',
        last: 'Sasaki'
    },
    age: 25
};
console.log(person1.name);
var object = {
    name: 'Sato',
    id: 'test'
};
//uniong型(共用型)
var sample;
sample = 'A',
    sample = 0;
//emun型
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
})(KeyCode || (KeyCode = {}));
console.log(KeyCode.Tab);
//HTTPエラー時などに使う
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["OK"] = 200] = "OK";
    ErrorCode[ErrorCode["BAD_RESPOMSE"] = 400] = "BAD_RESPOMSE";
    ErrorCode[ErrorCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(ErrorCode || (ErrorCode = {}));
console.log(ErrorCode.OK);
//index自動付与してくれる
var Character;
(function (Character) {
    Character[Character["Bob"] = 0] = "Bob";
    Character[Character["Dad"] = 1] = "Dad";
    Character[Character["Mom"] = 2] = "Mom";
})(Character || (Character = {}));
console.log(Character.Bob);
//union 型
var sample;
sample = 'Yuki';
sample = 0;
//オブジェクトをenumに変える
var CoffeeSize = {
    SHORT: 'SHORT',
    TALL: 'TALL',
    GRANDE: 'GRANDE',
    VENTI: 'VENTI'
};
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2["S"] = "SHORT";
    CoffeeSize2["T"] = "TALL";
    CoffeeSize2["G"] = "GRANDE";
    CoffeeSize2["V"] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
var coffee2 = {
    hot: true,
    size: CoffeeSize.TALL
};
//any型
var something = 'foo';
something = 100;
something = { id: 1 };
//null, undefind型
var el = document.querySelector('#app');
var foo = undefined;
//let 
// let foo2 = 'foo2';
var date = new Date;
if (true) {
    var foo_1 = 'foo';
}
console.log(foo);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
//定数
var currentYear = 2020;
// currentYear = 2021;
var PI = Math.PI;
//テンプレート文字列
var template1 = "This is Template strings.";
var name2 = 'InuInu';
//改行が(の間の空白も)そのまま保持される
var template2 = "\nnyanya\nsan. " + name2 + "\n";
//スプレット演算子
var categories = ['post', 'news', 'info'];
// ↓...つけることでデータの中身を展開・複製できる
// ...categories
//複製
var copyCat = __spreadArrays(categories); // 'post','news','info'が展開されているイメージ
console.log(copyCat, copyCat === categories); //falseになる　別のオブジェクトとして参照している
//連結（前、後、途中に可能）
//前
var pushCat = __spreadArrays(['other'], categories);
console.log(pushCat);
//途中
var insertCat = __spreadArrays(['other'], categories, ['Q&A']);
console.log(insertCat);
//二つの配列をマージ
// オブジェクト(...copyCat)も配列と同じように展開することが可能
var mergeCat = __spreadArrays(categories, copyCat);
console.log(mergeCat);
//オブジェクト
//ダミーのデータ   
var post = {
    id: 1,
    content: 'dummy',
    created: '2020-02-07'
};
var copyObj = __assign({}, post);
console.log(copyObj);
//key名が同じだとvalueは上書きされる
var pushObj = __assign(__assign({}, post), { creaed: '2020-02-08' });
console.log(pushObj);
//配列の中ではオブジェクトは展開できない
var test = __spreadArrays(post);
// 逆は可能
//index値がキーとなり配列の中身が表示される
var isOk = __assign({}, categories);
var fruit = ['strawberry', 'banana', 'Orange'];
console.log(fruit);
var fruitbaskets = __spreadArrays(fruit, ['peach']);
var animals = {
    name: 'dog',
    age: 3
};
var fruit3 = __assign(__assign({}, fruit));
