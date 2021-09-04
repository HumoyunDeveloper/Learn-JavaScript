class Person {
    constructor() {
        this.age = 0,
        this.name = "";
    }

    setAge(_number){
        this.age = _number;
    }

    setName(_name){
        this.name = _name;
    }

    get sayHello() {
        return "Hello!!!";
    }
}

var person = new Person();

person.setAge(20);
person.setName("John");

console.log(person.sayHello);
console.log(person.age);
console.log(person);
