const fs = require('fs/promises'); // Using promise-based fs for async/await
const path = require('path');






describe('Functional Onboarding Testing', function() {
  it('Should have the correct title', function(browser) {
    browser.navigateTo('/').assert.titleEquals("Automation Practice - Ultimate QA")
  })

//   it('Checking all Links are Working in the page', function(browser){
//     const linksToTest = [
//     { selector: 'Big page with many elements', expectedUrlPath: 'https://ultimateqa.com/complicated-page', expectedTitle: 'Complicated Page - Ultimate QA' },
//     { selector: 'Fake Landing Page', expectedUrlPath: 'https://ultimateqa.com/fake-landing-page', expectedTitle: 'Fake landing page - Ultimate QA' },
//     { selector: 'Fake Pricing Page', expectedUrlPath: 'https://ultimateqa.com/automation/fake-pricing-page/', expectedTitle: 'Fake pricing page - Ultimate QA' },
//     { selector: 'Fill out forms', expectedUrlPath: 'https://ultimateqa.com/filling-out-forms/', expectedTitle: 'Filling Out Forms - Ultimate QA' },
//     { selector: 'Learn how to automate an application that evolves over time', expectedUrlPath: 'https://ultimateqa.com/sample-application-lifecycle-sprint-1/', expectedTitle: 'Sample Application Lifecycle - Sprint 1 - Ultimate QA' },
//     { selector: 'Login automation', expectedUrlPath: 'https://courses.ultimateqa.com/users/sign_in', expectedTitle: 'Sign In - UltimateQA' },
//     { selector: 'Interactions with simple elements', expectedUrlPath: 'https://ultimateqa.com/simple-html-elements-for-automation/', expectedTitle: 'Simple HTML Elements For Automation - Ultimate QA' }
// ];
//     for( const link of linksToTest){
//         browser.navigateTo('/').element.findByText(link.selector).click()
        
//         browser.assert.titleEquals(link.expectedTitle);
//         browser.assert.urlEquals(link.expectedUrlPath);
//     }
//   })



  it('captures and logs console.log event', function() {
    browser
      .captureBrowserConsoleLogs((event) => {
        console.log(event.type, event.timestamp, event.args[0].value);
      })
      .navigateTo('https://ultimateqa.com/automation').pause(1000)
      .executeScript(function() {
        console.log('here are errors');
      }, []);
  });
})
