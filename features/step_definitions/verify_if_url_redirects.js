const {Given, Then, When} = require('@cucumber/cucumber')
const fs = require('fs');
const path = require('path');

const {saveBrowserLogsToFile} = require('../../utils/UtilsFiles.js');



Given('i go to the home index', function() {
  return browser.navigateTo('/');

});
Then('verify home url', function(){
  return browser.assert.titleEquals("Automation Practice - Ultimate QA");

})



When('I click on the link {string}', function(linkText) {
  browser.navigateTo('/').element.findByText(linkText).click();
})

Then("Title is {string}", function(GivenTitle){
  browser.assert.titleEquals(GivenTitle);
})

Then("Url is {string}", function(Expected_URL){
  browser.assert.urlEquals(Expected_URL);
})



When("I am on Home website",function(){
  return browser.navigateTo('/');
})

Then("Save the Logs  in a text File",async function(){
  const logs = await browser.getLog('browser'); // Await logs
  // console.log("Is Array:", Array.isArray(logs));
  await saveBrowserLogsToFile(logs);                  // Pass real logs to the function


})

Then("Show the Logs  in Console",function(){
  // console.log(browser.getLog('browser'));
})
