//ジェネリック(Generics)  
//そのクラスを使用するときデータ型を決められる

//Ｉ特定のプロパティの型指定　Ｇ型が変数のイメージ

//ジェネリックを使わない例
class NumberStore {
    data: number; //strictモードで　=がない時　data: number|undefined
}

class StringStore {
    data: string;
}

// class AnyStore {
//     data: any;
// }

// ジェネリックを使用したクラス定義
class Store<T> { //Type, U, V, T1, T2, T3が慣例
    data: T; //number

    //メソッドにも使用可
    getStore(): T {
        return this.data;
    }
}

let stringData = new Store<number>();
let booleanData = new Store<boolean>(); //すべてのＴにbooleanが指定される

//関数にもデータ型指定できる(引数のデータ型と戻り値)
//<T>は必ず書く
function hellosan<T>(keyword: T) /*: T　*/ {
    console.log(`Logs: ${keyword}!!!`)
}

hellosan<string>('あー'); //Tはこの場合はstring
hellosan<number>(3111110);


//ジェネリックの複数指定

class Component<T,U> {
    id: T;
    name: U;
}

let com = new Component<number,string>();
com.id = 10000;  //文字列入れるとエラー



function nyankosan<T>(id: T):T {
    return id
}

nyankosan<number>(4);