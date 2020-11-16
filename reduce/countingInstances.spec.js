const countInstances = require('./countingInstances');

describe('Counting instances of values in an object', function () {
    it('should work with case #1: [\'Alice\', \'Bob\', \'Tiff\', \'Bruce\', \'Alice\']\n', function () {
        expect(countInstances(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
        )).to.eql({ 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 });
    });
});