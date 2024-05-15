/*
 
Create an Author class and a Book class.
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

class Book extends Author{
    constructor(title, price, quantity){
        super();
        this.title = title;
        this.price = price;
        this.quantity = quantity;

    }

    get title(){
        return this._title;
    }

    get price(){
        return this._price;
    }
    
    get quantity(){
        return this._quantity;
    }

    set title(value){
        this._title = value;
    }

    set price(value){
        this._price = value;
    }
    
    set quantity(value){
        this._quantity = value;
    }

    author(Author){
        this._name = Author;        
    }

    getProfit(){        
        const cost = prompt('Input cost per book', 2);
        return (this.price - cost) * this.quantity * 0.9;

    }


}


let help = new Book('help', 5, 1000000)