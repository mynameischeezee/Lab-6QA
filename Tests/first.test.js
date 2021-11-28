//Перевірка логіну
//Перевірка логіну
const playwright = require('playwright');
const { LoginPO } = require('./PageObjects/FirstPageObject');
const { BuyPO } = require('./PageObjects/SecondPageObject');
const tests = require("@playwright/test");
tests.test('Login with data: username:password -> succsses', async({page}) =>
   {
      const loginPO = new LoginPO(page);
      await loginPO.Navigate();
      await loginPO.FillAndLogin("username","password");
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
      await delay(2000);
      tests.expect(await loginPO.Validate()).toBe("Welcome username");
      tests.expect(await page.screenshot()).toMatchSnapshot('landing.png');
  });

//   test('No redirect to main page -> succsses', async() =>
//    {
//     const browser = await playwright.chromium.launch();
//     const context = await browser.newContext();
//     const newpage = await context.newPage();
//     const buyPO = new BuyPO(newpage);
//     await buyPO.Navigate();
//     expect(await (await buyPO.Buy()).url).not.toBe("https://www.demoblaze.com/");
//     browser.close();
//   });

      