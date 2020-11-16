const groupingObjByAge = require('./groupingObjects');
const people = [
    {name: 'Alice', age: 21},
    {name: 'Max', age: 20},
    {name: 'Jane', age: 20}
];

describe('Grouping objects by a property', function () {
    it.only('should group objects by age property', function () {
        expect(groupingObjByAge(people
        )).to.eql({
            20: [
                {name: 'Max', age: 20},
                {name: 'Jane', age: 20}
            ],
            21: [{name: 'Alice', age: 21}]
        });
    });
});