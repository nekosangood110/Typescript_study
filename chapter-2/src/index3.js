//Class
//constructor インスタンス化する際のクラスに引数を渡す　コンストラクタの仮引数で受け取れる
var Animal = /** @class */ (function () {
    function Animal(isCry) {
        this.isCry = isCry;
        this.age = 10;
        //   this.isCry = isCry;　Tsはアクセス修飾子(public)があるので
        //プロパティに初期化は必要なし=自動的に取り込むことができることができる
    }
    Animal.prototype.cry = function () {
        if (this.isCry) {
            alert("age: " + this.age);
        }
    };
    Object.defineProperty(Animal.prototype, "legs", {
        //アクセサメソッド(getter, setter)
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
//インスタンス化
//new Animal() カッコ内はconstructorの引数にわたる
var dog = new Animal(true);
dog.cry();
//アクセサメソッドはプロパティアクセスする形で実行できる
console.log(dog.legs); //4
