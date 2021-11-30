package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import com.revature.revspace.pages.EditUserProfilePage;
import com.revature.revspace.pages.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;
import static org.junit.Assert.*;

public class EditUserProfileSteps {

    public static EditUserProfilePage eupp = CucumberRunner.eupp;
    public static LoginPage lp = CucumberRunner.loginPage;
    public static WebDriver driver = CucumberRunner.DRIVER;

    @Given("User completes log in process")
    public void userCompletesLogInProcess() {
        driver.get("http://localhost:4200/");
        driver.manage().window().fullscreen();

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        lp.inputEmail.sendKeys("mm@revature.net");
        lp.inputPassword.sendKeys("1234567");

        lp.loginBtn.click();
    }

    @When("User navigates to edit profile screen")
    public void userNavigatesToEditProfileScreen() {

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        eupp.navButton.click();

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        eupp.dropdownItem.click();

    }

    @Then("Edit profile screen loads")
    public void editProfileScreenLoads() {
        String expected = "http://localhost:4200/editprofile";
        assertEquals(expected, driver.getCurrentUrl());
    }

    @And("Each text input field contains existing user information")
    public void eachTextInputFieldContainsExistingUserInformation() {
        assertNotNull(eupp.firstNameInput);
        assertNotNull(eupp.lastNameInput);

    }

    @And("Each time input field contains existing user information")
    public void eachTimeInputFieldContainsExistingUserInformation() {
        assertNotNull(eupp.birthdayInput);
    }

//    @Given("User completes log in process and navigates to edit profile screen")
//    public void userCompletesLogInProcessAndNavigatesToEditProfileScreen() {
//    }

    @And("User edits name field")
    public void userEditsNameField() {

        // clearing the current inputs
        eupp.firstNameInput.clear();
        eupp.lastNameInput.clear();

        // entering new info
        eupp.firstNameInput.sendKeys("Lloyd");
        eupp.lastNameInput.sendKeys("Irving");
    }

    @And("User edits githubUsername field")
    public void userEditsGithubUsernameField() {
        eupp.githubInput.clear();

        // putting actual profile so we can click on it to go to github profile
        // can change to any github account!
        eupp.githubInput.sendKeys("melimartinez");
    }

    @And("User edits title field")
    public void userEditsTitleField() {
        eupp.userTitleInput.clear();
        eupp.userTitleInput.sendKeys("Pega Developer");
    }

    @And("User edits location field")
    public void userEditsLocationField() {
        eupp.locationInput.clear();
        eupp.locationInput.sendKeys("Iselia, Sylvarant");
    }

    @And("User edits aboutMe field")
    public void userEditsAboutMeField() {
        eupp.aboutmeInput.clear();
        eupp.aboutmeInput.sendKeys("I really like Java and Angular!");
    }

    @And("User accepts profile changes")
    public void userAcceptsProfileChanges() {

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        eupp.acceptButton.click();
    }

    @Then("User is taken to the view their profile screen")
    public void userIsTakenToTheViewTheirProfileScreen() {

        // looking for a specific header that is found in "View Profile"
        // component but not "Edit Profile" component
        String expectedHeader = "Revature Information";

        // there is definitely a better way to do this
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        assertEquals(expectedHeader, eupp.header.getText());
    }

    @And("All text field edits are present and correct")
    public void allTextFieldEditsArePresentAndCorrect() {

        // initializing expected values
        String expectedFirstName = "Lloyd";
        String expectedLastName = "Irving";
        String expectedGitHub = "melimartinez";
        String expectedUserTitle = "Pega Developer";
        String expectedLocation = "Iselia, Sylvarant";
        String expectedAboutMe = "I really like Java and Angular!";

        // comparing expected values to values displayed on page
        assertEquals(expectedFirstName, eupp.firstName.getText());
        assertEquals(expectedLastName, eupp.lastName.getText());
        assertEquals(expectedGitHub, eupp.github.getText());
        assertEquals(expectedUserTitle, eupp.userTitle.getText());
        assertEquals(expectedLocation, eupp.location.getText());
        assertEquals(expectedAboutMe, eupp.aboutMe.getText());

    }

    @And("User edits birthday field")
    public void userEditsBirthdayField() {
        eupp.birthdayInput.clear();
        eupp.birthdayInput.sendKeys("04191967");

    }

