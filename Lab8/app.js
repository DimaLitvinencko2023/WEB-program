'use strict';

class Employee {
    constructor(name, surname, basicSalary, experience) {
        this.name = name;
        this.surname = surname;
        this.basicSalary = basicSalary;
        this.experience = experience;

        if (this.experienceInYears >= 2 && this.experienceInYears < 5) {
            this.countedSalary = this.basicSalary + 200;
        }
        else if (this.experienceInYears >= 5) {
            this.countedSalary = this.basicSalary * 1.2 + 500;
        }
        else {
            this.countedSalary = this.basicSalary;
        }
    }
}
class Developer extends Employee {
    constructor(name, surname, basicSalary, experience) {
        super(name, surname, basicSalary, experience);
    }
}
class Designer extends Employee {
    constructor(name, surname, basicSalary, experience, productivityCoefficient) {
        super(name, surname, basicSalary, experience);

        if (productivityCoefficient < 0) {
            this.productivityCoefficient = 0;
        }
        else if (productivityCoefficient > 1) {
            this.productivityCoefficient = 1;
        }
        else {
            this.productivityCoefficient = productivityCoefficient;
        }
        this.countedSalary *= this.productivityCoefficient;
    }
}
class Manager extends Employee {
    constructor(name, surname, basicSalary, experience, team) {
        super(name, surname, basicSalary, experience);
        this.team = team;
        if (this.team.length > 5 && this.team.length < 10) {
            this.countedSalary += 200;
        }
        else if (this.team.length > 10) {
            this.countedSalary += 300;
        }
        let count = 0;
        for (let i = 0; i < this.team.length; i++) {
            if (this.team[i].constructor.name === "Developer") {
                count++;
            }
        }

        let coefficient = count / this.team.length;
        if (coefficient > 0.5) {
            this.countedSalary += this.countedSalary * 0.1;
        }
    }
}
class Department {
    constructor(managers) {
        this.managers = managers;
    }
    giveSalary() {
        for (let i = 0; i < managers.length; i++) {
            console.log(managers[i].name + " " + managers[i].surname + " отримав " + managers[i].countedSalary + "$.");
            for (let j = 0; j < managers[i].team.length; j++) {
                console.log(managers[i].team[j].name + " " + managers[i].team[j].surname + " отримав " + managers[i].team[j].countedSalary + "$.");
            }
        }
    }
}

const Ivan = new Developer("Іван", "Іванич", 1000, 10);
const Valya = new Developer("Валя", "Вальоновна", 900, 9);
const Andrey = new Developer("Андрій", "Андрійов", 800, 8);
const Mark = new Developer("Марк", "Марков",  700, 7);

const Lera = new Designer("Лера", "Леров", 600, 6, 0.96);
const Lena = new Designer("Олена", "Леновн", 500, 5, 0.92);
const Yura = new Designer("Юрій", "Юровник", 400, 4, 0.98);
const Veronica = new Designer("Вероніка", "Вероновна", 300, 3, 0.89);

const Team1 = [];
Team1.push(Ivan);
Team1.push(Valya);
Team1.push(Lena);
Team1.push(Yura);
Team1.push(Veronica);
const Sergey = new Manager("Сергій", "Сергійнов", 800, 3, Team1);

const Team2 = [];
Team2.push(Andrey);
Team2.push(Mark);
Team2.push(Lera);
const Lika = new Manager("Ліка", "Ліковна", 1000, 5, Team2);

const managers = [];
managers.push(Sergey);
managers.push(Lika);

const department = new Department(managers);
department.giveSalary();



// код, щоб не закривалася консолька:
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);