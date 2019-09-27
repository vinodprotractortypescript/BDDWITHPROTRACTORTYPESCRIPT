"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class searchpage {
    constructor() {
        this.searchTextBox = protractor_1.element(protractor_1.by.name("q"));
        this.searchButton = protractor_1.element(protractor_1.by.className("vh79eN"));
        this.brandSearchInputBox = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Search Brand']"));
        this.brandCheckBox = protractor_1.element(protractor_1.by.xpath("//*[@id='container']/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/section[5]/div[2]/div[1]/div[3]"));
    }
}
exports.searchpage = searchpage;
