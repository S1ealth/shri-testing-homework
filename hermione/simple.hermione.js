const assert = require('assert');

describe('конвертер валют', () => {
  it('должен появится на странице', function() {
    return this.browser
      .url('/')
      .keys(['курс доллара к рублю'],'\uE007')
      .isExisting('.converter-form')
      .then((exists) => {
        assert.ok(exists, 'Конвертер валют не появился');
      });
  });
});