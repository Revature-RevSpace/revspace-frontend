package com.revature.revspace;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features", glue="com.revature.revspace.steps")
public class CucumberRunner
{
	/**
	 * This will run after running all tests
	 * (it does not run if feature files are individually run at tests, unfortunately)
	 * We can terminate selenium WebDrivers from this method
	 */
	@io.cucumber.java.AfterAll
	public static void afterAll()
	{
	}
}
