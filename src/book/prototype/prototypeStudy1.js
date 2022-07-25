// 모던 자바스크립트 Deep Dive 284p 프로토타입 예제 변형

const person = (() => {
    function Person() { }

    Person.prototype.sayHello = (name) => {
        console.log(`Hi my name is ${name}`);
    }

    return new Person();
})


const animal = (() => {
    function Animal() {}

    Animal.prototype.sayHello = (name) => {
        console.log(`Hi I am ${name}`);
    }

    return new Animal();
})


person().sayHello('kim');
animal().sayHello('cat');


module.exports = {
    person,
    animal
}
