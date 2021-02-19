//インターフェース(InterFace)　＝クラスのお約束事
//クラスに特定のプロパティやメソッドの実装（定義）を強制
//概念なのでClassのようにnew(インスタンス化)出来ない
//上のInterfaceを利用したクラスを定義
//implementsはインターフェース実装　　　//extendsは継承
var Aoi = /** @class */ (function () {
    function Aoi() {
        this.name = 'Sato'; //型注釈なしでも可
        this.age = 20;
        this.isCry = false;
    }
    Aoi.prototype.speech = function () {
        if (this.isCry) {
            console.log('ｴｰﾝ（泣）');
        }
    };
    return Aoi;
}());
var aoi = new Aoi();
aoi.speech();
//オブジェクトもInterfaceを型として使える
//; ではなく　,
//Tsのオブジェクト形式で書く（型注釈なし）
var Aki = {
    name: 'Sato',
    age: 20,
    isCry: false,
    speech: function () {
        if (this.isCry) {
            console.log('ｴｰﾝ（泣）');
        }
    }
};
