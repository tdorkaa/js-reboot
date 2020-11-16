module.exports = (str) => {
    return findLongestWord(str.split(' ')).length;
}

const findLongestWord = (words) => {
    return words.reduce((accumulator, currentValue) => {
        return accumulator.length > currentValue.length ? accumulator : currentValue;
    });
}