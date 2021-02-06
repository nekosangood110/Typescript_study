"use strict";
console.log('Hello TypeScript!');
var a = 1 + 2;
var b = a + 3; //b=6
var c = {
    apple: a,
    banana: b
    //型推論がnumber　型推論の参照先は値
};
var d = c.apple * 4;
console.log(d);
