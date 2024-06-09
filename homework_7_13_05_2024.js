/*
 
1. Create an Author class and a Book class.

* Author should have: name, email, gender.

**It should have appropriate getters and setters.

**It should have a toString method.

*Book should have: title, author(Author), price, quantity.

**It should have appropriate getters and setters.

**It should have a method: getProfit(), which calculates the profit from the book based on
the price and quantity.

**It should have a toString method.

 */



class Author {
    constructor(name = '', surname = '', email = null, gender = null) {
        this.name = name;
        this.surname = surname;
        this.fullname = `${this._name} ${this._surname}`;
        this.email = email;
        this.gender = gender;
    }


    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get fullname() {
        return this._fullname;
    }

    get email() {
        return this._email;
    }

    get gender() {
        return this._gender;
    }

    set name(value) {
        this._name = value;
    }

    set surname(value) {
        this._surname = value;
    }

    set fullname(value) {
        this._fullname = `${this._name} ${this._surname}`;
    }

    set email(value) {
        this._email = value;
    }

    set gender(value) {
        this._gender = value;
    }

}


class Book {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;

    }

    get title() {
        return this._title;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    set title(value) {
        this._title = value;
    }

    set price(value) {
        this._price = value;
    }

    set quantity(value) {
        this._quantity = value;
    }

    author(credental) {
        const author = new Author(credental);
        return author.name;
    }

    getProfit() {
        const cost = prompt('Input cost per book', 2);
        return (this.price - cost) * this.quantity * 0.9;

    }


}


let help = new Book('help', 5, 1000000);



/*

2.Create an Account class. Account should have: id, name, balance.

**It should have setters for name and balance, and getters for all fields.

**It should have a method: credit(amount), which should add amount to balance and
return the updated balance.

**It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”

**It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”

**It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.

**It should have toString method.

*/


class Account {
  
    constructor(name, balance, id = randomNumGen(10000)) {
        // debugger;
        this._id = id;
        this.name = name;
        this.balance = balance;
        
    }
    

    // get id() {
    //     return this._id;
    // }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set name(value) {
        this._name = value;
    }

    // set id (value) {
    //     value;
    //    this._id;      
    // }

    set balance(value) {
        this._balance = value;
    }

    credit(amount) {
        this._balance += amount;
        return this._balance;
    };

    debit(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            return this._balance;
        } else {
            return "Amount exceeded balance."
        }
    };

    transferTo(anotherAccount, amount) {
        if (amount <= this._balance) {
            this._balance - amount;
            anotherAccount._balance + amount;
            return this._balance;
        } else {
            return "Amount exceeded balance."
        }
    };

    identifyAccounts(accountFirst, accountSecond){
        debugger;

        if (accountFirst.name === accountSecond.name &&
            accountFirst.id === accountSecond.id &&
            accountFirst.balance === accountSecond.balance) {
            return `${accountFirst} and ${accountSecond} are the same`
        } else {
            return `${accountFirst} and ${accountSecond} are different`
        }

    }

 

}
function randomNumGen(lim){
    return Math.abs(Math.floor(Math.random() * lim) - lim)
}



/*

3. Write classes: Person, Student, Staff.

*Person should have: firstName, lastName, gender, age.

**It should have appropriate getters and setters.
**It should have a method: toString().


*Student is inherited from Person. It should have program(array of strings), year, fee.

**It should have appropriate getters and setters.
**It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
**It should have a toString method.


*Teacher is inherited from Person. It should have program(string), pay.

**It should have appropriate getters and setters.
**It should have a toString method.


*/

class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get gender(){
        return this._gender;
    }

    get age(){
        return this._age;
    }


    set firstName(value){
        this._firstName = value;
    }

    set lastName(value){
        this._lastName = value;
    }

    set gender(value){
        this._gender = value;
    }

    set age(value){
        this._age = value;
    }
}


/*

*Student is inherited from Person. It should have program(array of strings), year, fee.

**It should have appropriate getters and setters.
**It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
**It should have a toString method.

*/

class Student extends Person{
    constructor(programs = [], year, fee, firstName, lastName, gender, age){    
        super(firstName, lastName, gender, age);
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }    

    get program(){
        return this._program;
    };

    get year(){
        return this._year;
    }

    get fee(){
        return this._fee;
    }



    set program(value){
        this._program.push(value);
    };

    set year(value){
        this._year = value;
    };

    set fee(value){
        this._fee = value;
    };

    passExam(program, grade){
        const portfolio = {};
        const grades = Object.values(portfolio);
        const subjects = Object.keys(portfolio);
        if(this._programs.includes(program)){
            ! portfolio[program] ?
             portfolio[program] = grade :
             portfolio[program] <= 50 ?
             portfolio[program] = grade :
             alert(`This ${program} passed, let's start next!!!`);
             if(this._programs.every(item => {
                subjects.includes(item)                
             }) && grades.every(grade => grade => 50 )
            ){
                alert(`Congratulations exams are passed, welcom to next year`);
                return this._year += 1;
            } else{
                passExam(program, grade);
             }
             
        } else {
            return `${program} not subject of current ${this._year} program`
        }

        

    }

}



/*

*Teacher is inherited from Person. It should have program(string), pay.

**It should have appropriate getters and setters.
**It should have a toString method.

*/

class Teacher extends Person{
    constructor(program, pay, firstName, lastName, gender, age){
        super(firstName, lastName, gender, age);
        this.name = super.name;
        this.pay = pay;
        
    }
    program(subject){
        const subjects = [];
        return subjects.push(subject);
        
    }
}