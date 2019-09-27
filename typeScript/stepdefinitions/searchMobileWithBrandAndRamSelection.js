"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const searchpage_1 = require("../pages/searchpage");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new searchpage_1.searchpage();
cucumber_1.Given('I am on {string} search page', (text) => __awaiter(void 0, void 0, void 0, function* () {
    if (text === "flipkart") {
        let ale = protractor_1.browser.switchTo().alert();
        ale.accept();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    }
}));
cucumber_1.When('I type {string}', (text) => __awaiter(void 0, void 0, void 0, function* () {
    //await search.searchTextBox.clear();
    yield search.searchTextBox.sendKeys(text);
}));
cucumber_1.Then('I click on search button', () => __awaiter(void 0, void 0, void 0, function* () {
    // browser.actions().sendKeys(protractor.Key.ENTER);
    let EC = protractor_1.ExpectedConditions;
    let condition = EC.elementToBeClickable(protractor_1.element(protractor_1.by.className("vh79eN")));
    protractor_1.browser.wait(condition, 4000);
    search.searchButton.click();
}));
cucumber_1.Then('I click RealMe Brand checkbox', () => __awaiter(void 0, void 0, void 0, function* () {
    //  let EC = ExpectedConditions;
    //let condition = EC.not(EC.presenceOf(element(by.xpath("//*[@id='container']/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/section[5]/div[2]/div[1]/div[3]/div[2]"))));
    //browser.wait(condition, 30000)
    yield search.brandCheckBox.click();
}));
cucumber_1.Then('I click {int} GB RAM checkbox', function (int) {
});
cucumber_1.Then('I validate search result', function () {
});
