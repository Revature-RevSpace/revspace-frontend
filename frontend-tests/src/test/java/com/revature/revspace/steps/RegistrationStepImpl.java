package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import com.revature.revspace.pages.RevSpaceMain;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class RegistrationStepImpl {

    public static RevSpaceMain revSpaceMain = CucumberRunner.RevspaceMain;
    public static WebDriver driver = CucumberRunner.driver;

    @Given("User is on the registration page")
    public void user_is_on_the_registration_page() {
        // Write code here that turns the phrase above into concrete actions
    driver.get("http://localhost:4200");
    }

    @When("User enters valid name")
    public void user_enters_valid_name() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regFirstName.sendKeys("");
        revSpaceMain.regLastName.sendKeys("");
    }

    @When("enters valid email")
    public void enters_valid_email() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regEmail.sendKeys("");
    }

    @When("enters valid birthday")
    public void enters_valid_birthday() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regDOB.sendKeys("");
    }

    @When("enters valid password")
    public void enters_valid_password() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regPassword.sendKeys("");
    }

    @When("enters valid confirms password")
    public void enters_valid_confirms_password() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regConfirmPassword.sendKeys("");
    }

    @When("clicks on register button")
    public void clicks_on_register_button() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regButton.click();
    }

    @Then("User has successfully registered")
    public void user_has_successfully_registered() {
        // Write code here that turns the phrase above into concrete actions
        String url = "http://localhost:4200/viewprofile";
        Assert.assertEquals(url, driver.getCurrentUrl());
    }

    @When("presses Enter")
    public void presses_enter() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("enters invalid confirms password")
    public void enters_invalid_confirms_password() {
        // Write code here that turns the phrase above into concrete actions
        revSpaceMain.regConfirmPassword.sendKeys("");
    }

    @Then("User has unsuccessfully registered")
    public void user_has_unsuccessfully_registered() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
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
}
