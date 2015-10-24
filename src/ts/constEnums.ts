enum NonConstGender { Male, Female };
const enum Gender { Male, Female };

var nonConstGender = NonConstGender.Male;
var gender = Gender.Female;

console.log('');
console.log('NonConstGender is ' + nonConstGender);
console.log('Gender is ' + gender);
