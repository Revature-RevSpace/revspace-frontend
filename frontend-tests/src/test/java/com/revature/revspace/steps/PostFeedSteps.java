package com.revature.revspace.steps;

import com.revature.revspace.CucumberRunner;
import com.revature.revspace.pages.LoginPage;
import com.revature.revspace.pages.PostFeedPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class PostFeedSteps {
    public static PostFeedPage postFeedPage = CucumberRunner.postFeedPage;
    public static LoginPage loginPage = CucumberRunner.loginPage;
    public static WebDriver driver = CucumberRunner.DRIVER;
    public static String url = CucumberRunner.WEB_APP_URL;

    @Given("User is on post feed page")
    public void user_is_on_post_feed_page() throws InterruptedException {
        driver.get(url);
        loginPage.inputEmail.sendKeys("username1@email.com");
        loginPage.inputPassword.sendKeys("Password1");
        loginPage.loginBtn.click();
    }

    @Then("User can view all posts from other users")
    public void user_can_view_all_posts_from_other_users() {

        String currentUser = postFeedPage.currentUsername.getText().substring(7);

        String firstPostCreator = postFeedPage.firstPostCreatorName.getText();

        Assertions.assertNotEquals(currentUser, firstPostCreator);
    }

    @When("User scrolls to bottom of page")
    public void user_scrolls_to_bottom_of_page() {

        for (int i = 0; i < 100; i++) {

            driver.findElement(By.xpath("/html/body")).sendKeys(Keys.ARROW_DOWN);
        }
    }

    @Then("User can view more posts that automatically populate")
    public void user_can_view_more_posts_that_automatically_populate() {

        Assertions.assertTrue(postFeedPage.eleventhPostDiv.isDisplayed());
    }

    @When("User clicks on return-to-top button")
    public void user_clicks_on_return_to_top_button() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,350)", "");
        postFeedPage.goTopBtn.click();
    }

    @Then("User returns to the top of the page")
    public void user_returns_to_the_top_of_the_page() {
        Assertions.assertEquals("scroll-to-top",postFeedPage.goTopBtnDiv.getAttribute("class"));
    }
    
    @Then("Comments for that post are displayed")
    public void comments_for_that_post_are_displayed() {

        try {

            Thread.sleep(1000);

        } catch (InterruptedException e) {

            e.printStackTrace();
        }

        Assertions.assertEquals(postFeedPage.firstPostCommentCollapse.getAttribute("class"), "collapse show");
    }

}
