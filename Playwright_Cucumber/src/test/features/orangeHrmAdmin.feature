Feature: OrangeHRM Admin Feature

    This feature file describes the navigation of admin page

    Scenario: Navigating to the admin page
    Given user is on the orangehrm login page
    When user enters valid username
    When user enters valid password
    When user clicks on the login button
    When user clicks on the admin tab
    Then user should be redirected to the admin page