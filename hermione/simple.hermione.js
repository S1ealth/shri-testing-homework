const assert = require('assert');
hermione.only.notIn('firefox')
describe('конвертер валют', () => {
  it('должен появится на странице', function() {
    return this.browser
      .url('/search')
      .click('.input__control')
      .keys(['курс доллара к рублю'])
      .click('.websearch-button')
      .waitForExist('.converter-form', 10000)
      // .isExisting('.converter-form')
      .then((exists) => {
        assert.ok(exists, 'Конвертер валют не появился');
      });
  });
});