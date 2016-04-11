var x: number = 5;
var y: number = 5;

var isLoaded: boolean = false;

var firstName: string = 'John';
var lastName: string = 'Doe';

var pets: string[] = ['Fido', 'Lassie', 'Rover'];

var info: any = { address: '1234 Anywhere St.', city: 'Seattle' };

window.onload = function () {
    var z = x + y;
    console.log('x + y = ' + z);
    console.log('isLoaded = ' + isLoaded);
    console.log('Pets List:');
    for (var i: number = 0; i < pets.length; i++) {
        console.log(pets[i]);
    }
    console.log('Info: ' + info.address + ' ' + info.city);
};