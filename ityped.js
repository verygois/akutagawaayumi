ityped.init(document.querySelector("#ityped"), {
  strings: [
    'Countdown'
  ],
  typeSpeed:  400,            //タイピングのスピード
  startDelay: 100,             //タイピングが始まるまでの時間
  loop: true,                  //繰り返しの有無（ true か false で指定）
  // showCursor: false,           //カーソル表示の有無（ true か false で指定）
  // cursorChar: "|",             //カーソルとして表示させる文字を" "内に指定
  // disableBackTyping: true,    //文字を消していく動作の有無（ true か false で指定）
  //backSpeed:  0,              //文字が消えていくときのスピード
  backDelay:  400,             //タイピングが終わって消え始めるまでの時間
  //placeholder: false,          //プレースホルダーでのアニメーション（trueかfalseで指定）
})
