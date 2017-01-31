let numbers = [1, 2, 3, 4, 5];

let getSquares = function (arr) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        var element = arr[index];
        result.push(element * element);
    }

    return result;
}
console.log(getSquares(numbers));
console.log(numbers.map(n => n * n));


let persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

let getFullName = (arr) => {

    let result = [];

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];

        result.push(`${element.firstname} ${element.lastname}`);
    }
    return result;
}
console.log(getFullName(persons));
console.log(persons.map(n => `${n.firstname} ${n.lastname}`));

let getValues = (arr, operation) => {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let value = operation(element);

        result.push(value);
    }
    return result;
}

console.log(getValues(numbers, n => n * n));
console.log(getValues(persons, n => `${n.firstname} ${n.lastname}`));
console.log(getValues(numbers, n => (n % 2 === 0) ? n + 10 : n * 10));
console.log(numbers.map(n => (n % 2 === 0) ? n + 10 : n * 10));


let greetings = [
    {
        greeting: "Hi",
        person: "mom"
    },
    {
        greeting: "Hello",
        person: "dad"
    },
    {
        greeting: "How do you do",
        person: "officer"
    }
];

// console.log(greetings);

let getGreeted = function (arr, name) {

    let result = [];

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        result.push(`${element.greeting} ${name}`);
    }
    return result;
}
console.log(getGreeted(greetings, 'Dragan'));
console.log(greetings.map(n =>` ${n.greeting} 'Dragan'`));