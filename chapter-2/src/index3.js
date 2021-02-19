//Class
//constructor newでインスタンス化する際　()内をコンストラクタが受け取れる
//特別なメソッド
var Animal = /** @class */ (function () {
    //ここのプライベートのはアクセス出来ないのでアクセサメソッドを使用
    function Animal(isCry) {
        this.isCry = isCry;
        this.age = 10;
        this._legs = 0;
        //   this.isCry = isCry;　Tsはアクセス修飾子(public)があると
        //constructorで渡ってくるものに初期化(this)は必要なし
        //ここでいうthisはAnimal Class //ageはthis.age
    }
    Animal.prototype.cry = function () {
        if (this.isCry) {
            alert("age: " + this.age);
        }
    };
    Object.defineProperty(Animal.prototype, "legs", {
        //アクセサメソッド(getter, setter) class内に書く　privateにアクセスするもの
        //getter読み取り専用　setterは書き込み専用
        //privateなのにgetter書くだけでアクセス出来たら意味がないのでif文で比較してあげる
        get: function () {
            if (this._legs > 2) {
                return this._legs;
            }
            return NaN;
            //number型
        },
        //設定するとき(setter)
        set: function (value) {
            if (value > 1) {
                this._legs = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
//アクセサメソッドでショートハンド（コード簡略化）
//プロパティ名と同じアクセサメソッドは定義できない
//インスタンス化
//new Animal() カッコ内はconstructorの引数にわたる
//変数dogにAnimal型のインスタンスをいれてる　= let dogはAnimal型となる
var dog = new Animal(true);
dog.cry();
//アクセサメソッドはプロパティアクセスする形で実行できる
dog.legs = 4;
console.log(dog.legs); //4
