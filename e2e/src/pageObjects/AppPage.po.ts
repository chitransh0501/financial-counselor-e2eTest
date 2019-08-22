import { browser, by, element, ExpectedConditions, ElementFinder } from "protractor";
export class AppPage {

    constructor () {
        browser.manage().timeouts().implicitlyWait(30000);
    }

    explicitWait(elementLocator: ElementFinder) {
        let EC = ExpectedConditions;
        let condition = EC.presenceOf(elementLocator);
        return browser.wait(condition, 30000);
    }

    openUrl(url) {
        return browser.get(url);
    }

    currentUrl() {
        return browser.getCurrentUrl();
    }

    isFullyLoaded(elementXpath) {
        let EC = ExpectedConditions;
        let isPageLoaded = EC.presenceOf(element(by.xpath(elementXpath)));
        return EC.and(isPageLoaded);
    }


    waitUntilFullyLoaded(timeout, message, elementXpath) {
        return browser.driver.wait(
            this.isFullyLoaded(elementXpath),
            timeout,
            message ||
            `Expected page [${elementXpath}] to be fully loaded before ${timeout}ms but it wasn't.`
        );
    }

    selectOptionFromDropDown(dropdown: String, option: String) {
       // this.explicitWait(element(by.xpath("//select[@name= '" + dropdown + "']")));
        element(by.xpath("//select[@name= '" + dropdown + "']")).click();
       // this.explicitWait(element(by.xpath("//option[text()= '" + option + "']")));
        element(by.xpath("//option[text()= '" + option + "']")).click();
    }

    selectSlider(sliderElement : ElementFinder, investmentSurplusPercent : String) {

       browser.actions().dragAndDrop(sliderElement, { x: 200, y: 0 }).perform();
    }
}