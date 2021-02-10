//クラス継承
//constructer　メソッドなどをそのまま引き継ぐ
//子クラスでメソッド内容を書き換えても親に影響はなし

//フォルダ階層が一緒なのでAnimal使えない
//クラス名は重複させない
class Animalsan {
  age: number = 10;

  constructor(public isCry: boolean) {
      this.age = 2;  //プロパティ
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }
}
//クラス宣言の後にextends
class Cat extends Animalsan {

    constructor(public isCry: boolean) { 
        super(isCry);　//親クラスが持ってたconstructerを実行 = super(ここに親cunstructerが使う実引数);
                       //super();がないとAnimalsanのage =10のまま渡る
    　　this.age = 100;  //　←ここで　初期化もできる
    }

  cry(): void {
    if (this.isCry) {
        alert('meow!!!!');
    }
    console.log('meow is cry!!!!!!!');
    super.cry(); //親ClassのCry()を使える
  }
}

//Animalクラスはインスタンス化せず継承（元ネタに）してるだけ
let cat = new Cat(true); //Cat class内では親クラスのconstructerもtrue
cat.cry();

//変数.メソッドなのでCatではない
//変数名dogはindex3で使用しているので使えない
