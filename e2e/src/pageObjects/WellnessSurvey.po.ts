import { AppPage } from "./AppPage.po";
import { element, by } from "protractor";

export class WellnessSurvey extends AppPage{
    
    get heading() {
        return element(by.xpath("//h2[text()='Find out your personal financial wellness score']"));
    }
}