Feature: FlipKart Application Search
@first
Scenario:  Search For Mobile With Brand And RAM Capacity Selection
Given I am on "flipkart" search page
When I type "mobiles"
Then I click on search button
Then I click RealMe Brand checkbox
Then I click 2 GB RAM checkbox
Then I validate search result

@second
Scenario:  Search For Mobile
Given I am on "flipkart" search page
When I type "mobile"
Then I click on search button
Then I validate search result
