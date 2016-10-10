$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/testcases/ValTechTest.feature");
formatter.feature({
  "line": 1,
  "name": "Valtech Website Job Test",
  "description": "",
  "id": "valtech-website-job-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify that Latest New section is displayed on homepage",
  "description": "",
  "id": "valtech-website-job-test;verify-that-latest-new-section-is-displayed-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.valtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should see \"LATEST NEWS\" section on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.valtech.com/",
      "offset": 15
    }
  ],
  "location": "StepDef.i_navigate_to(String)"
});
formatter.result({
  "duration": 20226241731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LATEST NEWS",
      "offset": 14
    }
  ],
  "location": "StepDef.i_should_see_section_on_home_page(String)"
});
formatter.result({
  "duration": 175893159,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 14973519,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify that heading of CASES page are correct as expected",
  "description": "",
  "id": "valtech-website-job-test;verify-that-heading-of-cases-page-are-correct-as-expected",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"https://www.valtech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I navigate to CASES page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see Cases heading on page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.valtech.com/",
      "offset": 15
    }
  ],
  "location": "StepDef.i_navigate_to(String)"
});
formatter.result({
  "duration": 11344983438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASES",
      "offset": 14
    }
  ],
  "location": "StepDef.i_navigate_to_page(String)"
});
formatter.result({
  "duration": 7362394058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cases",
      "offset": 13
    }
  ],
  "location": "StepDef.i_should_see_heading_on_page(String)"
});
formatter.result({
  "duration": 353330920,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 7653141,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify that heading of SERVICES page are correct as expected",
  "description": "",
  "id": "valtech-website-job-test;verify-that-heading-of-services-page-are-correct-as-expected",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I navigate to \"https://www.valtech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to SERVICES page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see Services heading on page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.valtech.com/",
      "offset": 15
    }
  ],
  "location": "StepDef.i_navigate_to(String)"
});
formatter.result({
  "duration": 10494670078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SERVICES",
      "offset": 14
    }
  ],
  "location": "StepDef.i_navigate_to_page(String)"
});
formatter.result({
  "duration": 4375093108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Services",
      "offset": 13
    }
  ],
  "location": "StepDef.i_should_see_heading_on_page(String)"
});
formatter.result({
  "duration": 42400563,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 7775903,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that heading of JOBS page are correct as expected",
  "description": "",
  "id": "valtech-website-job-test;verify-that-heading-of-jobs-page-are-correct-as-expected",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I navigate to \"https://www.valtech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I navigate to JOBS page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see Jobs heading on page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.valtech.com/",
      "offset": 15
    }
  ],
  "location": "StepDef.i_navigate_to(String)"
});
formatter.result({
  "duration": 10765571840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOBS",
      "offset": 14
    }
  ],
  "location": "StepDef.i_navigate_to_page(String)"
});
formatter.result({
  "duration": 1727312452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jobs",
      "offset": 13
    }
  ],
  "location": "StepDef.i_should_see_heading_on_page(String)"
});
formatter.result({
  "duration": 3618227959,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 7368141,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify that Latest New section is displayd on homepage",
  "description": "",
  "id": "valtech-website-job-test;verify-that-latest-new-section-is-displayd-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"https://www.valtech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I open to Contact page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should see 30 total Valtech office",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.valtech.com/",
      "offset": 15
    }
  ],
  "location": "StepDef.i_navigate_to(String)"
});
formatter.result({
  "duration": 11752949368,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_open_Contact_page()"
});
formatter.result({
  "duration": 334554910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 13
    }
  ],
  "location": "StepDef.i_should_see_total_Valtech_office(int)"
});
formatter.result({
  "duration": 485561940,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 10278925,
  "status": "passed"
});
});