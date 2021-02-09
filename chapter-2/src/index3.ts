//Class
//constructor インスタンス化する際のクラスに引数を渡す　コンストラクタの仮引数で受け取れる

class Animal {
  age: number = 10;
  private _legs = 4;
  //ここのプライベートのはアクセス出来ないのでアクセサメソッドを使用

  constructor(public isCry: boolean) {
    //   this.isCry = isCry;　Tsはアクセス修飾子(public)があるので
    //プロパティに初期化は必要なし=自動的に取り込むことができることができる
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }
  //アクセサメソッド(getter, setter)

  //比較(検証)すると安全
  get legs() {
    if (this._legs > 2) {
      return this._legs;
    }
  }
  //設定するとき
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
let dog = new Animal(true);
dog.cry();

//アクセサメソッドはプロパティアクセスする形で実行できる
dog.legs = 4;
console.log(dog.legs); //4
