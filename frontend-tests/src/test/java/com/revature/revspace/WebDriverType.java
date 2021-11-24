package com.revature.revspace;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.function.Function;

public enum WebDriverType
{
	FIREFOX(driverPath ->
	{
		System.setProperty("webdriver.gecko.driver", driverPath);
		return new FirefoxDriver();
	}),
	CHROME(driverPath ->
	{
		System.setProperty("webdriver.chrome.driver", driverPath);
		return new ChromeDriver();
	});

	private final Function<String, WebDriver> driverStarter;

	WebDriverType(Function<String, WebDriver> driverStarter)
	{
		this.driverStarter = driverStarter;
	}

	/**
	 * Function that takes in a driver path
	 * (e.g. C:/ProgramFiles/Selenium/chromedriver.exe),
	 * sets a relevant system property to that path,
	 * and returns a webdriver
	 */
	public Function<String, WebDriver> getDriverStarter()
	{
		return this.driverStarter;
	}
}
