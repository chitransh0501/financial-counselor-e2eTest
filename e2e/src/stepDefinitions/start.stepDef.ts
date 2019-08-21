import { Before, Given, Then } from "cucumber";
import { AppPage } from "../pageObjects/AppPage.po";
import { StartPage } from "../pageObjects/start.po";
import { PageUrl } from "../utils/PageUrl";
import { browser } from "protractor";

import { expect } from "chai";
import { start } from "repl";
import { AsyncResource } from "async_hooks";
import { async } from "q";

let appPage: AppPage;
let startPage: StartPage;


Before(() => {
     appPage = new AppPage();
     startPage = new StartPage();
});


Given(/^content is available on Start Page$/, async () => {
     return expect(await startPage.content.isPresent()).to.be.true;
});

Then(/^heading is avaiable on Start Page$/, async () => {
     return expect(await startPage.heading.isDisplayed()).to.be.true;
});

Then(/^start button is available on Start Page$/, async () => {
     return expect(await startPage.startTestBtn.isEnabled()).to.be.true;
});

Then(/^header is available on Start Page$/, async () => {
     return expect(await startPage.header.isPresent()).to.be.true;
});

Then(/^Clicking start button takes user to the  \"([^\"]*)\" page.$/, async (page) => {
     await startPage.clickOnStartTestBtn();
     let baseUrl = "";
     let expectedUrl = baseUrl + page;
     return expect(await startPage.currentUrl()).to.equal(expectedUrl);
});
