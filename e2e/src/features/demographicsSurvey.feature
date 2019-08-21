Feature: Tests for Demographics page.
                This user story is to fill the form with valid and invalid details.


                Scenario : Verify heading and form is available.
                Given Launch the "DemographicsSurvey" page
                Then Verify heading is available

                Scenario : Verify that user is able to fill the form with valid details.
                Given Fill name,contact, age, gender ,sal, investment surplus, pincode,
                Then Select checkbox
                Then Submit the form
                Then Verify that form is submitted successfully

                Scenario : Verify that user is not able to fill the form without selecting checkbox.
                Given  Fill name,contact, age, gender ,sal, investment surplus, pincode,
                Then Keep checkbox unselected
                Then Verify that submit button is disabled

                Scenario : Verify that user is not able to fill the form without filling complete form.
                Given  Fill name,contact, age, gender ,sal, investment
                Then   select the checkbox
                Then Verify that submit button is disabled



