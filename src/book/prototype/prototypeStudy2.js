const {person, animal} = require('./prototypeStudy1');

person().sayHello('Yun');
console.log(`global : ${name}`);
animal().sayHello('Dog');
console.log(`global : ${name}`);
animal().sayHello('tiger');
console.log(`global : ${name}`);