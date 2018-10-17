const chai = require('chai');
const chaiSubset = require('chai-subset');
const { gitHistory, parseHistoryItem } = require('../utils/git');
chai.use(chaiSubset);
const { expect, should } = chai;
describe('с сервера возвращаются данные с требуемой структурой', function() {
  // подготовка

  // действие
  async function checkHistory() {
    try {
      const history = await gitHistory(1, 20);
      return history
    } catch (error) {
        throw new Error(error);
    }
  }
  // проверка
  it('возвращается массив', async () => {
    const result = await checkHistory();
    expect(result).be.an('array');
  }); 
  it('обьекты содержит свойства hash, author, timestamp, msg', async () => {
    const data = await checkHistory();
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