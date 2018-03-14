var Person = (function () {
    function Person(person) {
        this.person = person;
    }
    Person.prototype.toString = function () {
        return "Person{"
            + ("First Name: " + this.person.firstName + ", ")
            + ("Last Name: " + this.person.lastName + "}");
    };
    return Person;
}());
var pm = { firstName: "Rajab", lastName: "Samer" };
var p = new Person(pm);
var p2 = new Person({ firstName: "Salah", lastName: "Ahmad" });
console.log(p.toString());
console.log(p2.toString());
