const assert = require('assert');

describe('конвертер валют', () => {
  it('должен появится на странице', function() {
    return this.browser
      .url('/search?text=курс%20доллара%20к%20рублю')
      // .keys(['курс доллара к рублю'],'\uE007')
      .isExisting('.converter-form')
      .then((exists) => {
        assert.ok(exists, 'Конвертер валют не появился');
      });
  });
});