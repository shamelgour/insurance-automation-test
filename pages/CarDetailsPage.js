const puppeteer = require('puppeteer');

class CarDetailsPage {

async fillCarDetails(page) {
await page.$eval('#autoquote\\:year', (e) => {
e.setAttribute("value", '2018');
})

await page.$eval('#autoquote\\:make', (e1) => {
e1.setAttribute("value", 'Buick');
})

await page.$eval('#autoquote\\:model', (e2) => {
e2.setAttribute("value", 'Century');
})
await page.click('#autoquote\\:finInfo\\:0');

}

async getText(page,path) {
        const element = await page.$(path);
        const text = await page.evaluate(element => element.textContent, element);
        return text;
    }

}
module.exports = CarDetailsPage;

