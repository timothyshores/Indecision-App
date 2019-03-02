class Person {
    constructor(name = 'Anon', age = 'age not provided') {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Hello my name is ${this.name} and I am ${this.age} years old`;
    }
    getAge() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undeclared') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return this.major !== 'Undeclared' ? true : false;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    greeting() {
        let greeting = super.greeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Timothy Shores', 30, 'Economics');
console.log(me);
console.log(me.hasMajor());

const other = new Student();
console.log(other);
console.log(other.hasMajor());


const gf = new Student('Amanda', 26, 'Mechanical engineering');
console.log(gf);
console.log(gf.hasMajor());

const hobbit = new Traveler('Frodo', 'unknown', 'The Shire');
console.log(hobbit);
console.log(hobbit.greeting());