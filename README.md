

# _ng5-i18n-demo_ Angular5 internationalization sample
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_ng5-i18n-demo_ is a tool program for testing Stripe API Service by Angular2.

_Video Explanation_
<https://youtu.be/eifU5C11WLI>


## Overview 
   - _ng5-i18n-demo_ is a sample program for realizing internationalization in Angular5


## Prerequisite

   - Node.js
   - TypeScript2
   - Angular/Cli (for Angular5 or later)


## Installation


To install this program:

   - Make your own directory and change into it.

```bash
$ mkdir mydir
$ cd mydir
```
   - Make the clone as follows.

```bash
$ git clone https://github.com/Ohtsu/ng5-i18n-demo.git 
```

   - Change into _ng5-i18n-demo_ and run "npm install".

```bash
$ cd ng5-i18n-demo
$ npm install 
```


#### Start English (default) version


```bash
$ ng serve
```
And you will get the page below in your browser by accessing **http://localhost:4200**.  

  - ***First Page*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/stripe/o2-stripe-test-initial01.png" width= "640" >



### Start other language (Japanese) version 
Start the local server as follows. 

```bash
$ npm run start:ja
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

   - TypeScript         : 2.4.2
   - @angular/cli       : 1.5.0
   - Node: 6.11.3


## Reference

- "Internationalization (I18N)",
<https://v2.angular.io/docs/ts/latest/cookbook/i18n.html>

- "Internationalization (I18N) Japanese Translation by mixplace in Qiita",
<https://qiita.com/mixplace/items/3f1e1190e38c14f5297d>

## Change Log

 - 2017.11.9 version 0.1 uploaded 

## Copyright

copyright 2017 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](mailto:ohtsu@digipub-net.com)
