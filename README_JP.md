

# _ng5-i18n-demo_ Angular5による多言語化のサンプル
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_ng5-i18n-demo_ はAngular5における多言語化機能をテストするためのプログラムです。

_ビデオ解説_
<https://youtu.be/5-6dwYtfRO4>


## 概要 
   - _ng5-i18n-demo_ はAngular5を利用して多言語環境を実現したいと考えている人のためのプログラムです。

 ## 必要環境

   - Node.js
   - TypeScript2
   - Angular/Cli (for Angular5 or later)


## インストール方法


このツールをインストールするためには、

   - まずこのプログラム用のディレクトリを作成し、そのディレクトリに移動します。

```bash
$ mkdir mydir
$ cd mydir
```
   - そのディレクトリで以下のようにクローンを作成します。

```bash
$ git clone https://github.com/Ohtsu/ng5-i18n-demo.git 
```

   - 作成された _ng5-i18n-demo_ に移動し、"npm install"を実行します。

```bash
$ cd ng5-i18n-demo
$ npm install 
```

### ローカルサーバ(英語版)の起動
以下のようにローカルサーバを起動します。 

```bash
$ ng serve
```

次にブラウザで **http://localhost:4200** にアクセスします。  

  - ***初期管理画面*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng5-i18n-demo/ng5-i18n-demo_en-page_01.png" width= "640" >


### 他の言語でのサーバ(日本語)の起動 
以下のようにローカルサーバを起動します。 

```bash
$ npm run start:ja
```

次にブラウザで **http://localhost:4200** にアクセスします。  

  - ***初期管理画面*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng5-i18n-demo/ng5-i18n-demo_ja-page_01.png" width= "640" >


## バージョン

   - TypeScript         : 2.4.2
   - @angular/cli       : 1.5.0
   - Node               : 6.11.3


## 参考文献

- "Internationalization (I18N)",
<https://v2.angular.io/docs/ts/latest/cookbook/i18n.html>

- "Internationalization (I18N) Japanese Translation by mixplace in Qiita",
<https://qiita.com/mixplace/items/3f1e1190e38c14f5297d>



## 変更履歴

 - 2017.11.9 version 0.1 uploaded 
 - 2017.11.14 ビデオ解説のＵＲＬを修正

## Copyright

copyright 2017 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](mailto:ohtsu@digipub-net.com)
