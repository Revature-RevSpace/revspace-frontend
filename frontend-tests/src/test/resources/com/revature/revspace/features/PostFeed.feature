Feature: As a User, I should have a post feed that displays other user's posts.

  Scenario: User can view post feed
    Given User is on post feed page
    Then User can view all posts from other users

  Scenario: User can scroll infinitely
    Given User is on post feed page
    When User scrolls to bottom of page
    Then User can view more posts that automatically populate

  Scenario: Return-to-top button works
    Given User is on post feed page
    When User clicks on return-to-top button
    Then User returns to the top of the page

  #Flaky test! "User clicks on show comments button" is very flaky
  Scenario: Display-comments button works
    Given User is on post feed page
    When User clicks on show comments button
    Then Comments for that post are displayed