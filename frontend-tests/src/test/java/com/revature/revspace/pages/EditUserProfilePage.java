package com.revature.revspace.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EditUserProfilePage {

    WebDriver driver;

    public EditUserProfilePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    // log in page
//    @FindBy(id = "email")
//    public WebElement emailInput;
//
//    @FindBy(id = "password")
//    public WebElement passwordInput;
//
//    @FindBy(id = "login")
//    public WebElement loginButton;

    // navbar
    @FindBy(id = "dropdownMenuButton1")
    public WebElement navButton;

    @FindBy(xpath = "//*[@id=\"navbarSupportedContent\"]/div/ul/li[2]/a")
    public WebElement dropdownItem;

    // view profile page
    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[1]/h1/span[1]")
    public WebElement firstName;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[1]/h1/span[2]")
    public WebElement lastName;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[2]/div/div[2]/div/span[2]")
    public WebElement github;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/span[1]")
    public WebElement userTitle;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/span[4]")
    public WebElement location;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[3]/p")
    public WebElement aboutMe;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/span[3]")
    public WebElement birthday;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/span[2]")
    public WebElement joinDate;

    @FindBy(xpath = "/html/body/app-root/app-view-profile-component/div/div[2]/div/div[1]/div/h3")
    public WebElement header;

    // edit profile page
    @FindBy(id = "edit-user-first-name-input")
    public WebElement firstNameInput;

    @FindBy(id = "edit-user-last-name-input")
    public WebElement lastNameInput;

    @FindBy(id = "edit-user-github-username-input")
    public WebElement githubInput;

    @FindBy(id = "edit-user-title-input")
    public WebElement userTitleInput;

    @FindBy(id = "edit-user-join-date-input")
    public WebElement joinDateInput;

    @FindBy(id = "edit-user-location-input")
    public WebElement locationInput;

    @FindBy(id = "edit-user-aboutme-input")
    public WebElement aboutmeInput;

    @FindBy(id = "edit-user-birthday-input")
    public WebElement birthdayInput;

    @FindBy(id = "edit-user-accept-changes-button")
    public WebElement acceptButton;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[1]/div[1]/span[1]")
    public WebElement firstNameWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[1]/div[1]/span[2]")
    public WebElement lastNameWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[2]/span[1]")
    public WebElement githubWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[1]/span[1]")
    public WebElement userTitleWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[1]/span[2]")
    public WebElement locationWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[3]/span")
    public WebElement aboutMeWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[1]/span")
    public WebElement joinDateWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[1]/span")
    public WebElement birthdayWarning;

    @FindBy(xpath = "//*[@id=\"edit-user-profile-div\"]/div/div[2]/div[2]/p/a")
    public WebElement gitHubLink;

    @FindBy(id = "cancel-changes-button")
    public WebElement cancelButton;

    @FindBy(id = "leave-button")
    public WebElement leaveButton;

    @FindBy(id = "stay-button")
    public WebElement stayButton;

    @FindBy(id = "lose-changes-warning")
    public WebElement loseChangesWarning;

    // GitHub
    @FindBy(xpath = "//*[@id=\"js-pjax-container\"]/div[2]/div/div[1]/div/div[2]/div[1]/div[2]/h1/span[2]")
    public WebElement gitHubUsername;
}
