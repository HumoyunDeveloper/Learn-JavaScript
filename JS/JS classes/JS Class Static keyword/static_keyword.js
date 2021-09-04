
class Person {
    constructor(_name, _age) {
        this.name = _name,
            this.age = _age,
            this.height = 0,
            this.surname = "";
    }

    getFullName() {
        return this.name + " " + this.surname;
    }

    static Type(){
        return "Hello I am " + this.name + " " + this.surname + ", and I am " + this.age + " years old.";
    }
}

var person = new Person("John", 35);


console.log(Person.Type());