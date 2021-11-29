Feature: The navbar is responsive and displayed
  Scenario: The navbar is displayed if the user is logged in
    Given User is on the mainpage
    When User logs in
    Then User sees navbar displayed

  Scenario: User can navigate to their profile
    Given User is logged in
    When User clicks on their profile
    Then User profile is displayed

  Scenario: User can navigate to posts feed
    Given User is logged in
    When User can clicks on posts feed
    Then Posts are displayed