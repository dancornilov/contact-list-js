'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /contact-detail when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/contact-detail");
  });


  describe('contact-detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/contact-detail');
    });


    it('should render contact-detail when user navigates to /contact-detail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('contact-list', function() {

    beforeEach(function() {
      browser.get('index.html#!/contact-list');
    });


    it('should render contact-list when user navigates to /contact-list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
