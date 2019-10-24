const puppeteer = require('puppeteer');
var formData = require('../formData.json');

class PaymentPage {

    async getPaymentConfirmationText(page) {
        const element = await page.$("#content-main > h1");
        const text = await page.evaluate(element => element.textContent, element);
        return text;
    }

    async enterCreditDetails(page) {
        await page.type('#purchaseQuote\\:cardnumber', formData.creditCardNumber);
        await page.type('#purchaseQuote\\:expiration', formData.expiryDate);
        await page.click('#purchaseQuote\\:purchase');
        //console.log("i am executed");
    }

}
module.exports = PaymentPage;