

# _o2-stripe-test_ Angular2によるStripe APIのテストツール
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_o2-stripe-test_ はAngular2によって開発されたStripe APIのテストツールです。

_ビデオ解説_
<https://youtu.be/SRT-MtzitC0>

## 概要 
   - _o2-stripe-test_ はAngular2を利用してStripe API サービスをチェックしたいと考えている人のためのプログラムです。

   - 主要なAPI (Subscription,Charge,Order,Account,Customer,Token,Refund,PLan,Product,SKU,Event,Dispute,Balance,Transfer,FileUpload)に対応しています。

   - クライアントサイド及びサーバサイドの双方のテストが可能です。

    また、共通の関数を利用することにより、さらに多くのAPIに対応させることが可能です。
   

## 必要環境

   - Node.js
   - Git
   - TypeScript2
   - Angular2
   - @ng-bootstrap/ng-bootstrap


## インストール方法


このツールをインストールするためには、

   - まずこのプログラム用のディレクトリを作成し、そのディレクトリに移動します。

```bash
$ mkdir mydir
$ cd mydir
```
   - そのディレクトリで以下のようにクローンを作成します。

```bash
$ git clone https://github.com/Ohtsu/o2-stripe-test.git 
```

   - 作成された _o2-stripe-test_ に移動し、"npm install"を実行します。

```bash
$ cd o2-stripe-test
$ npm install 
```



#### stripe-auth.tsの修正

プログラムの中の"src/app"に移動します。

```bash
$ cd src/app
```
ここに **stripe-auth.ts** というファイルがあります。
ここにStripeのキーを指定する必要があります。このキーはStripeのサイトから取得してください <https://dashboard.stripe.com/account/apikeys>. 

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class StripeAuthService {

  constructor() { }
	
  public isLogin(): boolean {
    return true;
  }

  public getRole(): any {
    return 'admin';
  }

  // Set your keys of Stripe --------------------------------------------

  public getTestSecretKey(){
    if (this.isLogin && this.getRole() == 'admin'){
      return "sk_test_xxxxxxxxxxxxxxxxxxxxx";
    }
  }

  public getTestPublicKey(){
    if (this.isLogin && this.getRole() == 'admin'){
      return "pk_test_xxxxxxxxxxxxxxxxxxxxx";
    }
  }
  
  
}
```


### ローカルサーバの起動
以下のようにローカルサーバを起動します。 

```bash
$ ng serve
```

次にブラウザで **http://localhost:4200** にアクセスします。  

  - ***初期管理画面*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/o2-stripe-test-initial01.png" width= "640" >


## Stripe API のテスト

### 接続の確認

初期画面において、デフォルトのsubscriptionタブページ内のリストボタンを押してみます。上記で設定したキーが正しければ、ユーザリストが _Output_ に表示されます。

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/check-customer-in-stripe-site_01.png" width= "640" >


### クライアントサイドでのテスト

上段のパネルはクライアントサイドのものです。ここで以下のようにテスト用のクレジットカード情報を入力します。

   - CARD NUMBER		  4242 4242 4242 4242 
   - EXPIRATION DATE  10 / 18
   - CV CODE          100

さらに、右側の _Input_ 欄にemailをJSON形式で指定します。

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/input-cardnumber-on-client-side_01.png" width= "640" >


_Register as a customer_ ボタンをクリックします。

すると _Output_ 欄に生成されたカスタマーの情報が表示されます。

このカスタマー情報は、ブラウザでStripeサイトにアクセスし、確認することができます。

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/made-customer-in-stripe-site_02.png" width= "640" >

### 管理者サイドでカスタマーリストを生成

_Customer_ タブをクリックします。

さらに _List_ ボタンをクリックします。

すると右側の _Output_ 欄にカスタマーリストがJSON形式で表示されます。

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/check-customer-in-stripe-site_01.png" width= "640" >




## バージョン

   - o2-stripe-test     : 0.1.1
   - Angular2           : 2.4.0
   - TypeScript         : 2.0.0
   - @angular/cli      : 1.0.0-rc.1
   - @ng-bootstrap/ng-bootstrap : 1.0.0-alpha


## 参考文献

- "Stripe docs",
<https://stripe.com/docs>

- "The Stripe Webhook Event Cheatsheet" ,by Pete Keen, 
<https://www.masteringmodernpayments.com/stripe-webhook-event-cheatsheet>

- "Using Stripe with Angular 2", by Minko Gechev
<http://blog.mgechev.com/2016/07/05/using-stripe-payment-with-angular-2/>

- "Taking Stripe Payments with Angular 2 and ASP.NET Core",2017/1/12, by Carl Rippon
<http://www.carlrippon.com/?p=645>



## 変更履歴

 - 2017.3.20 version 0.1 uploaded 

## Copyright

copyright 2017 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](mailto:ohtsu@digipub-net.com)
