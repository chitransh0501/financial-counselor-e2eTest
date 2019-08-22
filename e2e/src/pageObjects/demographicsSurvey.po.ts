import { AppPage } from "./AppPage.po";
import { element, by, browser } from "protractor";


export class DemographicsSurvey extends AppPage {

    get header() {
        return element(by.xpath("//a[text()='Getting Started']"));
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
        return element(by.xpath("//select[@name='gender']"));
    }
    get yearlySalary() {
        return element(by.xpath("//select[@name='salary']"));
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
        return element(by.css("button[type=submit]"));
    }

    enterEmail(email) {
        return this.email.sendKeys(email);
    }

    enterContact(contact) {
        return this.contact.sendKeys(contact);
    }

    enterAge(age) {
        return this.age.sendKeys(age);
    }

    selectInvestmentSurplus(investmentSurplusPercent) {
        return this.selectSlider(this.investmentSurplus, investmentSurplusPercent);
    }
    enterPinCode(pincode) {
        return this.pincode.sendKeys(pincode);
    }

    selectAcceptanceCheckBox() {
            this.acceptanceCheckBox.click();
    }

    selectGender(genderDropDown, gender) {
        this.selectOptionFromDropDown(genderDropDown, gender);
    }

    selectSal(salDropDown :String, sal : String) {
        this.selectOptionFromDropDown(salDropDown, sal);
    }

    submitForm() {
        this.submitBtn.click();
        this.submitBtn.click();
    }
}