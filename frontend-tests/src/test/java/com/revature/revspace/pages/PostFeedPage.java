package com.revature.revspace.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PostFeedPage {
    public WebDriver driver;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-create-post/div/div/div/form/textarea")
    public WebElement newPostTextarea;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-create-post/div/div/div/form/div/button[1]/img")
    public WebElement newPostImageIcon;

    @FindBy(id = "createPostBtn")
    public WebElement createPostBtn;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]")
    public WebElement firstPostDiv;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[2]")
    public WebElement secondPostDiv;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[1]/div/div/span[1]/p")
    public WebElement firstPostCreatorName;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[3]/span[1]")
    public WebElement firstPostLikeBtn;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[3]/span[2]")
    public WebElement firstPostShowCommentsBtn;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[4]/div[1]/div[1]/input")
    public WebElement inputFirstPostCreateComment;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[4]/div[1]/div[2]/button")
    public WebElement submitFirstPostNewCommentBtn;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[4]/div[2]/div[1]")
    public WebElement firstPostFirstComment;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[4]/div[2]/div[1]/div/div[2]/span[2]")
    public WebElement firstPostFirstCommentShowReplyInterfaceBtn;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[4]/div[2]/div[1]/div/div[3]/div/div[1]/input")
    public WebElement inputFirstPostFirstCommentReply;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[4]/div[2]/div[1]/div/div[3]/div/div[2]/button")
    public WebElement submitFirstPostFirstCommentFirstReplyBtn;

    @FindBy(xpath = "/html/body/app-root/nav/div/div/div/button")
    public WebElement currentUsername;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[3]/img")
    public WebElement firstPostImage;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[11]")
    public WebElement eleventhPostDiv;

    @FindBy(xpath = "/html/body/app-root/app-top/div")
    public WebElement goTopBtnDiv;

    @FindBy(xpath = "/html/body/app-root/app-top/div/button")
    public WebElement goTopBtn;

    @FindBy(xpath = "/html/body/app-root/app-post-feed/app-populate-feed/div[1]/div/div/div/div[1]/div[3]/span[1]/span[1]")
    public WebElement firstPostLikeCount;




    public PostFeedPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
}
