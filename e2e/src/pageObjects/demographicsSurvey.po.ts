import { AppPage } from "./AppPage.po";
import { element, by, browser } from "protractor";


export class DemographicsSurvey extends AppPage {

    get heading() {
        return element(by.xpath("//div[@class='col app-v-home__content-heading']"));
    }

    get email() {
        return element(by.id("email"));
    }

    get contact() {
        return element(by.id("phone"));
    }
    get age() {
        return element(by.id("age"));
    }
    get gender() {
        return element(by.name("gender"));
    }
    get yearlySalary() {
        return element(by.name("salary"));
    }
    get investmentSurplus() {
        return element(by.name("investmentSurplus"));
    }
    get pincode() {
        return element(by.id("pincode"));
    }
    get acceptanceCheckBox() {
        return element(by.id("acceptTnC"));
    }
    get submitBtn() {
        return element(by.xpath("//button[text()='Submit']"));
    }

    eneterEmail(email) {
        return this.email.sendKeys(email);
    }

    enterContact(contact) {
        return this.contact.sendKeys(contact);
    }

    enterAge(age) {
        return this.age.sendKeys(age);
    }

    selectGender(gender) {
        return this.gender.$('[value = "gender"]').click();
    }

    selectInvestmentSurplus(percentage) {
        return browser.actions().dragAndDrop(this.investmentSurplus, { x: 100, y: percentage }).perform();
    }
    enterPinCode(pincode) {
        return this.pincode.sendKeys(pincode);
    }
    selectYearlySal(sal) {
        return this.yearlySalary.$('[value = "sal"]').click();
    }
    selectAcceptanceCheckBox() {
        let checkBoxStatus = function checkBoxStatus() {
            return this.acceptanceCheckBox.isSelected();
        }
        if (checkBoxStatus.name != 'true') {
            this.acceptanceCheckBox.click();
        }
    }

    submitForm() {
        this.submitBtn.click();
    }
}