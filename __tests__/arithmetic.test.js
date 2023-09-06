import { isEven, sum } from "../arithmetic";

describe("Testing isEven", () => {
    test("Return true when even", () => {
        expect(isEven(2)).toBe(true);
    });

    test("Return false when odd", () => {
        expect(isEven(3)).toBe(false);
    });
});

describe('Testing the sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  
    test('adds 1 + (-1) to equal 0', () => {
      expect(sum(1, -1)).toBe(0);
    });
  });


