const firstName: string = "Sabbir";
const lastName: string = "Hossain";
const email: string = "devssabbir@gmail.com";

function generateUser(fname: string, lname: string, email: string): object {
  return {
    name: fname,
    lname: lname,
    email: email,
  };
}

const user = generateUser(firstName, lastName, email);

class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getCar() {
    console.log(this.name);
  }
}

const car = new Car("BMW");

const carName = car.getCar();
