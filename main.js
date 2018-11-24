// prompt関数は入力ダイアログを表示して、入力した値を変数(今回の場合はinput変数)に代入する
// promptのドキュメント: https://developer.mozilla.org/ja/docs/Web/API/Window/prompt
const input = prompt('今日の天気は？次の3つのうち、いずれかの文字列を入力してくささい。(晴れ or くもり or 雨)');

// ここより下に条件分岐のコードを記述してください。

// 1. 入力した文字列が「晴れ」のときは「今日は気持ちの良い一日になりそうですね！」というメッセージをalertを使って表示する
if(input === "晴れ"){
    alert("今日は気持ちの良い一日になりそうですね！");
}
// 2. 入力した文字列が「くもり」のときは「どんよりした天気ですが今日も一日がんばりましょう！」というメッセージをalertを使って表示する
else if (input === "くもり"){
    alert("どんよりした天気ですが今日も一日がんばりましょう！");
}
// 3. 入力した文字列が「雨」のときは「家でゆっくり過ごすのも良いと思いますよ！」というメッセージをalertを使って表示する
else if (input === "雨"){
    alert("家でゆっくり過ごすのも良いと思いますよ！");
}
// 4. 入力した内容が「晴れ」「くもり」「雨」以外のときは「'晴れ・くもり・雨以外の文字列には対応していません。'」というメッセージをalertを使って表示する
else {
    alert("晴れ・くもり・雨以外の文字列には対応していません。");
}
