const en = require('./en.yml');
const ja = require('./ja.yml');
const ko = require('./ko.yml');

const getBlanks = obj => Object.keys(obj).filter(v => obj[v] === '');
const getAllKeys = obj => Object.keys(obj);

test('snapshot [en]', () => {
  expect(en).toMatchSnapshot();
});
test('snapshot [ja]', () => {
  expect(ja).toMatchSnapshot();
});
test('snapshot [ko]', () => {
  expect(ko).toMatchSnapshot();
});
test('check whitelist [en]', () => {
  const blanks = getBlanks(en);
  expect(blanks).toMatchSnapshot();
});
test('check whitelist [ja]', () => {
  const blanks = getBlanks(ja);
  expect(blanks).toMatchSnapshot();
});
test('check whitelist [ko]', () => {
  const blanks = getBlanks(ko);
  expect(blanks).toMatchSnapshot();
});

test('check key equals', () => {
  const langList = [en, ja, ko];
  const allLangKeyList = [];
  for (var lang of langList) {
    allLangKeyList.push(getAllKeys(lang));
    if (allLangKeyList.length > 1) {
      expect(allLangKeyList[allLangKeyList.length - 1]).toEqual(
        allLangKeyList[allLangKeyList.length - 2]
      );
    }
  }
});
