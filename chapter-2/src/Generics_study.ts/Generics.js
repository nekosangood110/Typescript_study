//ジェネリック(Generics)  
//そのクラスを使用するときデータ型を決められる
//Ｉ特定のプロパティの型指定　Ｇ型が変数のイメージ
//ジェネリックを使わない例
var NumberStore = /** @class */ (function () {
    function NumberStore() {
    }
    return NumberStore;
}());
var StringStore = /** @class */ (function () {
    function StringStore() {
    }
    return StringStore;
}());
// class AnyStore {
//     data: any;
// }
// ジェネリックを使用したクラス定義
var Store = /** @class */ (function () {
    function Store() {
    }
    //メソッドにも使用可
    Store.prototype.getStore = function () {
        return this.data;
    };
    return Store;
}());
var stringData = new Store();
var booleanData = new Store(); //すべてのＴにbooleanが指定される
//関数にもデータ型指定できる(引数のデータ型と戻り値)
//<T>は必ず書く
function hellosan(keyword) {
    console.log("Logs: " + keyword + "!!!");
}
hellosan('あー'); //Tはこの場合はstring
hellosan(3111110);
//ジェネリックの複数指定
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var com = new Component();
com.id = 10000; //文字列入れるとエラー
function nyankosan(id) {
    return id;
}
nyankosan(4);
