console.log('Hello TypeScript!')

let a = 1 + 2
let b = a + 3  //b=6
let c = {
    apple: a, //3
    banana: b //6
    //型推論がnumber　型推論の参照先は値
}
let d = c.apple * 4  //3 * 4

console.log(d);


function squareOf(n: number) {
    return n * n
}

squareOf(2);
squareOf('2'); //パラメータの型注釈はnumberなのでエラー


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

// 配列型
var keyword: (string|number) [] = ['nya','AA', 0];

//タプル型
var payment: [number, string, number] = [0,'AAA',0];





var Ary : [number, string, number] = [0, 'A', 0];
var Arry : (string| number) [] = ['A', 0];




var Aryy : (number| boolean) [] = [0,true];
var Ary1 : [number, string, number] = [0, 'A', 0];


const Ary2 : (String|number)[] = ['A',0];
const Ary3 : [string, number, number] = ['A',0, 0];


const Ary4 : (string| number) [] = ['A',0];
const Ary5 : [number, string, boolean] = [0, 'A', false];



const Ary6 : (String|number| number) [] = ['A',0,0];
const Ary7 : [string,boolean] = ['a',false];


// オブジェクト
var person :{
    name: string,
    age: number
}= {
    name: 'Jack',
    age: 20
}

console.log(person.name);


var person1: {
    name: string,
    age: number
} = {
    name: 'Aki',
    age: 15
}
console.log(person1)

// オブジェクト ネスト
var person2 = {
    name : { 
        first: 'Aki',
        last: 'Sasaki'
    },
    age: 25
};
console.log(person1.name);



var object: {
    [key: string]: string
} = {
    name: 'Sato',
    id: 'test'
};


//uniong型(共用型)
var sample: string| number;

sample = 'A',
sample = 0

//emun型
enum KeyCode {
    Backspace = 8,
    Tab = 9,
    Enter = 13,
}

console.log(KeyCode.Tab);

//HTTPエラー時などに使う

enum ErrorCode {
    OK = 200,
    BAD_RESPOMSE =400,
    UNAUTHORIZED = 401,
}
console.log(ErrorCode.OK);

//index自動付与してくれる

enum Character {
    Bob,
    Dad,
    Mom,
}
console.log(Character.Bob);
