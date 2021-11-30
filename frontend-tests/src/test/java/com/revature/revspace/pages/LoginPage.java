package com.revature.revspace.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public WebDriver driver;

    @FindBy(id = "email")
    public WebElement inputEmail;

    @FindBy(id = "password")
    public WebElement inputPassword;

    @FindBy(id = "login")
    public WebElement loginBtn;

    public LoginPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

}
