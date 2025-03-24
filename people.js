const fullName = require('./names');
const allHobbies = require('./hobbies');

function people (){
    return {
        fullName,
        allHobbies
    }
};

console.log(people());