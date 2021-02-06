console.log('Hello TypeScript!')

let a = 1 + 2
let b = a + 3  //b=6
let c = {
    apple: a,
    banana: b
    //型推論がnumber　型推論の参照先は値
}
let d = c.apple * 4

console.log(d);