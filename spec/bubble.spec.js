import {bubble} from '../src/bubble.js';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    let kik = [7, 9, 2, 120, 0, 67, 4, 560, 76, 23, 14, 5, 123, 78];
    expect(bubble(kik)).toBe(true);
  });
});

for(let i = 0; i < 10; i++) {
  console.log(bubble(generateArray()));
}