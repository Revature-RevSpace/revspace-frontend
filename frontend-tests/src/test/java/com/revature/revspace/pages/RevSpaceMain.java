package com.revature.revspace.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RevSpaceMain {
    public WebDriver driver;
    public RevSpaceMain( WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    //Register WebElements

    @FindBy(id = "userFirstName")
    public WebElement regFirstName;

    @FindBy(id = "userLastName")
    public WebElement regLastName;

    @FindBy(id = "userEmailValue")
    public WebElement regEmail;

    @FindBy(id = "userDOBValue")
    public WebElement regDOB;

    @FindBy(id = "userPasswordValue")
    public WebElement regPassword;

    @FindBy(id = "userConfirmPasswordValue")
    public WebElement regConfirmPassword;

    @FindBy(xpath = "/html/body/app-root/app-register-form/div/div/div/div[3]/button[2]")
    public WebElement regButton;
    



}
