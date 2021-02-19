//クラス継承
//constructer　メソッドなどをそのまま引き継ぐ
//子クラスでメソッド内容を書き換えても親に影響はなし
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//フォルダ階層が一緒なのでAnimal使えない
//クラス名は重複させない
var Animalsan = /** @class */ (function () {
    function Animalsan(isCry) {
        this.isCry = isCry;
        this.age = 10;
        this.age = 2; //プロパティ
    }
    Animalsan.prototype.cry = function () {
        if (this.isCry) {
            alert("age: " + this.age);
        }
    };
    return Animalsan;
}());
//クラス宣言の後にextends
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(isCry) {
        var _this = _super.call(this, isCry) || this;
        _this.isCry = isCry;
        //super();がないとAnimalsanのage =10のまま渡る
        _this.age = 100; //　←ここで　初期化もできる
        return _this;
    }
    Cat.prototype.cry = function () {
        if (this.isCry) {
            alert('meow!!!!');
        }
        console.log('meow is cry!!!!!!!');
        _super.prototype.cry.call(this); //親ClassのCry()を使える
    };
    return Cat;
}(Animalsan));
//Animalクラスはインスタンス化せず継承（元ネタに）してるだけ
var cat = new Cat(true); //Cat class内では親クラスのconstructerもtrue
cat.cry();
//変数.メソッドなのでCatではない
//変数名dogはindex3で使用しているので使えない
