package com.revature.revspace.steps;

import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.revature.revspace.CucumberRunner;
import com.revature.revspace.pages.LoginPage;
import com.revature.revspace.pages.PostFeedPage;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CreatePostSteps {
	
	public static PostFeedPage postFeedPage = CucumberRunner.postFeedPage;
    public static LoginPage loginPage = CucumberRunner.loginPage;
    public static WebDriver driver = CucumberRunner.DRIVER;
    public static String url = CucumberRunner.WEB_APP_URL;
    public static String postMsg = "Hi, how are you?";
    public static String imagePath = "C:\\Users\\tlath\\OneDrive\\Pictures\\spo.jpg";

	
	
	@When("User enters a post")
	public void user_enters_a_post() {
		postFeedPage.newPostTextarea.click();
		postFeedPage.newPostTextarea.sendKeys(postMsg);
	    
	}
	@When("User uploads an image")
	public void user_uploads_an_image() {
		    
	    postFeedPage.newPostImageInput.sendKeys(imagePath);
	}
	
	@When("User clicks on post button")
	public void user_clicks_on_post_button() {

		for (int i = 0; i < 7; i++) {

			driver.findElement(By.xpath("/html/body")).sendKeys(Keys.ARROW_DOWN);
		}

	    postFeedPage.createPostBtn.click();
	}
	
	@Then("Post will be successfully created")
	public void post_will_be_successfully_created() {

		//sleep a second
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		Assertions.assertEquals(postFeedPage.firstPostMsg.getText(), postMsg);
	   
	}

}
