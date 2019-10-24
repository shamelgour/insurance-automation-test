const puppeteer = require('puppeteer');
const chai = require('chai');
const LoginPage = require('./pages/LoginPage');
const PersonalDetailsPage = require('./pages/PersonalDetailsPage');
const CarDetailsPage = require('./pages/CarDetailsPage');
const ReviewAndPurchasePage = require('./pages/ReviewAndPurchasePage');
const PaymentPage = require('./pages/PaymentPage');
const ConsoleLogger = require('./consoleLogger');
const config = require('./config.json');

var assert = chai.assert;
var expect = chai.expect;

var loginPage = new LoginPage();
var personalDetailsPage = new PersonalDetailsPage();
var carDetailsPage = new CarDetailsPage();
var reviewAndPurchasePage = new ReviewAndPurchasePage();
var paymentPage = new PaymentPage();
var logger = new ConsoleLogger();

(async () => {
    logger.logStartOfTest();
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(config.url);

    await loginPage.typeUserName(page);
    await loginPage.typePassword(page);
    await loginPage.clickSignin(page);
    await loginPage.changeDropDwon(page);
    await page.screenshot({ path: './screenshot/loginSuccess.png' });
    logger.logStepCompletionProgress('Login Step');
    
    await personalDetailsPage.addZipCode(page);
    await personalDetailsPage.addEmail(page);
    await personalDetailsPage.selectType(page);
    await page.click('#autoquote\\:next');
    await personalDetailsPage.addAge(page);
    await personalDetailsPage.selectGender(page);
    await personalDetailsPage.selectRecord(page);

    await page.click('#autoquote\\:next');
    await page.screenshot({ path: './screenshot/personalDetails.png' });
    logger.logStepCompletionProgress('Personal Details Step');

    await carDetailsPage.fillCarDetails(page);
    await page.click('#autoquote\\:next');
    const personalInfo = await carDetailsPage.getText(page,"#quote-result > h2:nth-child(5)");
    const automobileInfo = await carDetailsPage.getText(page,"#quote-result > h2:nth-child(11)");

    assert.equal('Personal Information', personalInfo);
    assert.equal('Automobile Information',automobileInfo);
	
    await page.screenshot({ path: './screenshot/carDetails.png' });
    logger.logStepCompletionProgress('Vehicle Details Step');

    await reviewAndPurchasePage.purchaseQuote(page);
    const quoteHeading = await reviewAndPurchasePage.getQuoteHeading(page);
    assert.equal('Purchase A Quote', quoteHeading);

    await paymentPage.enterCreditDetails(page);

    const paymentConfirmationText = await paymentPage.getPaymentConfirmationText(page);
    assert.equal('Congratulations!', paymentConfirmationText);
    await page.screenshot({ path: './screenshot/confirmation.png' });
    logger.logStepCompletionProgress('Purchase Completion');
    logger.logStepCompletionProgress('Test Completed Successfully');

    await browser.close();

})();
