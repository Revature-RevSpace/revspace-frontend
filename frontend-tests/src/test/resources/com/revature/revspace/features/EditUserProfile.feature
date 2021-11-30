Feature: User can edit their profile

  Scenario: User profile information loads into the input fields
    Given User completes log in process
    When User navigates to edit profile screen
    Then Edit profile screen loads
    And Each text input field contains existing user information
    And Each time input field contains existing user information

  Scenario: User can edit the text fields of their profile
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits name field
    And User edits githubUsername field
    And User edits title field
    And User edits location field
    And User edits aboutMe field
    And User accepts profile changes
    Then User is taken to the view their profile screen
    And All text field edits are present and correct

  Scenario: User can edit the time fields of their profile
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits birthday field
    And User edits revatureJoinDate field
    And User accepts profile changes
    Then User is taken to the view their profile screen
    And All time field edits are present and correct
#
  Scenario: User text input is limited to database varchar limits
    Given User completes log in process
    When User navigates to edit profile screen
    And User tries to add too many characters to name field
    Then Additional characters past the limit are not added to the field
    And User is notified of character limit

  Scenario: User birthday input is limited to past 125 years
    Given User completes log in process
    When User navigates to edit profile screen
    And User tries to set a birthday beyond 125 years
    Then User input is rejected
    And User is notified of birthday lower bound
#
  Scenario: User birthday input is limited to the past
    Given User completes log in process
    When User navigates to edit profile screen
    And User tries to set a birthday in the future
    Then User input is rejected
    And User is notified of birthday upper bound

  Scenario: User join date input is limited during or after 2003
    Given User completes log in process
    When User navigates to edit profile screen
    And User tries to set a join date before 2003
    Then User is notified of join date lower bound

  Scenario: User join date input is limited to the past
    Given User completes log in process
    When User navigates to edit profile screen
    And User tries to set a join date in the future
    Then User is notified of join date upper bound

  Scenario: User can test github username link on edit page
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits githubUsername field to valid github username
    Then User clicks on test github link
    And User is taken to correct github user page

  Scenario: User can deliberately cancel edits
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits name field
    And User clicks cancel changes button
    Then User profile name is unchanged

  Scenario: User gets a warning when attempting to navigate away from edit profile screen after edits
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits name field
    And User attempts to navigate away from edit profile screen
    Then User is shown a will lose edits warning

  Scenario: User can navigate away from edit profile screen after edits
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits name field
    And User attempts to navigate away from edit profile screen
    And User closes will lose edits warning
    Then User arrives at other screen

  Scenario: Unaccepted changes are lost when navigating to another screen
    Given User completes log in process
    When User navigates to edit profile screen
    And User edits name field
    And User attempts to navigate away from edit profile screen
    And User closes will lose edits warning
    And User successfully navigates away from edit profile screen