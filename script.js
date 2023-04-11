// 1-3 задание
// class Employee {

// }
// let Rabotnik = new Employee 
// Rabotnik.name = 'Dima'
// Rabotnik.age = '18'
// Rabotnik.salary = '100'
// console.log(Rabotnik)

// задание 4
// class Employee {

//     }

// let user1 = new Employee;
// user1.name = 'Dima'
// user1.age = '17'
// user1.salary = '5'
// let user2 = new Employee;
// user2.name = 'Semen'
// user2.age = '18'
// user2.salary = '100'

// console.log(parseInt (user1.salary)   + parseInt(user2.salary) );
// console.log(user2);

// задание 5

// class Employee {
// 	show() {
// 		return 'noob';
// 	}
// }
// let user = new Employee;
// console.log(user.show());

// задание 6

// class Employee {
// 	show(name, salary) {
// 		return name + ' ' + salary;
// 	}
// }
// let user = new Employee
// console.log(user.show('Dima','100'))

// задание 7
// class Employee {
// 	show() {
// 		console.log(this.name);
// 	}
//     salarys() {
//         console.log(this.salary)}
// }
// let user = new Employee;
// user.name = 'john';
// user.salary = '100'
// user.show()
// user.salarys()

// задание 8
// class User {
// 	show() {
// 		return this.cape(this.name);
// 	}
	
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let student = new User
// student.name = 'john'
// console.log(student.show())

// задание 8.3

// class Student {
//     constructor(name, surn) {
//       this.name = name;
//       this.surn = surn;
//     }
  
//     getInitials() {
//       return this.name.charAt(0).toUpperCase() + "." + this.surn.charAt(0).toUpperCase() + ".";
//     }
//   }
  
//   let student1 = new Student("John", "Doe");
//   console.log(student1.getInitials());

// задание 9

// class User {
//     name = "john";
//     surn = "lolson";
  
//     show() {
//       return this.name + " " + this.surn;
//     }
//   }
  
//   let user1 = new User();
//   console.log(user1.show());

// задание 10

// class Employee {
// 	constructor() {
// 		console.log('+++');
// 	}
// }
// let user = new Employee

// задание 11 
// class Employee {
//     	constructor(name,surn) {
//             console.log(name + ' ' + surn);
//     	}
//     }
//     new Employee ('john','smith') 

// задание 12

// class Employee {
//     constructor(name, salary) {
//       this.name = name;
//       this.salary = salary;
//     }
  
//     show() {
//       return this.name + ' ' + this.salary;
//     }
  
//     showName() {
//       return this.name;
//     }
//     showSalary() {
//         return this.salary
//     }
//     increaseSalary() {
//         this.salary *= 1.1;
//       }
//   }
  
//   let user = new Employee('john', '100');
//   console.log(user.show());
//   console.log(user.showName());
//   console.log(user.showSalary());
//   user.increaseSalary();
//   console.log(user.showSalary());

// задание 13

// class Employee {
//     #name;
//     #salary;
//     #age;
  
//     constructor(name, salary, age) {
//       this.#name = name;
//       this.#salary = salary;
//       this.#age = age;
//     }
  
//     getName() {
//       return this.#name;
//     }
  
//     getSalary() {
//       return this.#salary;
//     }
  
//     getAge() {
//       return this.#age;
//     }
//   }
//  let user = new Employee ('john',100,18)
//   console.log(user.getName())
//   console.log(user.getAge())
//   console.log(user.getSalary())

// задание 14

// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 		// объявляем приватный метод в конструкторе
// 		const addSign = (num) => {
// 			return num + '$';
// 		};
// 		// объявляем публичный метод, который использует приватный метод
// 		this.getSalary = () => {
// 			return addSign(this.salary);
// 		};
// 	}
// }

// задание 15

// class Employee {
// 	constructor(name, salary) {
// 		this._name = name;
// 		this._salary = salary;
// 	}
	
// 	getName() {
// 		return this._name;
// 	}
	
// 	getSalary() {
// 		return this._salary;
// 	}
// }

// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this._addSign(this.salary);
// 	}
	
// 	_addSign(num) {
// 		return num + '$';
// 	}
// }

// задание 16

// class Employee {
// 	#name;
// 	#salary;
//     #age;
	
// 	constructor(name,salary,age) {
// 		this.#name = name;
// 		this.#salary = salary;
//         this.#age = age;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSalary() {
// 		return this.#salary;
// 	}
//     getAge() {
//         return this.#age
//     }
// }
// let user = new Employee('john', 100,18);
// console.log(user.getName());
// console.log(user.getSalary());
// console.log(user.getAge());

// задание 17

// class Employee {
// 	#name;
// 	#surn;
	
// 	setName(name) {
// 		this.#name = name;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let user = new Employee;
// user.setName('john');
// user.setSurn('smit');
// console.log(user.getName());
// console.log(user.getSurn());

// задание 18

// class Employee {
//     #name;
//     #age;
//     #salary;

