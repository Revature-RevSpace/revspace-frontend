Feature: view user profile

  Scenario: user views their own profile
    Given user is logged in
    When user clicks on their profile
    Then user profile is displayed

  Scenario: user views another user profile
    Given user is logged in
    When user clicks on another user
    Then user sees the other user profile displayed