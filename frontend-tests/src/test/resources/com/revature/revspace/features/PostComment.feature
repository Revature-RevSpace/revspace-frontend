Feature: As a User, I should be able to comment on posts or reply to comments on posts

  Scenario: User can comment on a post or reply to comments on posts
    Given User is on post feed page
    When User clicks on comment button
    And Comment section is expanded
    When User enters text to comment 
    And User clicks on create comment button
    Then Comment is created 