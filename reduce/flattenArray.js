module.exports = (arrToFlatten) => {
    return arrToFlatten.reduce((acc, cur) => [...acc, ...cur]);
}