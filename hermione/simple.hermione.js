const assert = require('assert');
describe('навигация', () => {
  it('должны появится хлебные крошки', function() {
    return this.browser
      .url('/')
      .assertView('plain','.breadcrumbs')
      .isExisting('.breadcrumbs')
      .assertView('plain1','.breadcrumbs')
      .then((exists) => {
        assert.ok(exists, 'хлебные крошки не появились');
      });
  });
});