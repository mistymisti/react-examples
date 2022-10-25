class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ! this is ${this.name} and am ${this.age} years old`;
    }   

}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = `Hi ! I am ${this.name}. `
        if(this.hasHomeLocation()) {
            greeting += `I am from ${this.homeLocation}`; 
        }
        return greeting;
    }
}

const person1 = new Traveler('isti', 37, 'Chennai');
console.log(person1.getGreeting());
const person2 = new Traveler();
console.log(person2.getGreeting());