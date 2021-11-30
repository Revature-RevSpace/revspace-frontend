package com.revature.revspace;

import com.revature.revspace.pages.LoginPage;
import com.revature.revspace.pages.PostFeedPage;
import com.revature.revspace.pages.EditUserProfilePage;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features", glue="com.revature.revspace.steps")
public class CucumberRunner
{
	private static final Logger LOGGER = LogManager.getLogger();
	public static PostFeedPage postFeedPage;
	public static LoginPage loginPage;

	public static final WebDriver DRIVER;
	public static final String WEB_APP_URL;

	public static EditUserProfilePage eupp;
	public static LoginPage lp;

	static
	{
		Properties props = new Properties();
		try (InputStream input = CucumberRunner.class.getClassLoader().getResourceAsStream("revspace_frontend_tests.properties"))
		{
			props.load(input);
		}
		catch (IOException e)
		{
			throw new RuntimeException("No test properties found. Please set web-driver-path and web-driver-type in src/test/resources/revspace_frontend_tests.properties");
		}
		String driverPath = props.getProperty("web-driver-path");
		String driverTypeName = props.getProperty("web-driver-type");
		String webAppURL = props.getProperty("web-app-url");
		if (driverPath == null || driverTypeName == null)
		{
			throw new RuntimeException("revspace_frontend_test.properties must specify both web-driver-path and web-driver-type");
		}
		if (webAppURL == null)
		{
			throw new RuntimeException("revspace_frontend_test.properties must specify web-app-url");
		}
		driverPath = getEnvironmentVariableIfExists(driverPath);
		driverTypeName = getEnvironmentVariableIfExists(driverTypeName);
		WEB_APP_URL = getEnvironmentVariableIfExists(webAppURL);

		WebDriverType driverType;

		try
		{
			driverType = WebDriverType.valueOf(driverTypeName);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException(String.format(
				"Could not evaluate driver type: %s -- allowed values are %s",
				driverTypeName,
				Arrays.toString(WebDriverType.values())
			));
		}

		WebDriver driver = driverType.getDriverStarter().apply(driverPath);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		DRIVER = driver;

		postFeedPage = new PostFeedPage(DRIVER);
		loginPage = new LoginPage(DRIVER);
		eupp = new EditUserProfilePage(DRIVER);
	}

	/**
	 * This will run after running all tests
	 * (it does not run if feature files are individually run at tests, unfortunately)
	 * We can terminate selenium WebDrivers from this method
	 */
	@io.cucumber.java.AfterAll
	public static void afterAll()
	{
		DRIVER.quit();
	}

	/**
	 * @param name Name of an environment variable
	 * @return environment variable value if it exists, or name if not found
	 */
	private static String getEnvironmentVariableIfExists(String name)
	{
		// convert ${VARNAME} -> VARNAME
		if (name.substring(0,2).equals("${") && name.substring(name.length()-1).equals("}"))
		{
			String innerName = name.substring(2, name.length()-1);
			String var = System.getenv(innerName);
			return var == null ? name : var;
		}
		else
		{
			return name;
		}
	}
}
