"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.1;
    return income * 0.4;
}
let employee = {
    id: 1,
    name: "Trinh",
    retire: (date) => {
        console.log(date);
    }
};
//union type
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
// Tuple
const tuple = [123, "Hello"];
let textBox = {
    drag() {
        console.log("Drag");
    },
    resize() {
        console.log("Resize");
    },
};
//Nullable type
function greet(name) {
    if (name)
        console.log("Hello " + name);
    else
        console.log("Hola stranger");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
//Optional chaining
let customer = getCustomer(10);
let myName;
myName = ["Tôi", "là", "Nguyễn", "Văn", "A"];
let myStr = myName[0];
// Classs
class Student {
    // public name: string
    // private age: number
    // readonly male: boolean
    // constructor(n:string,a:number, m:boolean){
    //   this.name = n;
    //   this.age=a;
    //   this.male = m;
    // }
    constructor(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    print() {
        console.log(`Name: ${this.name} - Age ${this.age} - Gender Male : ${this.male}`);
    }
}
const herry = new Student("Herry", 20, true);
const justin = new Student("Justin", 20, true);
let students = [];
students.push(herry);
students.push(justin, herry);
const kiyamus = {
    name: "Kiyamus",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amt) {
        console.log("Your amount" + amt);
        return amt;
    }
};
// Generic
function hello(a, b) {
    return [a, b];
}
const makeFullNameConstrain = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` });
};
const n1 = makeFullNameConstrain({ firstName: "Trinh", lastName: "Nguyen" });
console.log(n1.fullName);
const makeFullNameConstrainWithGeneric = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` });
};
const n2 = makeFullNameConstrainWithGeneric({ firstName: "Justin", lastName: "Nguyen", age: 20 });
console.log(n2);
const addNewEmployee = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const n3 = addNewEmployee({ firstName: "Kiyamus", lastName: "Nguyen", age: 20 });
console.log(n3);
const resourceOne = {
    uid: 1,
    name: "Kiyamyus",
    data: "Hello",
};
console.log(Window);
//# sourceMappingURL=index.js.map