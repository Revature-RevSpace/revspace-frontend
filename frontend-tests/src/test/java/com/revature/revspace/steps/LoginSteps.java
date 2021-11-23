package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class LoginSteps
{
	@Given("User is on the login screen")
	public void userIsOnTheLoginScreen()
	{
		CucumberRunner.DRIVER.get(CucumberRunner.WEB_APP_URL);
	}

	@When("User types in the correct username")
	public void userTypesInTheCorrectUsername()
	{
		WebElement usernameInput = CucumberRunner.DRIVER.findElement(By.id("email"));
		usernameInput.sendKeys("username1@email.com");
	}

	@When("User types in the correct password")
	public void userTypesInTheCorrectPassword()
	{
		WebElement passwordInput = CucumberRunner.DRIVER.findElement(By.id("password"));
		passwordInput.sendKeys("Password1");
	}

	@When("User presses enter")
	public void userPressesEnter()
	{
		CucumberRunner.DRIVER.switchTo().activeElement().sendKeys(Keys.ENTER);
	}

	@When("User clicks the login button")
	public void userClicksTheLoginButton()
	{
		CucumberRunner.DRIVER.findElement(By.id("login")).click();
	}

	@When("User presses tab")
	public void userPressesTab()
	{
		CucumberRunner.DRIVER.switchTo().activeElement().sendKeys(Keys.TAB);
	}

	@When("User types in incorrect password")
	public void userTypesInIncorrectPassword()
	{
		WebElement passwordInput = CucumberRunner.DRIVER.findElement(By.id("password"));
		passwordInput.sendKeys("this is not a password");
	}

	@When("User types in incorrect username")
	public void userTypesInIncorrectUsername()
	{
		WebElement usernameInput = CucumberRunner.DRIVER.findElement(By.id("email"));
		usernameInput.sendKeys("this is not a username");
	}

	@Then("User has successfully logged in")
	public void userHasSuccessfullyLoggedIn()
	{
		WebElement postFeed = CucumberRunner.DRIVER.findElement(By.tagName("app-post-feed"));
		Assertions.assertNotNull(postFeed);
	}

	@Then("The password field is focused")
	public void thePasswordFieldIsFocused()
	{
		WebElement passwordInput = CucumberRunner.DRIVER.findElement(By.id("password"));
		WebElement activeElement = CucumberRunner.DRIVER.switchTo().activeElement();
		Assertions.assertEquals(passwordInput, activeElement);
	}

	@Then("A login error is displayed")
	public void aLoginErrorIsDisplayed()
	{
		WebElement invalidLoginPrompt = CucumberRunner.DRIVER.findElement(By.className("invalid-login-div"));
		Assertions.assertNotNull(invalidLoginPrompt);
	}
}
