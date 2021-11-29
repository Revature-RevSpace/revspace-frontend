Feature: As a User, I should be able to create a post with text and images

  Scenario: User can create post with text and images
    Given User is on post feed page
    When User enters a post 
    And User uploads an image
    And User clicks on post button
    Then Post will be successfully created

