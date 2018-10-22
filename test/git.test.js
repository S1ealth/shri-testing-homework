const chai = require('chai');
const chaiSubset = require('chai-subset');
const { gitHistory, parseHistoryItem } = require('../utils/git');
const {   buildFolderUrl, buildFileUrl, buildBreadcrumbs } = require('../utils/navigation');
const sinon = require('sinon');
chai.use(chaiSubset);
const { expect, should } = chai;
describe('можно загружать данные из репозитория', function() {
  // подготовка
  let fake = sinon.fake(gitHistory);
  // действие

  // проверка
  it('работает без исключений', function() {
    expect(fake).to.not.throw();
  }); 
  it('возвращает массив', async function() {
    const result = await fake(1, 20);
    expect(result).be.an('array');
  }); 
  it('обьекты содержат свойства hash, author, timestamp, msg', async function() {
    const data = await fake(1, 20);
    expect(data).to.containSubset([
      {
        hash:(expectedValue) => expectedValue,
        author:(expectedValue) => expectedValue,
        timestamp:(expectedValue) => expectedValue,
        msg: (expectedValue) => expectedValue
      }
    ]);
  });
});
describe('можно строить ссылки', function() {
  // подготовка
  let folderUrl = sinon.fake(buildFolderUrl);
  let fileUrl = sinon.fake(buildFileUrl);
  let bread = sinon.fake(buildBreadcrumbs);
  let hash = '8129b092f85e3c630f8dd793313552a09cbf1eb0';
  let path = ''
  // действие
  let testFolder = folderUrl(hash,path);
  let testBread = bread(hash,path);
  let testFile = fileUrl(hash,path);
  // проверка
  it('можно строить хлебные крошки', function() {
    expect(testBread).containSubset([{
      text: 'HISTORY',
      href: '/'
    }]);
  });
  it('можно создавать ссылки на папки', function() {
    expect(testFile).equals(`/content/${hash}/${path}`);
  });
  it('можно создавать ссылки на файлы', function() {
    expect(testFolder).equals(`/files/${hash}/${path}`);
  });
});