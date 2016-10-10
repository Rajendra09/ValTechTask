Feature: Valtech Website Job Test

  Scenario: Verify that Latest New section is displayed on homepage
    When  I navigate to "https://www.valtech.com/"
    Then I should see "LATEST NEWS" section on home page
    And  I close the browser


  Scenario:  Verify that heading of CASES page are correct as expected
    Given I navigate to "https://www.valtech.com/"
    When I navigate to CASES page
    Then I should see Cases heading on page
    And  I close the browser

  Scenario:  Verify that heading of SERVICES page are correct as expected
    Given I navigate to "https://www.valtech.com/"
    When I navigate to SERVICES page
    Then I should see Services heading on page
    And  I close the browser

  Scenario:  Verify that heading of JOBS page are correct as expected
    Given I navigate to "https://www.valtech.com/"
    When I navigate to JOBS page
    Then I should see Jobs heading on page
    And  I close the browser

  Scenario: Verify that Latest New section is displayd on homepage
    Given I navigate to "https://www.valtech.com/"
    When  I open to Contact page
    Then I should see 30 total Valtech office
    And  I close the browser