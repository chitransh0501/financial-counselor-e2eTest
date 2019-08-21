import { AppPage } from "./AppPage.po";
import { element, by } from "protractor";

export class HomePage extends AppPage {

    get heading() {
        return element(by.xpath("//div[@class='col app-v-home__content-heading']"));
    }

    get content() {
        return element(by.xpath("//div[@class='row align-content-center justify-content-left pl-2']"));
    }

    get startButton() {
        return element(by.xpath("//a[text()='Tell me my financial wellbeing']"));
    }

    get header() {
        return element(by.xpath("//nav[@class='app-c-header__nav text-right']"));
    }

    clickOnStartButton() {
        return this.startButton.click();
    }
}