    @And("User edits revatureJoinDate field")
    public void userEditsRevatureJoinDateField() {
        eupp.joinDateInput.clear();
        eupp.joinDateInput.sendKeys("06162005");
    }

    @And("All time field edits are present and correct")
    public void allTimeFieldEditsArePresentAndCorrect() {

        // turns into [0]04/19/1967
        // eupp gives me []04/19/1967
        String expectedBirthday = " 4/19/1967";
        String expectedJoinDate = "6/16/2005";

        // assertEquals(expectedBirthday, eupp.birthday.getText());
        assertEquals(expectedBirthday, eupp.birthday.getAttribute("innerHTML"));
        assertEquals(expectedJoinDate, eupp.joinDate.getText());
    }

    // demonstrating character limit does not allow for further characters by using
    //'zzzz' after character limit has been reached while sending keys to demonstrate
    // they do not show up in accepted changes
    @And("User tries to add too many characters to name field")
    public void userTriesToAddTooManyCharactersToNameField() {
        // hitting the 50 character limit on input fields
        eupp.firstNameInput.sendKeys("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhzzzz");
        eupp.lastNameInput.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzz");
        eupp.githubInput.sendKeys("cccccccccccccccccccccccccccccccccccccczzzz");

        // hitting the 100 character limit on input fields
        eupp.userTitleInput.sendKeys("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" +
                "bbbbbbbbbbbbbbbbbbzzzz");

        // hitting the 500 character limit on input fields
        eupp.locationInput.sendKeys("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "ddddddzzzz");


        // hitting the 1,000 character limit on input fields
        eupp.aboutmeInput.sendKeys("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeezzzz");
    }

    @Then("Additional characters past the limit are not added to the field")
    public void additionalCharactersPastTheLimitAreNotAddedToTheField() {

        // 50 character limit
        String expectedFirstName = "Lloydhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
        String expectedLastName = "Irvingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        String expectedGitHub = "melimartinezcccccccccccccccccccccccccccccccccccccc";

        // 100 character limit
        String expectedUserTitle = "Pega Developerbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" +
                "bbbbbbbbbbbbbbbbb";

        // 500 character limit
        String expectedLocation = "Iselia, Sylvarantddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
                "dddddddd";

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        // 1,000 character limit
        String expectedAboutMe = "I really like Java and Angular!eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
                "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

        // use this method to evaluate input field values
        assertEquals(expectedFirstName, eupp.firstNameInput.getAttribute("value"));
        assertEquals(expectedLastName, eupp.lastNameInput.getAttribute("value"));
        assertEquals(expectedGitHub, eupp.githubInput.getAttribute("value"));
        assertEquals(expectedUserTitle, eupp.userTitleInput.getAttribute("value"));
        assertEquals(expectedLocation, eupp.locationInput.getAttribute("value"));
        assertEquals(expectedAboutMe, eupp.aboutmeInput.getAttribute("value"));
    }

    @And("User is notified of character limit")
    public void userIsNotifiedOfCharacterLimit() {
        String expectedFirstNameWarning = "First Name has a character limit of 50 (50/50)";
        String expectedLastNameWarning = "Last Name has a character limit of 50 (50/50)";
        String expectedGitHubWarning = "Github Username has a character limit of 50 (50/50)";
        String expectedUserTitleWarning = "Title has a character limit of 100 (100/100)";
        String expectedLocationWarning = "Location has a character limit of 500 (500/500)";
        String expectedAboutMeWarning = "About Me has a character limit of 1000 (1000/1000)";

        assertEquals(expectedFirstNameWarning, eupp.firstNameWarning.getText());
        assertEquals(expectedLastNameWarning, eupp.lastNameWarning.getText());
        assertEquals(expectedGitHubWarning, eupp.githubWarning.getText());
        assertEquals(expectedUserTitleWarning, eupp.userTitleWarning.getText());
        assertEquals(expectedLocationWarning, eupp.locationWarning.getText());
        assertEquals(expectedAboutMeWarning, eupp.aboutMeWarning.getText());
    }

    @And("User tries to set a birthday beyond {int} years")
    public void userTriesToSetABirthdayBeyondYears(int arg0) {
        eupp.birthdayInput.clear();
        eupp.birthdayInput.sendKeys("01/02/1895");

    }

    @Then("User input is rejected")
    public void userInputIsRejected() {
        String expectedBirthdayWarning = "Birthday must be within 125 years ago and the present!";

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        try {
            // this is subject to change !!!
            // we want to implement that warning shows up before user
            // presses "accept"
            eupp.acceptButton.click();

            // For some reason, the WebElement from the EditUserProfilePage is not
            // being recognized despite the fact that it clearly shows during
            // automation testing. For this reason, using this method to get the text within <span></span>
            WebElement spanWarning = driver.findElement(By.xpath("//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[1]/span"));
            String spanWarningText = spanWarning.getText();



            // make sure error message has populated
            // assertEquals(expectedBirthdayWarning, eupp.birthdayWarning.getText());
            assertEquals(expectedBirthdayWarning, spanWarningText);

        } catch (NoSuchElementException e) {
            System.out.println(e);
        }

        // check that value was rejected
        assertNotEquals("01/02/1895", eupp.birthdayInput.getAttribute("value"));
    }

    // User input is rejected for Join Date
    @Then("User input is rejected for Join Date")
    public void userInputIsRejectedForJoinDate() {

    }


    @And("User is notified of birthday lower bound")
    public void userIsNotifiedOfBirthdayLowerBound() {
        String expectedBirthdayWarning = "Birthday must be within 125 years ago and the present!";

        // For some reason, the WebElement from the EditUserProfilePage is not
        // being recognized despite the fact that it clearly shows during
        // automation testing. For this reason, using this method to get the text within <span></span>
        // String spanWarning = driver.findElement(By.xpath("//*[@id=\"birthday-warning\"]")).getText();

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // this is subject to change !!!
        // we want to implement that warning shows up before user
        // presses "accept"
        eupp.acceptButton.click();

        try {
            WebElement spanWarning = driver.findElement(By.xpath("//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[1]/span"));
            String spanWarningText = spanWarning.getText();

            driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

            // make sure error message has populated display lower bound
            assertEquals(expectedBirthdayWarning, spanWarningText);
        } catch (NoSuchElementException e) {
            System.out.println(e);
        }



    }

    @And("User tries to set a birthday in the future")
    public void userTriesToSetABirthdayInTheFuture() {
        eupp.birthdayInput.clear();
        eupp.birthdayInput.sendKeys("01/02/2025");
    }

    @And("User is notified of birthday upper bound")
    public void userIsNotifiedOfBirthdayUpperBound() {
        String expectedBirthdayWarning = "Birthday must be within 125 years ago and the present!";

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,350)", "");

        // this is subject to change !!!
        // we want to implement that warning shows up before user
        // presses "accept"
        eupp.acceptButton.click();

        // make sure error message has populated display lower bound
        assertEquals(expectedBirthdayWarning, eupp.birthdayWarning.getText());
    }

