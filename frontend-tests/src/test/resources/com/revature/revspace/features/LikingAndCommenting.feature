Feature: As a User, I should be able to comment on and like other users' posts.

  Scenario: User can like a specific post
    Given User is on post feed page
    When User clicks the star icon
    Then Number of like increments

  #Flaky test! "User clicks on show comments button" is very flaky
  Scenario: User can comment on a post or reply to comments on posts
    Given User is on post feed page
    When User clicks on show comments button
    And User clicks the comment input field
    And User enters comment text
    And User clicks on submit button
    Then Comment is created