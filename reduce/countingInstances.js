module.exports = (names) => {
    return names.reduce((acc, cur) =>
        {
            if(acc.hasOwnProperty(cur)) {
                acc[cur]++;
            }
            return {[cur]: 1, ...acc};
        }, {}
    );
}