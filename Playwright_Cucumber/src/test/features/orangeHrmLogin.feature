Feature: OrangeHRM Login Feature

    This feature file describes the login functionality of the OrangeHRM application.

    Scenario: Login with valid credentials
    Given user is on the orangehrm login page
    When user enters valid username
    When user enters valid password
    When user clicks on the login button
    Then user should be redirected to the dashboard page