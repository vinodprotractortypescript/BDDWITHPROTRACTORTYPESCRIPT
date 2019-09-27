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
const searchPage_1 = require("../pages/searchPage");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new searchPage_1.searchpage();
cucumber_1.Given('I am on {string} search page', (text) => __awaiter(void 0, void 0, void 0, function* () {
    if (text === "flipkart") {
        let ale = protractor_1.browser.switchTo().alert();
        ale.accept();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    }
}));
cucumber_1.When('I type {string}', (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.searchTextBox.sendKeys(text);
}));
cucumber_1.Then('I click on search button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER);
    protractor_1.browser.sleep(100000);
}));
cucumber_1.Then('I validate search result', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(protractor_1.element(protractor_1.by.partialLinkText("Mobiles")).isDisplayed()).to.eventually.be.true;
}));
