Feature: Home page Testing
    Check all the scenarios related to home page.

    Scenario: Verify that luanching URL displays the home page.
        Given Launch the home page "HomePage" URL
        Then  content is available on Home Page
        And   heading is avaiable on Home Page
        And   start button is available on Home Page
        And   header is available on Home Page
        And   Clicking start button takes user to the "StartPage" page.

