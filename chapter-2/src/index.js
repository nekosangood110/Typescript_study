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