    @And("User tries to set a join date before {int}")
    public void userTriesToSetAJoinDateBefore(int arg0) {
        eupp.joinDateInput.clear();
        eupp.joinDateInput.sendKeys("03/04/2002");
    }

    @Then("User is notified of join date lower bound")
    public void userIsNotifiedOfJoinDateLowerBound() {
        String expectedJoinDateWarning = "Revature Join Date must be between 2003 and the present!";

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // this is subject to change !!!
        // we want to implement that warning shows up before user
        // presses "accept"
        eupp.acceptButton.click();

        // make sure error message has populated display lower bound
        assertEquals(expectedJoinDateWarning, eupp.joinDateWarning.getText());

        // check that value was rejected
        assertNotEquals("03/04/2002", eupp.joinDateInput.getAttribute("value"));
    }

    @And("User tries to set a join date in the future")
    public void userTriesToSetAJoinDateInTheFuture() {
        eupp.joinDateInput.clear();
        eupp.joinDateInput.sendKeys("03/04/2025");
    }

    @Then("User is notified of join date upper bound")
    public void userIsNotifiedOfJoinDateUpperBound() {
        String expectedJoinDateWarning = "Revature Join Date must be between 2003 and the present!";

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // this is subject to change !!!
        // we want to implement that warning shows up before user
        // presses "accept"
        eupp.acceptButton.click();

        // make sure error message has populated display lower bound
        assertEquals(expectedJoinDateWarning, eupp.joinDateWarning.getText());

        // check that value was rejected
        assertNotEquals("03/04/2025", eupp.joinDateInput.getAttribute("value"));
    }

