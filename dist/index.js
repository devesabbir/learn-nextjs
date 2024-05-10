"use strict";
const firstName = "Sabbir";
const lastName = "Hossain";
const email = "devssabbir@gmail.com";
function generateUser(fname, lname, email) {
    return {
        name: fname,
        lname: lname,
        email: email,
    };
}
const user = generateUser(firstName, lastName, email);
class Car {
    constructor(name) {
        this.name = name;
    }
    getCar() {
        console.log(this.name);
    }
}
const car = new Car("BMW");
const carName = car.getCar();
