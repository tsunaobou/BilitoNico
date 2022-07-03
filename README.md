# BilitoNicoTube
Userscript for Automatic Redirect from Bilibili to Niconico or Youtube Source video.

## 使い方
1.Greasemonkey/Tampermonkeyなどでユーザースクリプト追加画面に入る      
2.このコードをコピペするか、コードブラウズ画面からRawを押してインストールする   
3.Ctrl+Sで保存して、「設定」タブから実行のタイミングをdocument-startにする  
4.Bilibiliの動画リンクにアクセスする    
5.元動画ページ(Youtube,niconico)に飛べる！    

## 仕組み
なんてことはない、単純設計です。    
動画の説明欄にニコニコ動画/Youtubeの動画IDが載っていたらそのリンク先にジャンプするだけです。    
なぜだかBilibiliはacgというサイトに間違ってジャンプしてしまう仕様のようなので作ってみた次第です。   

## 注意
実行する前に必ず ユーザースクリプト＞設定＞全般＞実行のタイミング を**document-start**にしてください。    
そうしないと動きません。
