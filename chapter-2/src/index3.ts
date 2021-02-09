//Class
//constructor newでインスタンス化する際　()内をコンストラクタが受け取れる
//特別なメソッド

class Animal {
  age: number = 10;
  private _legs = 0;
  //ここのプライベートのはアクセス出来ないのでアクセサメソッドを使用

  constructor(public isCry: boolean) {
    //   this.isCry = isCry;　Tsはアクセス修飾子(public)があると
    //プロパティに初期化は必要なし=cunstructorに引数が来ること伝えなくていい
    //ここでいうthisはAnimal Class
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }
  //アクセサメソッド(getter, setter) class内に書く　privateにアクセスするもの
  //getter読み取り専用　setterは書き込み専用


  //privateなのにgetter書くだけでアクセス出来たら意味がないのでif文で比較してあげる
  get legs() {
    if (this._legs > 2) {
      return this._legs;
    }
    return NaN;
    //number型
  }
  //設定するとき(setter)
  set legs(value: number) {
      if (value > 1) {
          this._legs = value;
      }
  }
}

//アクセサメソッドでショートハンド（コード簡略化）
//プロパティ名と同じアクセサメソッドは定義できない


//インスタンス化
//new Animal() カッコ内はconstructorの引数にわたる
//変数dogにAnimal型のインスタンスをいれてる　= let dogはAnimal型となる
let dog = new Animal(true);
dog.cry();

//アクセサメソッドはプロパティアクセスする形で実行できる
dog.legs = 4;
console.log(dog.legs); //4
