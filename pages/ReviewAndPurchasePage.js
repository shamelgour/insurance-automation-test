const puppeteer = require('puppeteer');

class ReviewAndPurchasePage {

    async getQuoteHeading(page) {
        const element = await page.$("#content-main > h1");
        const text = await page.evaluate(element => element.textContent, element);
        return text;
    }

    async purchaseQuote(page) {
        await page.click('#quote-result\\:purchase-quote');
    }

}
module.exports = ReviewAndPurchasePage;