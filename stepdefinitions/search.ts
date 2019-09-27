import { Given, When, Then } from "cucumber";
import { browser, ExpectedConditions, element, by, protractor } from "protractor";
import { searchpage } from "../pages/searchPage";
import { Alert } from "selenium-webdriver";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search: searchpage = new searchpage();

Given('I am on {string} search page', async (text) => {
   if (text === "flipkart") {
      let ale: Alert = browser.switchTo().alert();
      ale.accept();
      await expect(browser.getTitle()).to.eventually.equal("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");

   }
});

When('I type {string}', async (text) => {

   await search.searchTextBox.sendKeys(text);

});


Then('I click on search button', async () => {

   await browser.actions().sendKeys(protractor.Key.ENTER);
   browser.sleep(100000);

});


Then('I validate search result', async () => {

   await expect(element(by.partialLinkText("Mobiles")).isDisplayed()).to.eventually.be.true;

});