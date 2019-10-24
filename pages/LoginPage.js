const puppeteer = require('puppeteer');
var config = require('../config.json');

class LoginPage {
    async typeUserName(page) {
        await page.type('#login-form\\:email', config.email)
    }
    async typePassword(page) {
        await page.type('#login-form\\:password', config.password)
    }
    async clickSignin(page) {
        await page.click('#login-form\\:login')
    }
    async changeDropDwon(page) {
        await page.select('#quick-link\\:jump-menu', 'quote_auto.jsf');
    }
}
module.exports = LoginPage;

