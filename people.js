const fullName = require('./names');
const allHobbies = require('./hobbies');

function people (){
    return {
        names: fullName('Michelangelo','Musco'),
        hobby: allHobbies('music','cinema','videogames')
    }
};

console.log(people());