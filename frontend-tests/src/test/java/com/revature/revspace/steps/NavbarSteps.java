package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class NavbarSteps {
    @Given("User is on the mainpage")
    public void user_is_on_the_mainpage() {
        CucumberRunner.DRIVER.get(CucumberRunner.WEB_APP_URL);
    }
    @When("User logs in")
    public void user_logs_in() {
        CucumberRunner.DRIVER.manage().window().maximize();
        WebElement usernameInput = CucumberRunner.DRIVER.findElement(By.id("email"));
        usernameInput.clear();
        usernameInput.sendKeys("username1@email.com");
        WebElement passwordInput = CucumberRunner.DRIVER.findElement(By.id("password"));
        passwordInput.clear();
        passwordInput.sendKeys("Password1");
        CucumberRunner.DRIVER.findElement(By.id("login")).click();
    }
    @Then("User sees navbar displayed")
    public void user_sees_navbar_displayed() {
        WebElement postFeedButton = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/nav/div/div/ul/li/a"));
        Assertions.assertTrue(postFeedButton.isDisplayed());
    }

    @Given("User is logged in")
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
    @When("User clicks on their profile")
    public void user_clicks_on_their_profile() {
        WebElement dropDown = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/nav/div/div/div/button"));
        dropDown.click();
        WebElement userProfileButton = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/nav/div/div/div/ul/li[1]/a"));
        userProfileButton.click();
    }
    @Then("User profile is displayed")
    public void user_profile_is_displayed() {
        WebElement userFirstname = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/h3"));
        Assertions.assertEquals("Revature Information", userFirstname.getText());
    }
    @When("User can clicks on posts feed")
    public void user_can_clicks_on_posts_feed() {
        WebElement postFeedButton = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/nav/div/div/ul/li/a"));
        postFeedButton.click();
    }
    @Then("Posts are displayed")
    public void posts_are_displayed() {
        WebElement userPost = CucumberRunner.DRIVER.findElement(By.xpath("/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[1]/div/div/span[1]/p"));
        Assertions.assertTrue("Charles Mann".equals(userPost.getText()));
        CucumberRunner.DRIVER.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

    }
}
