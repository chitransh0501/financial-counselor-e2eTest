Feature: verify all the scenarios related to start page
    This is user story to test all the tests related to Start Page.

    Scenario:verify start page whether start button, content and heading available.

        Given Launch the "StartPage" URL
        Then  content is available on Start Page
        And   heading is avaiable on Start Page
        And   start button is available on Start Page
        And   header is available on Start Page
        And   Clicking start button on Start page takes user to the "DemographicsSurvey" page
