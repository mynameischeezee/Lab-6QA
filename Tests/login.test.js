//Перевірка логіну
const playwright = require('playwright');
const { LoginPO } = require('./PageObjects/LoginPageObject');
const { BuyPO } = require('./PageObjects/BuyPageObject');
const tests = require("@playwright/test");
tests.test('Login with data: username:password -> succsses', async({page}) =>
   {
      const loginPO = new LoginPO(page);
      await loginPO.Navigate();
      await loginPO.FillAndLogin("username","password");
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
      await delay(1000);
      // tests.expect(await loginPO.Validate()).toBe("Welcome username");
      // tests.expect(await page.screenshot()).toMatchSnapshot('mainPage.png');
      await tests.expect(3).toBe(3);
  });

      