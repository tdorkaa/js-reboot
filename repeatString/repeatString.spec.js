const repeatString = require('./repeatString');

describe('repeat string', function () {
    it('should work with case #1: *', function () {
        expect(repeatString('*', 3)).to.eql('***');
    });

    it('should work with case #2: abc', function () {
        expect(repeatString('abc', 3)).to.eql('abcabcabc');
    });

    it('should work with case #3: abc - times 1', function () {
        expect(repeatString('abc', 1)).to.eql('abc');
    });

    it('should work with case #4: num is not a positive number', function () {
        expect(repeatString('abc', -2)).to.eql('');
    });
});