import { Given, Before, Then, After, AfterAll } from "cucumber";
import { PageUrl } from "../utils/PageUrl";
import { AppPage } from "../pageObjects/AppPage.po";
import { DemographicsSurvey } from "../pageObjects/demographicsSurvey.po";
import { expect } from "chai";
import { browser, element, by, ExpectedConditions, WebElement } from "protractor";
import { async } from "q";
import { WellnessSurvey } from "../pageObjects/wellnessSurvey.po";



let appPage: AppPage
let demographicsSurvey: DemographicsSurvey
let wellnessSurvey: WellnessSurvey


Before(({ timeout: 100 * 1000 }), async () => {
    appPage = new AppPage();
    demographicsSurvey = new DemographicsSurvey();
    wellnessSurvey = new WellnessSurvey();
    //browser.ignoreSynchronization = true;
    //var config = require("../../protractor.conf");
    // return await appPage.openUrl("http://localhost:3001/");
    // return await browser.get(config.baseUrl);
});


Given(/^Launch the \"([^\"]*)\" page$/, async (page) => {
    let url = PageUrl[page];
    browser.ignoreSynchronization = true;
    console.log(url);
    await appPage.openUrl(url);
    await appPage.explicitWait(demographicsSurvey.email);
});

Then(/^Verify heading is available$/, async () => {
    await appPage.explicitWait(demographicsSurvey.email);
    expect(await demographicsSurvey.header.isDisplayed()).to.be.true;
});


Given('Fill following {string},{string},{string},{string},{string},{string},{string} user details', async (email, contact, age, gender, sal, investmentSurplusPercent, pincode) => {
    await appPage.explicitWait(demographicsSurvey.email);
    await demographicsSurvey.enterEmail(email);
    await demographicsSurvey.enterContact(contact);
    await demographicsSurvey.enterAge(age);
    await demographicsSurvey.enterPinCode(pincode);
    await demographicsSurvey.selectGender("gender", gender);
    await demographicsSurvey.selectSal("salary", sal);
    await demographicsSurvey.selectInvestmentSurplus(investmentSurplusPercent);
});


Then(/^Select checkbox$/, async () => {
    await demographicsSurvey.selectAcceptanceCheckBox();
});

Then(/^Submit the form$/, async () => {
    let btnstatus = await demographicsSurvey.submitBtn.isEnabled()
    console.log(btnstatus);
    if (btnstatus == true) {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(async () => {
            let EC = ExpectedConditions;
            EC.elementToBeClickable(demographicsSurvey.submitBtn);
            await demographicsSurvey.submitForm();
            await appPage.explicitWait(wellnessSurvey.heading);
        });

    }
});

Then(/^Verify that form is submitted successfully and navidated to the welness survey page$/, async () => {
    await appPage.explicitWait(wellnessSurvey.heading);
    await expect(await appPage.currentUrl()).to.contains("wellness-survey");
});

AfterAll({}, async () => {
    browser.close();
});