const f = require('./timeoutTest.js');

// 모던 자바스크립트 Deep Dive 284p 프로토타입 예제 변형
const person = (() => {
    function Person() { }

    // 이렇게 하면 async await으로 받을 수 있음
    Person.prototype.sayHello = async (name) => {
        await f1();
        console.log(`Hi my name is ${name}`);
    }

    return new Person();
})


const animal = (() => {
    function Animal() {}

    Animal.prototype.sayHello = (name) => {
        global.name = name;
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

async function f1() {
    await f;
}
