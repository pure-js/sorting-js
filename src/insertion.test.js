import insertion from './insertion';

test('sort correctly', () => {
  const arr = [27, 59, 169, 19, 2, 120, 0, 67, 4, 560, 76, 23, 14, 5, 123, 78];
  const sortedArr = [0, 2, 4, 5, 14, 19, 23, 27, 59, 67, 76, 78, 120, 123, 169, 560];
  expect(insertion(arr)).toEqual(sortedArr);
});
