const v8toIstanbul = require('v8-to-istanbul');
const playwright = require('playwright');
const { BuyPO } = require('./PageObjects/SecondPageObject');
const tests = require("@playwright/test");

  tests.test('No redirect to main page -> succsses', async({page}) =>
   {
    await page.coverage.startJSCoverage();
    const buyPO = new BuyPO(page);
    await buyPO.Navigate();
    await buyPO.Buy();
    const coverage = await page.coverage.stopJSCoverage();
    // for (const entry of coverage) {
    //   const converter = new v8toIstanbul('', 0, { source: entry.source });
    //   await converter.load();
    //   converter.applyCoverage(entry.functions);
    //   console.log(JSON.stringify(converter.toIstanbul()));
    // }
    await tests.expect(page).toHaveURL('https://www.demoblaze.com/');
  });

      