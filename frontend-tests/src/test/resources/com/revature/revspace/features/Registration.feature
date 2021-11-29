Feature: Registration Page

  Scenario: User registers with valid registration fields with button
    Given User is on the registration page
    When User enters valid name
    And  enters valid email
    And enters valid birthday
    And enters valid password
    And enters valid confirms password
    And clicks on register button
    Then User has successfully registered

  Scenario: User registers with valid registration fields
    Given User is on the registration page
    When User enters valid name
    And  enters valid email
    And enters valid birthday
    And enters valid password
    And enters valid confirms password
    And presses Enter
    Then User has successfully registered


  Scenario: User registers but has wrong confirm password
    Given User is on the registration page
    When User enters valid name
    And  enters valid email
    And enters valid birthday
    And enters valid password
    And enters invalid confirms password
    Then User sees unsuccessfully registered

  Scenario: User registers with invalid email
    Given User is on the registration page
    When User enters valid name
    And  enters invalid email
    And enters valid birthday
    And enters valid password
    And enters valid confirms password
    Then User has unsuccessfully registered

  Scenario: User does not input anything
    Given User is on the registration page
    When User enters nothing
    Then User has unsuccessfully registered