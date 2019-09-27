import { Given, When, Then } from "cucumber";
import { Alert } from "selenium-webdriver";
import { browser, by, protractor, ExpectedConditions, element } from "protractor";
import { searchpage } from "../pages/searchpage";
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

    //await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys(text);
    
    

});

Then('I click on search button', async () => {

       // browser.actions().sendKeys(protractor.Key.ENTER);
        let EC = ExpectedConditions;
		let condition = EC.elementToBeClickable(element(by.className("vh79eN")));
		browser.wait(condition, 4000)
       search.searchButton.click();
        
});

Then('I click RealMe Brand checkbox', async () => {

    
    
      //  let EC = ExpectedConditions;
		//let condition = EC.not(EC.presenceOf(element(by.xpath("//*[@id='container']/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/section[5]/div[2]/div[1]/div[3]/div[2]"))));
		//browser.wait(condition, 30000)
        await search.brandCheckBox.click();

});

Then('I click {int} GB RAM checkbox', function (int) {


});

Then('I validate search result', function () {


});

