import { ElementFinder, element, by } from "protractor";

export class searchpage {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public brandSearchInputBox:ElementFinder;
    public brandCheckBox:ElementFinder;
  

    constructor() {
        this.searchTextBox = element(by.name("q"));
        this.searchButton = element(by.className("vh79eN"));
        this.brandSearchInputBox = element(by.xpath("//input[@placeholder='Search Brand']"));
        this.brandCheckBox = element(by.xpath("//*[@id='container']/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/section[5]/div[2]/div[1]/div[3]"));

        
    }
}