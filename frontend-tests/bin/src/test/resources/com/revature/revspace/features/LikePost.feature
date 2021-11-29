Feature: As a User, I should be able to like another user's post.

  Scenario: User can like a specific post
    Given User is on post feed page
    When User toggles the rainbow star icon 
    Then Number of like increments