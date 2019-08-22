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

Given(/^Launch the start page \"([^\"]*)\" URL$/, async (string) => {
     let url = PageUrl[string];
     browser.ignoreSynchronization = true;
     await startPage.openUrl(url);
});

Given(/^content is available on Start Page$/, async () => {
     expect(await startPage.content.isPresent()).to.be.true;
});

Then(/^heading is avaiable on Start Page$/, async () => {
     expect(await startPage.heading.isDisplayed()).to.be.true;
});

Then(/^start button is available on Start Page$/, async () => {
     expect(await startPage.startTestBtn.isEnabled()).to.be.true;
});

Then(/^header is available on Start Page$/, async () => {
     expect(await startPage.header.isPresent()).to.be.true;
});

Then(/^Clicking start button on Start page takes user to the \"([^\"]*)\" page$/, async (page) => {
     await startPage.clickOnStartTestBtn();
     let baseUrl = "http://localhost:3001";
     let expectedUrl = baseUrl + PageUrl[page];
     expect(await appPage.currentUrl()).to.equal(expectedUrl);
});
