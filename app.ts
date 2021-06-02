let myName: string = 'Vishal'; /* My myName */
const states: number = 50; /* Number of states in the USA */
let fivePlusFour: number = 5 + 4; /* Example of addition */

function sayHello(): void {
    alert('Hello World!');
}

sayHello();

function checkAge(myName: string, age: number): void {
    if (age < 21) {
        alert("Sorry " + myName + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegetables: Array<string> = ['Sweet Potato','Potato','Carrot','Cucumber','Water Chestnut'];

for (let i: number = 0; i < vegetables.length; ++i) {
    console.log(vegetables[i]);
}

let pet: IPet = {
    name: 'Yoda',
    breed: 'Bengal'
}
console.log(pet);

let person1: IPerson = {
    name: 'Bob',
    age: 22
}
let person2: IPerson = {
    name: 'Samantha',
    age: 18
}
let person3: IPerson = {
    name: 'Stuart',
    age: 32
}
let person4: IPerson = {
    name: 'Kush',
    age: 45
}
let person5: IPerson = {
    name: 'Sandeep',
    age: 17
}

let people: Array<IPerson> = [person1, person2, person3, person4, person5];

for (let i: number = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength (phrase: string): number {
    return phrase.length;
}

let hwLength: number = getLength('Hello World');
if (hwLength % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}

interface IPet {
    name: string,
    breed: string
}

interface IPerson {
    name: string,
    age: number
}