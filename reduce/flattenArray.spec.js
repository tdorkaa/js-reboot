const flattenArray = require('./flattenArray');

describe('flatten the given multidimensional array', function () {
    it('should work with case #1: [[0, 1], [2, 3], [4, 5]]', function () {
        expect(flattenArray([[0, 1], [2, 3], [4, 5]])).to.eql([0, 1, 2, 3, 4, 5]);
    });
});