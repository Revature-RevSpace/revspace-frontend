Feature: Logging in
  Scenario: User logs in with correct username and password
    Given User is on the login screen
    When User types in the correct username
    And User types in the correct password
    And User presses enter
    Then User has successfully logged in
    #

  Scenario: User logs in with the login button
    Given User is on the login screen
    When User types in the correct username
    And User types in the correct password
    And User clicks the login button
    Then User has successfully logged in
    #

  Scenario: User tabs from username to password field
    Given User is on the login screen
    When User types in the correct username
    And User presses tab
    Then The password field is focused
    #

  Scenario: User logs in with correct username and incorrect password
    Given User is on the login screen
    When User types in the correct username
    And User types in incorrect password
    And User presses enter
    Then A login error is displayed
    #

  Scenario: User logs in with an incorrect username and correct password
    Given User is on the login screen
    When User types in incorrect username
    And User types in the correct password
    And User presses enter
    Then A login error is displayed
    #

  Scenario: User logs in with an incorrect username and incorrect password
    Given User is on the login screen
    When User types in incorrect username
    And User types in incorrect password
    And User presses enter
    Then A login error is displayed
    #