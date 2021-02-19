import { isConstructorDeclaration } from "typescript"

// console.log('Hello TypeScript!')

let a = 1 + 2
let b = a + 3  //b=6
let c = {
    apple: a, //3
    banana: b //6
    //型推論がnumber　型推論の参照先は値
}
let d = c.apple * 4  //3 * 4

// console.log(d);



function squareOf(n: number) {
    return n * n
}

squareOf(2);
// squareOf('2'); //パラメータの型注釈はnumberなのでエラー


function squareOf2(n: number) {
    return n * n
}

squareOf2(3);



let g: {
    firstName: string,
    lastName: string
} = {
    firstName: 'John',
    lastName:'barroman'
}


var titile: string = 'Angular;'
var n: number = 9;

var isOpen: boolean = true;
 
// var title2: string = 'nyannkosan';
// var numbersan: number = 22;
// var isOpeeeen: boolean = true;

// 配列型
var keyword: (string|number) [] = ['nya','AA', 0];

//タプル型
var payment: [number, string, number] = [0,'AAA',0];

var keyboard: (number|number) [] = [2, 2, 3];
var keyboardsan: (string|string)[] = ['aa','bb', 'cc'];
var person: [string, number, string]= ['0',0,'0'];




var Ary : [number, string, number] = [0, 'A', 0];
var Arry : (string| number) [] = ['A', 0];




var Aryy : (number| boolean) [] = [0,true];
var Ary1 : [number, string, number] = [0, 'A', 0];


const Ary2 : (String|number)[] = ['A',0];
const Ary3 : [string, number, number] = ['A',0, 0];


const Ary4 : (string| number) [] = ['A',0];
const Ary5 : [number, string, boolean] = [0, 'A', false];

const truefalsesan : [boolean,boolean] = [true, true]
const Arryy : (number|string)[] = [2,'a'];


// オブジェクト
var personsan1 :{
    name: string,
    age: number
} = {
    name: 'Jack',
    age: 20
}

// console.log(personsan1.name);


var personsan2 :{
    name: string,
    gender: string
} = {
    name: 'a',
    gender: 'male'
}

// console.log(personsan2.name);

var person1: {
    name: string,
    age: number
} = {
    name: 'Aki',
    age: 15
}
// console.log(person1)

// オブジェクト ネスト
var person2 = {
    name : { 
        first: 'Aki',
        last: 'Sasaki'
    },
    age: 25
};
// console.log(person1.name);

//ネスト2

var person3 = {
    name: {
        firstName1: 'Imai',
        lastName: 'Natsuki'
    },
    age: 25
};

// console.log(person3.name.lastName);

var object: {
    [key: string]: string
} = {
    name: 'Sato',
    id: 'test'
};


//uniong型(共用型)
//定数の場合はJS同様不可
var sample: string| number;

sample = 'A',
sample = 0


var lunch: string |number;

lunch = 'bread',
lunch = 1000




//emun型
enum KeyCode {
    Backspace = 8,
    Tab = 9,
    Enter = 13,
}

// console.log(KeyCode.Tab);


enum KeyId {
    shift = 'up',
    ctrl = 'ctrl',
    f2 = 'screenlight',
    nu = 1
}
// console.log(KeyId.nu);

//HTTPエラー時などに使う

enum ErrorCode {
    OK = 200,
    BAD_RESPOMSE =400,
    UNAUTHORIZED = 401,
}
// console.log(ErrorCode.OK);

//index自動付与してくれる

enum Character {
    Bob,
    Dad,
    Mom,
}
// console.log(Character.Bob);

//union 型
var sample: string | number;
sample = 'Yuki';
sample = 0;

//オブジェクトをenumに変える

const CoffeeSize = {
    S: 'SHORT',
    T: 'TALL',
    G: 'GRANDE',
    V: 'VENTI'

}
const coffee = {
    hot: true,
    size: CoffeeSize.S
}
// console.log(CoffeeSize.S);
//enum場合
enum CoffeeSize2 {
    S= 'SHORT',
    T ='TALL',
    G = 'GRANDE',
    V = 'VENTI'
}

const coffee2 = {
    hot: true,
    size: CoffeeSize.T
}
// console.log(CoffeeSize.T)


//any型
var something: any = 'foo';
something = 100;
something = { id: 1};


//null, undefind型
// var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;


//let 
// let foo2 = 'foo2';

let date = new Date;

if (true) {
    let foo = 'foo';
}
// console.log (foo);

for (var i =0; i< 5;  i++) {
    console.log(i);
}
// console.log(i);




//定数
const currentYear: number = 2020;
// currentYear = 2021;
const PI = Math.PI;


//テンプレート文字列
let template1 = `This is Template strings.`;
let name2 = 'InuInu';
//改行が(の間の空白も)そのまま保持される
let template2 = `
nyanya
san. ${name2}
`;


//スプレット演算子

let categories = ['post', 'news', 'info'];
// ↓...つけることでデータの中身を展開・複製できる
// ...categories

// let shape = ['square','circle', 'triangle'];


//複製
let copyCat = [...categories];// 'post','news','info'が展開されているイメージ
console.log(copyCat, copyCat === categories);//falseになる　別のオブジェクトとして参照している

//連結（前、後、途中に可能）
//前
let pushCat = ['other', ...categories];
// console.log(pushCat);

//途中
let insertCat = ['other',...categories, 'Q&A'];
// console.log(insertCat);

//二つの配列をマージ
// オブジェクト(...copyCat)も配列と同じように展開することが可能
let mergeCat = [...categories, ...copyCat];
// console.log(mergeCat);


//オブジェクト
//ダミーのデータ   

let post = {
    id: 1,
    content: 'dummy',
    created: '2020-02-07'
};

let copyObj = { ...post };
console.log(copyObj);


//key名が同じだとvalueは上書きされる
let pushObj = {...post, creaed: '2020-02-08'};
console.log(pushObj);

//配列の中ではオブジェクトは展開できない
// let test = [...post];

// 逆は可能
//index値がキーとなり配列の中身が表示される
let isOk = {...categories};


const fruit = ['strawberry','banana', 'Orange'];
console.log(fruit)


const fruitbaskets= [...fruit, 'peach'];

const animals =  {
    name: 'dog',
    age: 3
}

const fruit3 = {...fruit};





