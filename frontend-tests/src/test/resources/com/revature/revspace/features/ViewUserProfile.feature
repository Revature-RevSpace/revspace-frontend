Feature: view user profile

  Scenario: user profile is displayed without being logged in
    Given user is not logged in
    When user clicks link to a user profile
    Then user profile is shown

  Scenario: user views their own profile
    Given user is logged in
    When user clicks on their profile
    Then user profile is displayed

  Scenario: user views another user profile
    Given user is logged in
    When user clocks on another user
    Then user sees the other user profile displayed