    // RyanWhitehill-Rev
    @And("User edits githubUsername field to valid github username")
    public void userEditsGithubUsernameFieldToValidGithubUsername() {
        eupp.githubInput.clear();

        // putting actual profile so we can click on it to go to github profile
        // can change to any github account!
        eupp.githubInput.sendKeys("RyanWhitehill-Rev");
    }

    @Then("User clicks on test github link")
    public void userClicksOnTestGithubLink() {

        String gitHubLinkS = eupp.gitHubLink.getText();
        // open a new tab
        //to perform Scroll on application using Selenium
        // JavascriptExecutor js = (JavascriptExecutor) driver;
        // js.executeScript("window.open(`" + gitHubLinkS + "`, '_blank');");

        driver.get(gitHubLinkS);

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//        ArrayList<String> tabs = new ArrayList<String> (driver.getWindowHandles());
//        driver.switchTo().window(tabs.get(1)); //switches to new tab
//
//        // use the link populated by our GitHub data
//        driver.get(eupp.gitHubLink.getText());



    }

    @And("User is taken to correct github user page")
    public void userIsTakenToCorrectGithubUserPage() {
        String expectedGitHubUsername = "RyanWhitehill-Rev";

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        // using to verify for myself
        String gitUser = driver.findElement(By.xpath("//*[@id=\"js-pjax-container\"]/div[2]/div/div[1]/div/div[2]/div[1]/div[2]/h1/span[2]")).getText();
        // String spanWarning = driver.findElement(By.id("birthday-warning")).getText();
        System.out.println("GitHub username in website:" + gitUser);

        assertEquals(expectedGitHubUsername, eupp.gitHubUsername.getText());

        // close current tab
        // driver.close();

        // go back to revspace application
        // ArrayList<String> tabs = new ArrayList<String> (driver.getWindowHandles());
        // driver.switchTo().window(tabs.get(0)); // switch back to main screen
        // i'm not sure I need this?
        driver.get("http://localhost:4200/editprofile");
    }

    @And("User clicks cancel changes button")
    public void userClicksCancelChangesButton() {

        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        eupp.cancelButton.click();
        eupp.stayButton.click();
    }

    @Then("User profile name is unchanged")
    public void userProfileNameIsUnchanged() {
        String expectedFirstName = "Lloyd";
        String expectedLastName = "Irving";

        // comparing expected values to values displayed on page
        // System.out.println(eupp.firstName.getText());
        assertEquals(expectedFirstName, eupp.firstNameInput.getAttribute("value"));
        assertEquals(expectedLastName, eupp.lastNameInput.getAttribute("value"));
    }

    @And("User attempts to navigate away from edit profile screen")
    public void userAttemptsToNavigateAwayFromEditProfileScreen() {
        //to perform Scroll on application using Selenium
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,450)", "");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        eupp.cancelButton.click();
    }

    @Then("User is shown a will lose edits warning")
    public void userIsShownAWillLoseEditsWarning() {
        String expectedWarning = "Your changes will be dismissed if you do!";

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        assertEquals(expectedWarning, eupp.loseChangesWarning.getText());
    }

    @And("User closes will lose edits warning")
    public void userClosesWillLoseEditsWarning() {
         // eupp.stayButton.click();

        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // eupp.cancelButton.click();
        eupp.leaveButton.click();
    }

    // User leaves edit profile screen
    @And("User leaves edit profile screen")
    public void userLeavesEditProfileScreen() {
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        eupp.cancelButton.click();
        eupp.leaveButton.click();
    }

    @Then("User arrives at other screen")
    public void userArrivesAtOtherScreen() {
        //String expected = "http://localhost:4200/viewprofile/1";
        //assertEquals(expected, driver.getCurrentUrl());

        String expectedHeader = "Revature Information";

        // there is definitely a better way to do this
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        assertEquals(expectedHeader, eupp.header.getText());
    }

    @And("User successfully navigates away from edit profile screen")
    public void userSuccessfullyNavigatesAwayFromEditProfileScreen() {
        // String expected = "http://localhost:4200/viewprofile/1";
        // assertEquals(expected, driver.getCurrentUrl());

        String expectedHeader = "Revature Information";

        // there is definitely a better way to do this
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        assertEquals(expectedHeader, eupp.header.getText());
    }
}
