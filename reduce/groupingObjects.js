module.exports = (people) => {
    const peopleByName = people.reduce((allPeopleByName, person) => {
        if(!allPeopleByName.hasOwnProperty(person.age)) {
            allPeopleByName[person.age] = [];
        }
        allPeopleByName[person.age].push(person);
        return allPeopleByName;
    }, {});
    return peopleByName;
}