// function Person(name,age) {
//     this.name = name
//     this.age = age
// }

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log('hellow');
    }
}

class Chinese extends Person {
    constructor(name, age, id) {
        super(name, age)
        this.id = id
    }
}

const a = new Person('a', 12)
const b = new Chinese('b', 12, 2345678765434)
console.log(a, b)
a.say()
b.say()

