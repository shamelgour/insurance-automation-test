const puppeteer = require('puppeteer');
var formData = require('../formData.json');

class PersonalDetailsPage {

    async addZipCode(page) {
        await page.type('#autoquote\\:zipcode', formData.zip);
    }
    async addEmail(page) {
        await page.type('#autoquote\\:e-mail', formData.personalEmail);
    }
    async selectType(page) {
        await page.click('#autoquote\\:vehicle\\:0');
    }
    async clickNext(page) {
        await page.click('#autoquote\\:next');
    }

    async addAge(page) {
		await page.focus( '#autoquote\\:age' );
		await page.keyboard.press( 'End' );
		await page.keyboard.press( 'Backspace' );
		
        await page.type('#autoquote\\:age', formData.age);
    }

    async selectGender(page) {
        await page.click('#autoquote\\:gender\\:0');
    }

    async selectRecord(page) {
        await page.click('#autoquote\\:type\\:0');
    }

}
module.exports = PersonalDetailsPage;