//インターフェース(InterFace)　＝クラスのお約束事
//クラスに特定のプロパティやメソッドの実装（定義）を強制
//概念なのでClassのようにnew(インスタンス化)出来ない


interface Person {
    name: string;
    age: number;
    isCry: boolean;
    speech(): void;  //メソッドの戻り値の型指定
}

//インターフェースをextendsで検証できる
interface SuperPerson extends Person { //Personの約束＋SuperPersonのcan run
    canRun: boolean;  
}



//上のInterfaceを利用したクラスを定義
//implementsはインターフェース実装　　　//extendsは継承

class Aoi implements Person {
    name: string = 'Sato';  //型注釈なしでも可
    age: number = 20;
    isCry: boolean = false;

    speech(): void {
        if(this.isCry) {
            console.log('ｴｰﾝ（泣）');
        }
    }
}

let aoi =new Aoi();
aoi.speech();


//オブジェクトもInterfaceを型として使える
//; ではなく　,
//Tsのオブジェクト形式で書く（型注釈なし）

let Aki: Person = {
    name:  'Sato',
    age:  20,
    isCry:  false,

    speech(): void {
        if(this.isCry) {
            console.log('ｴｰﾝ（泣）');
        }
    }
    
}