import bubble from './bubble';

test('contains spec with an expectation', () => {
  const arr = [7, 9, 2, 120, 0, 67, 4, 560, 76, 23, 14, 5, 123, 78];
  const sortedArr = [0, 2, 4, 5, 7, 9, 14, 23, 67, 120, 560, 76, 123, 78];
  expect(bubble(arr)).toEqual(sortedArr);
});
