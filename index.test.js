const isMultiple = require('./index');

test('given number 2 and possible multiple 2, when checked if it is a multiple, return true', () => {
    expect(isMultiple(2, 2)).toBe(true);
});

test('given number 10 and possible multiple 14, when checked if it is a multiple, return false', () => {
    expect(isMultiple(10, 14)).toBe(false);
});

test('given number 10 and possible multiple 22, when checked if it is a multiple, return false', () => {
    expect(isMultiple(10, 22)).toBe(false);
});