import { browser, by, element, ExpectedConditions } from "protractor";
export class AppPage {

    openUrl(url) {
        return browser.get(url);
    }

    currentUrl() {
        return browser.getCurrentUrl();
    }

    isFullyLoaded(page) {
        let EC = ExpectedConditions;
        let isPageLoaded = EC.presenceOf(element(by.id(page)));
        return EC.and(isPageLoaded);
    }
}