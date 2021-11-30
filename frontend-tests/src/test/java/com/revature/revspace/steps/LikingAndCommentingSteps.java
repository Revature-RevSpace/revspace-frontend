package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import com.revature.revspace.pages.LoginPage;
import com.revature.revspace.pages.PostFeedPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class LikingAndCommentingSteps {

    public static PostFeedPage postFeedPage = CucumberRunner.postFeedPage;
    public static LoginPage loginPage = CucumberRunner.loginPage;
    public static WebDriver driver = CucumberRunner.DRIVER;
    public static String url = CucumberRunner.WEB_APP_URL;
    public static String commentText = "I'm a new comment!";

    @When("User clicks the star icon")
    public void user_clicks_on_star_icon() {

        postFeedPage.firstPostLikeBtn.click();
    }

    @Then("Number of like increments")
    public void number_of_likes_increments() {

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,250)", "");

        Assertions.assertEquals(postFeedPage.firstPostLikeCount.getText(), "1");
    }

    @When("User clicks on show comments button")
    public void user_clicks_on_show_comments_button() {

        for (int i = 0; i < 30; i++) {

            driver.findElement(By.xpath("/html/body")).sendKeys(Keys.ARROW_DOWN);
        }

        postFeedPage.firstPostShowCommentsBtn.click();
    }

    @When("User clicks the comment input field")
    public void user_clicks_the_comment_input_field() {

        postFeedPage.inputFirstPostCreateComment.click();
    }

    @When("User enters comment text")
    public void user_enters_comment_text() {

        postFeedPage.inputFirstPostCreateComment.sendKeys(commentText);
    }

    @When("User clicks on submit button")
    public void user_clicks_on_submit_button() {

        postFeedPage.submitFirstPostNewCommentBtn.click();
    }

    @Then("Comment is created")
    public void comment_is_created() {

        Assertions.assertEquals(postFeedPage.firstPostNewestComment.getText(), commentText);
    }
}