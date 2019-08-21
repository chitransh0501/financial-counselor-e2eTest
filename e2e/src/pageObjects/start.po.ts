import { AppPage } from "./AppPage.po";
import { element, by } from "protractor";

export class StartPage extends AppPage {

    get heading() {
        return element(by.xpath("//div[@class='col col-6 app-v-start__content-heading']"));
    }

    get content() {
        return element(by.xpath("//div[@class='col col-6']"));
    }

    get startTestBtn() {
        return element(by.xpath("//a[text()='Start the test']"));
    }

    get header() {
        return element(by.xpath("//nav[@class='app-c-header__nav text-right']"));
    }

    clickOnStartTestBtn() {
        return this.startTestBtn.click();
    }
}