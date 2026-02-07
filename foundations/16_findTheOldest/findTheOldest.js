const findTheOldest = function (people) {
  const updatedPeople = people
    .map((person) => {
      const currentYear = new Date().getFullYear();
      let yearOfDeath = person.yearOfDeath;
      if (yearOfDeath === undefined) yearOfDeath = currentYear;
      return {
        name: person.name,
        age: yearOfDeath - person.yearOfBirth,
        yearOfBirth: person.yearOfBirth,
        yearOfDeath: yearOfDeath,
      };
    })
    .sort((a, b) => b.age - a.age);
  return updatedPeople[0];
};
findTheOldest(people);

module.exports = findTheOldest;
