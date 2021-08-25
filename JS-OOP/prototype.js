// from object_factory.js

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function() {
    return "prototype : " + (this.first + this.second + this.third);
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10); 


console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
