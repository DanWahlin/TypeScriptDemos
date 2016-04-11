//Normal way
var numbers: number[] = [];
var names: string[] = [];

//Generics way
var numbers = new Array<number>();
numbers.push(1);
numbers.push(2);

var names = new Array<string>();
names.push('Jane');
names.push('John');

numbers.forEach((n) => console.log(n));
names.forEach((n) => console.log(n));

