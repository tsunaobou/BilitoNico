// ==UserScript==
// @name         BiliToNicoTube
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatic Redirect from Bilibili to Niconico or Youtube Source video.
// @author       Tsunaobou
// @match        https://www.bilibili.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('DOMContentLoaded', function() { //ロード時に実行
    let re = new RegExp('sm[0-9]{1,9}') //ニコ動の動画IDを正規表現パターンとする
    let re_second = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/; //Youtubeの動画URLを正規表現パターンとする
    var id = document.getElementsByClassName("desc-info desc-v2")[0].textContent //動画説明欄を取得
    const match = re.exec(id) //正規表現でマッチ
    const match_second = re_second.exec(id) //正規表現でマッチ
    if (match != null) { //マッチしてnullが返らなければ
        var link = "https://www.nicovideo.jp/watch/" + match[0]
        window.open(link) //リンクを新しいタブで開く
        return;
    } else if (match_second != null) { //nullが返ったら
        var link_second = "https://www." + match_second[0]
        window.open(link_second)
        return;
    }
})