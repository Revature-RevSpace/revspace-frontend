package com.revature.revspace.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EditUserProfileSteps {

    @Given("User completes log in process")
    public void userCompletesLogInProcess() {
    }

    @When("User navigates to edit profile screen")
    public void userNavigatesToEditProfileScreen() {
    }

    @Then("Edit profile screen loads")
    public void editProfileScreenLoads() {
    }

    @And("Each text input field contains existing user information")
    public void eachTextInputFieldContainsExistingUserInformation() {
    }

    @And("Each time input field contains existing user information")
    public void eachTimeInputFieldContainsExistingUserInformation() {
    }

    @Given("User completes log in process and navigates to edit profile screen")
    public void userCompletesLogInProcessAndNavigatesToEditProfileScreen() {
    }

    @When("User edits name field")
    public void userEditsNameField() {
    }

    @And("User edits githubUsername field")
    public void userEditsGithubUsernameField() {
    }

    @And("User edits title field")
    public void userEditsTitleField() {
    }

    @And("User edits location field")
    public void userEditsLocationField() {
    }

    @And("User edits aboutMe field")
    public void userEditsAboutMeField() {
    }

    @And("User accepts profile changes")
    public void userAcceptsProfileChanges() {
    }

    @Then("User is taken to the view their profile screen")
    public void userIsTakenToTheViewTheirProfileScreen() {
    }

    @And("All text field edits are present and correct")
    public void allTextFieldEditsArePresentAndCorrect() {
    }

    @When("User edits birthday field")
    public void userEditsBirthdayField() {
    }

    @And("User edits revatureJoinDate field")
    public void userEditsRevatureJoinDateField() {
    }

    @And("All time field edits are present and correct")
    public void allTimeFieldEditsArePresentAndCorrect() {
    }

    @When("User tries to add too many characters to name field")
    public void userTriesToAddTooManyCharactersToNameField() {
    }

    @Then("Additional characters past the limit are not added to the field")
    public void additionalCharactersPastTheLimitAreNotAddedToTheField() {
    }

    @And("User is notified of character limit")
    public void userIsNotifiedOfCharacterLimit() {
    }

    @When("User tries to set a birthday beyond {int} years")
    public void userTriesToSetABirthdayBeyondYears(int arg0) {
    }

    @Then("User input is rejected")
    public void userInputIsRejected() {
    }

    @And("User is notified of birthday lower bound")
    public void userIsNotifiedOfBirthdayLowerBound() {
    }

    @When("User tries to set a birthday in the future")
    public void userTriesToSetABirthdayInTheFuture() {
    }

    @And("User is notified of birthday upper bound")
    public void userIsNotifiedOfBirthdayUpperBound() {
    }

    @When("User tries to set a join date before {int}")
    public void userTriesToSetAJoinDateBefore(int arg0) {
    }

    @And("User is notified of join date lower bound")
    public void userIsNotifiedOfJoinDateLowerBound() {
    }

    @When("User tries to set a join date in the future")
    public void userTriesToSetAJoinDateInTheFuture() {
    }

    @And("User is notified of join date upper bound")
    public void userIsNotifiedOfJoinDateUpperBound() {
    }

    @When("User edits githubUsername field to valid github username")
    public void userEditsGithubUsernameFieldToValidGithubUsername() {
    }

    @Then("User clicks on test github link")
    public void userClicksOnTestGithubLink() {
    }

    @And("User is taken to correct github user page")
    public void userIsTakenToCorrectGithubUserPage() {
    }

    @And("User clicks cancel changes button")
    public void userClicksCancelChangesButton() {
    }

    @And("User profile name is unchanged")
    public void userProfileNameIsUnchanged() {
    }

    @And("User attempts to navigate away from edit profile screen")
    public void userAttemptsToNavigateAwayFromEditProfileScreen() {
    }

    @Then("User is shown a will lose edits warning")
    public void userIsShownAWillLoseEditsWarning() {
    }

    @And("User closes will lose edits warning")
    public void userClosesWillLoseEditsWarning() {
    }

    @Then("User arrives at other screen")
    public void userArrivesAtOtherScreen() {
    }

    @And("User successfully navigates away from edit profile screen")
    public void userSuccessfullyNavigatesAwayFromEditProfileScreen() {
    }
}
