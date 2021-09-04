class Person {
    constructor(_name, _lastname, _age){
        this.name = _name;
        this.lastname = _lastname;
        this.age = _age;
    }
}

var person = new Person("John", "undefined", 22);
console.log(person.name, person.lastname, person.age);