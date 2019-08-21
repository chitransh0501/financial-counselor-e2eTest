import { Given, Before, Then } from "cucumber";
import { PageUrl } from "../utils/PageUrl";
import { AppPage } from "../pageObjects/AppPage.po";
import { DemographicsSurvey } from "../pageObjects/demographicsSurvey.po";
import { expect } from "chai";

let appPage: AppPage
let demographicsSurvey: DemographicsSurvey

Before(() => {
    appPage = new AppPage();
    demographicsSurvey = new DemographicsSurvey();
})


Given(/^Launch the \"([^\"]*)\" page$/, async (page) => {
    let url = PageUrl[page];
    return await appPage.openUrl(url);
});

Then(/^Verify heading is available$/, async () => {
    return expect(await demographicsSurvey.heading.isPresent()).to.be.true;
});
