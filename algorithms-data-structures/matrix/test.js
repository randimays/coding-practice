const matrix = require('./index');

test('matrix is a function', () => {
    expect(typeof matrix).toEqual('function');
});

test('matrix produces a 2x2 array', () => {
    const m = matrix(2);
    expect(m.length).toEqual(2);
    expect(m[0]).toEqual([1, 2]);
    expect(m[1]).toEqual([4, 3]);
});

test('matrix produces a 3x3 array', () => {
    const m = matrix(3);
    expect(m.length).toEqual(3);
    expect(m[0]).toEqual([1, 2, 3]);
    expect(m[1]).toEqual([8, 9, 4]);
    expect(m[2]).toEqual([7, 6, 5]);
});

test('matrix produces a 4x4 array', () => {
    const m = matrix(4);
    expect(m.length).toEqual(4);
    expect(m[0]).toEqual([1, 2, 3, 4]);
    expect(m[1]).toEqual([12, 13, 14, 5]);
    expect(m[2]).toEqual([11, 16, 15, 6]);
    expect(m[3]).toEqual([10, 9, 8, 7]);
});

test('matrix produces an 8x8 array', () => {
    const m = matrix(8);
    expect(m.length).toEqual(8);
    expect(m[0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(m[1]).toEqual([28, 29, 30, 31, 32, 33, 34, 9]);
    expect(m[2]).toEqual([27, 48, 49, 50, 51, 52, 35, 10]);
    expect(m[3]).toEqual([26, 47, 60, 61, 62, 53, 36, 11]);
    expect(m[4]).toEqual([25, 46, 59, 64, 63, 54, 37, 12]);
    expect(m[5]).toEqual([24, 45, 58, 57, 56, 55, 38, 13]);
    expect(m[6]).toEqual([23, 44, 43, 42, 41, 40, 39, 14]);
    expect(m[7]).toEqual([22, 21, 20, 19, 18, 17, 16, 15]);
});