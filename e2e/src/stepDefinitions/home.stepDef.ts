import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";
import { browser } from "protractor";

import { HomePage } from "../pageObjects/home.po";
import { PageUrl } from "../utils/PageUrl";
import { AppPage } from "../pageObjects/AppPage.po";

let homePage: HomePage;
let appPage: AppPage;

Before(() => {
  homePage = new HomePage();
  appPage = new AppPage();
});

Given(/^Launch the \"([^\"]*)\" URL$/, async (string) => {
  let url = PageUrl[string];
  browser.ignoreSynchronization = true;
  await homePage.openUrl(url);
});

Then(/^content is available on Home Page$/, async () => {
  expect(await homePage.content.isPresent()).to.be.true;
});

Then(/^heading is avaiable on Home Page$/, async function () {
  expect(await homePage.heading.isPresent()).to.be.true;
});

Then(/^start button is available on Home Page$/, async () => {
  expect(await homePage.startButton.isDisplayed()).to.be.true;
  expect(await homePage.header.isEnabled()).to.be.true;
});

Then(/^header is available on Home Page$/, async () => {
  expect(await homePage.startButton.isDisplayed()).to.be.true;
  expect(await homePage.header.isEnabled()).to.be.true;
});

Then(/^Clicking start button takes user to the \"([^\"]*)\" page.$/, async (expectedPage) => {
  await homePage.clickOnStartButton();
  let currentUrl = await appPage.currentUrl();
  console.log(currentUrl);
  expect(currentUrl).to.contains(PageUrl[expectedPage]);
});