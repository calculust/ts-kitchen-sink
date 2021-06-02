var myName = 'Vishal'; /* My myName */
var states = 50; /* Number of states in the USA */
var fivePlusFour = 5 + 4; /* Example of addition */
function sayHello() {
    alert('Hello World!');
}
sayHello();
function checkAge(myName, age) {
    if (age < 21) {
        alert("Sorry " + myName + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var vegetables = ['Sweet Potato', 'Potato', 'Carrot', 'Cucumber', 'Water Chestnut'];
for (var i = 0; i < vegetables.length; ++i) {
    console.log(vegetables[i]);
}
var pet = {
    name: 'Yoda',
    breed: 'Bengal'
};
console.log(pet);
var person1 = {
    name: 'Bob',
    age: 22
};
var person2 = {
    name: 'Samantha',
    age: 18
};
var person3 = {
    name: 'Stuart',
    age: 32
};
var person4 = {
    name: 'Kush',
    age: 45
};
var person5 = {
    name: 'Sandeep',
    age: 17
};
var people = [person1, person2, person3, person4, person5];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(phrase) {
    return phrase.length;
}
var hwLength = getLength('Hello World');
if (hwLength % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
