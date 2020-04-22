# IOTA Payment Example: Hello World App

## A simple micro payment app using IOTA

This application was taken from the [IOTA Fundamentals Course](https://app.pluralsight.com/library/courses/iota-fundamentals/table-of-contents) available on [Pluralsight](pluralsight.com). In this app we are creating new addresses dynamically and

## Run the application

To run this application, install the dependencies and then use node to run the application. This has been tested using Node v12.14.1.

```
npm install
node app.js
```

Add your own seed to the `app.js` file. Then start the app using

```
node app.js
```

## Make a payment using your IOTA wallet

Once the application UI updates with the IOTA address where to mak ethe payment then head over to your local IOTA wallet, pate the address there and click 'SENT IT NOW' button.

![IOTA Wallet Transaction](./img/iota-wallet-transaction.png)

## View the transaction on the Tangle Explorer

If you used a real address in the app then you can view this transaction using the [Tangle Explorer](https://comnet.thetangle.org/). Make a note of the hash value that was output from the app and use that to look up your transaction. Additionally, if you are using your own address you will be able to see this transaction in your local IOTA Wallet.

### Issue Reporting

If you experience any bugs or need further improvement, please create a new issue under [Issues](https://github.com/jensendarren/iota-message-example/issues).

### Disclaimer

This application is part of a _research assignment_ and is most definitely __not__ suitable for Production use! :)