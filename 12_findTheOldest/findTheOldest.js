function getAge(person) {
    if ('yearOfDeath' in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    const currYear = new Date().getFullYear();
    return currYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (getAge(person) > getAge(oldest))
            return person;
        else   
            return oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
