/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-search-bar', done);
  },

  'Displays a search bar with search button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-bar-tests/default`)
      .assert.elementPresent('.terraClinical-SearchBar')
      .assert.elementPresent('.terraClinical-SearchBar-button')
      .assert.attributeEquals('.terraClinical-SearchBar-input', 'placeholder', '');
  },

  'Displays a search bar with a placeholder': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-bar-tests/placeholder`)
      .assert.elementPresent('.terraClinical-SearchBar')
      .assert.elementPresent('.terraClinical-SearchBar-button')
      .assert.attributeEquals('.terraClinical-SearchBar-input', 'placeholder', 'Search Text');
  },
};

