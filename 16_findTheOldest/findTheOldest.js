const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        const olderAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        return currentAge > olderAge ? current : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
