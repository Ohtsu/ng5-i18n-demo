

# _ng5-i18n-demo_ Angular5 internationalization sample
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_ng5-i18n-demo_ is a tool program for testing Stripe API Service by Angular2.

_Video Explanation_
<https://youtu.be/eifU5C11WLI>


## Overview 
   - _ng5-i18n-demo_ is a tool for those who want to check Stripe API Service by using Angular2

   - Main APIs (Subscription,Charge,Order,Account,Customer,Token,Refund,PLan,Product,SKU,Event,Dispute,Balance,Transfer,FileUpload) are supported

   - You can check the functions as both a customer (client side) and an administrator (server side).

    You can extend functions for more APIs by these base common methods.
   

## Prerequisite

   - Node.js
   - TypeScript2
   - Angular2
   - @ng-bootstrap/ng-bootstrap


## Installation


To install this program:

   - Make your own directory and change into it.

```bash
$ mkdir mydir
$ cd mydir
```
   - Make the clone as follows.

```bash
$ git clone https://github.com/Ohtsu/o2-stripe-test.git 
```

   - Change into _ng5-i18n-demo_ and run "npm install".

```bash
$ cd o2-stripe-test
$ npm install 
```

### If you have an error as follows

```bash
+-- @angular/cli@1.0.0-rc.1
`-- UNMET PEER DEPENDENCY typescript@2.0.10
```

Install @angular/cli globally

```bash
$ npm install -g @angular/cli 
$ npm install
```


#### Modify stripe-auth.ts

Change directory to "src/app".

```bash
$ cd src/app
```
You will find **stripe-auth.ts**.
Modify this file by using your own Stripe Test Keys. You can get these in <https://dashboard.stripe.com/account/apikeys>. 

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


### Start server
Start the local server as follows. 

```bash
$ ng serve
```

And you will get the page below in your browser by accessing **http://localhost:4200**.  

  - ***First Page*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/o2-stripe-test-initial01.png" width= "640" >


## Test Stripe APIs

### Check your connection

In the first page, click _List_ button in the subscription tab (default). If your keys are valid, you will find the repondd message in the output area.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/check-customer-in-stripe-site_01.png" width= "640" >


### Test on Customer (Client) side.

In the upper panel, input the date as a customer (these are default data for testing in Stripe).

   - CARD NUMBER		  4242 4242 4242 4242 
   - EXPIRATION DATE  10 / 18
   - CV CODE          100

In addition, you need to input the customer date such as _email address_. Input your customer's email in the input area. It needs to be JSON format.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/input-cardnumber-on-client-side_01.png" width= "640" >


Click "Register as a customer" button.

Then you will find the customer id.

You can also check the new customer in Stripe site.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/made-customer-in-stripe-site_02.png" width= "640" >

### List your customers on Admiministrator (Server) side.

Click "Customer" tab in the lower panel.

Click the button "List".

You will find the newly registered customer's id.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/check-customer-in-stripe-site_01.png" width= "640" >




## Version

   - o2-stripe-test     : 0.1.1
   - Angular2           : 2.4.0
   - TypeScript         : 2.0.0
   - @angular/cli      : 1.0.0-rc.1
   - @ng-bootstrap/ng-bootstrap : 1.0.0-alpha


## Reference

- "Stripe docs",
<https://stripe.com/docs>

- "The Stripe Webhook Event Cheatsheet" ,by Pete Keen, 
<https://www.masteringmodernpayments.com/stripe-webhook-event-cheatsheet>

- "Using Stripe with Angular 2", by Minko Gechev
<http://blog.mgechev.com/2016/07/05/using-stripe-payment-with-angular-2/>

- "Taking Stripe Payments with Angular 2 and ASP.NET Core",2017/1/12, by Carl Rippon
<http://www.carlrippon.com/?p=645>



## Change Log

 - 2017.3.20 version 0.1 uploaded 

## Copyright

copyright 2017 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](mailto:ohtsu@digipub-net.com)
