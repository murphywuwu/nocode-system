function sum(a: number, b: number): number {
  return a + b;
}

describe('exmaple test', function () {
  test('sum', function () {
    expect(sum(1, 2)).toEqual(3);
  });
});
