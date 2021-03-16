class Employee {
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    age: number;
    name: string;
}

class Manager extends Employee {
    Department: any;
}

class Engineer extends Employee {
    skills: any;

    constructor(age: number, name: string, skills: any) {
        super(age, name);
    }
}


const engineer = new Engineer(1,'Sid','Developer');
