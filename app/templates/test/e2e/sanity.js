/*
 * Learn more about protractor locators:
 * https://angular.github.io/protractor/#/locators
 */

describe('protractor sanity test', function() {
  it('should test if app page loads', function() {
    browser.get('/');

    expect($('h1').isDisplayed()).toBe(true);
    expect($('h1').getText()).toEqual('Welcome!');
  });

  it('should test if settings page loads', function() {
    browser.get('/settings.html');

    expect($('img[alt=logo]').isDisplayed()).toBe(true);
  });
});
