// JavaScript - Example 7 (Using Get and Set)

class Person{
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  set name(newName){
    this._name = newName;
  }
}

let person = new Person('Miguel');
console.log(person.name);
