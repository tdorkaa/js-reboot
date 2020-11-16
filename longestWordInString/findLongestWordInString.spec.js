const findLongestWordLength = require('./findLongestWordInString');

describe('find longest word length', function () {
    it('should work with case #1', function () {
        expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).to.eql(6);
    });
});