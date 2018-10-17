module.exports = {
  baseUrl: 'https://yandex.ru',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',
    browsers: {
      chrome: {
        desiredCapabilities: {
          browserName: 'chrome'
        },
        waitTimeout: 2000
      }
    },
    plugins: {
      'html-reporter/hermione': {
        path: 'hermione-teml-report'
      }
    }
};