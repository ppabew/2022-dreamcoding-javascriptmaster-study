function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi my name is ${this.name}`);
}


const me = new Person('Lee');
const you = new Person('Kim');

me.sayHello();
you.sayHello();