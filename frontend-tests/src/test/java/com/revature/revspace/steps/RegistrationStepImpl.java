package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import com.revature.revspace.pages.RevSpaceMain;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class RegistrationStepImpl {

    //public static WebDriver driver = CucumberRunner.DRIVER;
    public static RevSpaceMain revSpaceMain = new RevSpaceMain(CucumberRunner.DRIVER);
    public static int increase = 0;
    public static String email = System.currentTimeMillis() + increase + "@gmail.com";

    @Given("User is on the registration page")
    public void user_is_on_the_registration_page() {
        // Write code here that turns the phrase above into concrete actions
        CucumberRunner.DRIVER.get(CucumberRunner.WEB_APP_URL);
    revSpaceMain.regLoginButton.click();




    }

    @When("User enters valid name")
    public void user_enters_valid_name() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regFirstName.sendKeys("Bill");
        revSpaceMain.regLastName.sendKeys("Joe");
    }

    @When("enters valid email")
    public void enters_valid_email() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regEmail.sendKeys(email);
        increase++;
        email = System.currentTimeMillis() + increase + "@gmail.com";
    }

    @When("enters valid birthday")
    public void enters_valid_birthday() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regDOB.sendKeys("06/03/1980");
    }

    @When("enters valid password")
    public void enters_valid_password() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regPassword.sendKeys("password1");
    }

    @When("enters valid confirms password")
    public void enters_valid_confirms_password() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regConfirmPassword.sendKeys("password1");
    }

    @When("clicks on register button")
    public void clicks_on_register_button() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regButton.click();
    }

    @Then("User has successfully registered")
    public void user_has_successfully_registered() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals("You have successfully registered to RevSpace! Log In with your Email and Password", revSpaceMain.regSuccessStatement.getText());
    }

    @When("presses Enter")
    public void presses_enter() {
        // Write code here that turns the phrase above into concrete actions
       CucumberRunner.DRIVER.switchTo().activeElement().sendKeys(Keys.TAB);
        CucumberRunner.DRIVER.switchTo().activeElement().sendKeys(Keys.TAB);
        CucumberRunner.DRIVER.switchTo().activeElement().sendKeys(Keys.ENTER);


    }

    @When("enters invalid confirms password")
    public void enters_invalid_confirms_password() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regConfirmPassword.sendKeys("password2");
    }

    @Then("User has unsuccessfully registered")
    public void user_has_unsuccessfully_registered() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals("h5", revSpaceMain.regHeader.getTagName());
    }

    @When("enters invalid email")
    public void enters_invalid_email() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regEmail.sendKeys("");
    }

    @When("User enters nothing")
    public void user_enters_nothing() {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("clicks register button")
    public void clicks_register_button() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regButton.click();
    }

    @Then("User sees unsuccessfully registered")
    public void userSeesUnsuccessfullyRegistered() {
        Assert.assertEquals("Passwords do not match", revSpaceMain.regPasswordError.getText());
    }
}
