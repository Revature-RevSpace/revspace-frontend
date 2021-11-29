package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class ViewUserProfileSteps {
    @Given("user is logged in")
    public void user_is_logged_in() {
        CucumberRunner.DRIVER.get(CucumberRunner.WEB_APP_URL);
        CucumberRunner.DRIVER.manage().window().maximize();
        WebElement usernameInput = CucumberRunner.DRIVER.findElement(By.id("email"));
        usernameInput.clear();
        usernameInput.sendKeys("username1@email.com");
        WebElement passwordInput = CucumberRunner.DRIVER.findElement(By.id("password"));
        passwordInput.clear();
        passwordInput.sendKeys("Password1");
        CucumberRunner.DRIVER.findElement(By.id("login")).click();

    }
    @When("user clicks on their profile")
    public void user_clicks_on_their_profile() {
        WebElement dropDown = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/nav/div/div/div/button"));
        dropDown.click();
        WebElement userProfileButton = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/nav/div/div/div/ul/li[1]/a"));
        userProfileButton.click();
    }
    @Then("user profile is displayed")
    public void user_profile_is_displayed() {
        WebElement userFirstname = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/h3"));
        Assertions.assertEquals("Revature Information", userFirstname.getText());
    }

    @When("user clicks on another user")
    public void user_clicks_on_another_user() {
        WebElement userProfile = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[1]/div/div/span[1]/p"));
        userProfile.click();
    }
    @Then("user sees the other user profile displayed")
    public void user_sees_the_other_user_profile_displayed() {
        WebElement userFirstname = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/h3"));
        Assertions.assertEquals("Revature Information", userFirstname.getText());

    }
}
