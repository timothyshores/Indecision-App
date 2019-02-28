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

const me = new Person('Timothy Shores', 30);
console.log(me.greeting());
console.log(me.getAge());

const other = new Person();
console.log(other.greeting());
console.log(other.getAge());

const gf = new Person('Amanda', 26);
console.log(gf.greeting());
console.log(gf.getAge());