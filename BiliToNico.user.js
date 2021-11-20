// ==UserScript==
// @name         BiliToNico
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatic Redirect from Bilibili to Niconico Source video.
// @author       Tsunaobou
// @match        https://www.bilibili.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

//なぜかF5を押さないと動かない問題がある
window.addEventListener('DOMContentLoaded', function() {    //ロード時に実行
    let re = new RegExp('sm[0-9]{1,9}') //ニコ動の動画IDを正規表現パターンとする
    var id = document.getElementsByClassName("desc-info desc-v2")[0].innerText  //動画説明欄を取得
    const match = re.exec(id)   //正規表現でマッチ
    if(match[0]!=null){ //マッチしてnullが返らなければ
        var link = "https://www.nicovideo.jp/watch/"+match[0]
        window.open(link)   //リンクを新しいタブで開く
    }
})