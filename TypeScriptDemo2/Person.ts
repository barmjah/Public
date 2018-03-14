interface IPerson{
	firstName: string;
	lastName: string;
	middleName: string;
}

class Person{	
	public constructor(public person: IPerson){
	}
	
	public toString() : string{
		return `Person{`
			+ `First Name: ${this.person.firstName}, ` 
			+ `Last Name: ${this.person.lastName}}`;
	}
}

let pm: IPerson = { firstName: "Rajab", lastName: "Samer" };
let p = new Person(pm);

let p2 = new Person({ firstName: "Salah", lastName: "Ahmad"} as IPerson);

console.log(p.toString());
console.log(p2.toString());