//     setName(name) {
//         if (name.length > 0) {
//             this.#name = name;
//         } else {
//             throw new Error('name is incorrect');
//         }
//     }

//     setAge(age) {
//         if (age >= 0 && age <= 120) {
//             this.#age = age;
//         } else {
//             throw new Error('age is incorrect')
//         }
//     }

//     setSalary(salary) {
//         if (salary >= 0) {
//             this.#salary = salary;
//         } else { 
//             throw new Error('salary is incorrect')
//         }
//     }

//     getName() {
//         return this.#name;
//     }

//     getAge() {
//         return this.#age
//     }

//     getSalary() {
//         return `${this.#salary}$`;
//     }
// }

// let user = new Employee();
// user.setName('john');
// user.setAge (18);
// user.setSalary(200);
// console.log(user.getName());
//  console.log(user.getAge());
//  console.log(user.getSalary());

// задание 19

// class User {
// 	#name;
// 	#surn;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let user = new User;
// user.setName('john').setSurn('smit');
// console.log(user.getName());
// console.log(user.getSurn());

// задание 20

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let user1 = new User('1');
// let user2 = new User('2');
// console.log(user1 === user1);
// console.log(user1 === user2);

// задание 21

// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];
// for (let user of users) {
//     if (user instanceof Employee) {
//       console.log(user.name);
//     }
//   }

// задание 22-1

// class Validators {
//     static isValidString(str) {
//       if (typeof str === 'string' && str.length > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
  
//   let str = 'Hello, world!';
//   let isValid = Validators.isValidString(str);
//   console.log(isValid); 

// задание 22-2
// class Validator {
//     static isValidString(str) {
//       if (typeof str === 'string' && str.length > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     static isEmail(email) {
//       if (typeof email !== 'string') {
//         return false;
//       }
//       let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//     }
//   }
//   const email = 'alex@email.com';
// const isValidEmail = Validator.isEmail(email);
// console.log(isValidEmail);

// задание 22-3

// class Validator {
//     static isValidString(str) {
//       if (typeof str === 'string' && str.length > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     static isDomain(domain) {
//       if (typeof domain !== 'string') {
//         return false;
//       }
  
//       let domainRegex = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,}$/;
//       return domainRegex.test(domain);
//     }
//   }
//   let domain = 'alex.com';
//   let isValidDomain = Validator.isDomain(domain);
//   console.log(isValidDomain);

// задание 22-4

// class Validator {
//     static isValidString(str) {
//       if (typeof str === 'string' && str.length > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     static isNumber(str) {
//       if (!Validator.isValidString(str)) {
//         return false;
//       }
//       const numberRegex = /^\d+$/;
//       return numberRegex.test(str);
//     }
//   }
//   const str = '12345';
// const isNumber = Validator.isNumber(str);
// console.log(isNumber);

// задание 23

// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }

// class Position {
// constructor(name) {
//     this.name = name
// }
// }

// class Department {
//     constructor(name) {
//         this.name = name
//     }
//     }

//     let position = new Position('manager');
//     let department = new Department('sales')
// let user = new Employee('john', position, department);
// console.log(user.name);
// console.log(user.position.name);
// console.log(user.department.name);

// задание 24

// class Employee {
//     #name;
//     #salary;
  
//     constructor(name, salary) {
//       this.#name = name;
//       this.#salary = salary;
//     }
  
//     getName() {
//       return this.#name;
//     }
  
//     getSalary() {
//       return this.#salary;
//     }
//   }
  
// let employees = [
//     new Employee('Vasya', 50000),
//     new Employee('Semen', 60000),
//     new Employee('Varya', 70000)
//   ];
  
// for (let employee of employees) {
//     console.log(`${employee.getName()}: $${employee.getSalary()}`);
//   }

// задание 25

class Employee {
    #name;
    #salary;
    
    constructor(name, salary) {
      this.#name = name;
      this.#salary = salary;
    }
    
    getName() {
      return this.#name;
    }
    
    getSalary() {
      return this.#salary;
    }
  }
  
  class EmployeesCollection {
    #employees;
    
    constructor() {
      this.#employees = [];
    }
    
    add(employee) {
      this.#employees.push(employee);
    }
    
    show() {
      for (let employee of this.#employees) {
        console.log(`${employee.getName()}: $${employee.getSalary()}`);
      }
    }
    
    getTotalSalary() {
      let totalSalary = 0;
      for (let employee of this.#employees) {
        totalSalary += employee.getSalary();
      }
      return totalSalary;
    }
    
    getAverageSalary() {
      if (this.#employees.length > 0) {
        return this.getTotalSalary() / this.#employees.length;
      } else {
        return 0;
      }
    }
  }
  
  let uc = new EmployeesCollection;
  uc.add(new Employee('John', 50000));
  uc.add(new Employee('Eric', 60000));
  uc.add(new Employee('Kyle', 70000));
  uc.show();
  console.log(`Total salary: $${uc.getTotalSalary()}`);
  console.log(`Average salary: $${uc.getAverageSalary()}`);