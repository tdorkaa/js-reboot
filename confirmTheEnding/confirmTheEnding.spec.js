const confirmEnding = require('./conFirmTheEnding');

describe('confirm the endig', function () {
    it('should work with case #1: Bastian', function () {
        expect(confirmEnding('Bastian', 'n')).to.eql(true);
    });

    it('should work with case #2: Congratulation', function () {
        expect(confirmEnding('Congratulation', 'on')).to.eql(true);
    });

    it('should work with case #3: Connor', function () {
        expect(confirmEnding('Connor', 'n')).to.eql(false);
    });

    it('should work with case #4: long sentence - false', function () {
        expect(confirmEnding('Walking on water and developing software' +
            ' from a specification are easy if both are frozen', 'specification')).to.eql(false);
    });

    it('should work with case #5: long sentence - true', function () {
        expect(confirmEnding('He has to give me a new name', 'name')).to.eql(true);
    });

    it('should work with case #6: long sentence - only chars', function () {
        expect(confirmEnding('Open sesame', 'same')).to.eql(true);
    });
});