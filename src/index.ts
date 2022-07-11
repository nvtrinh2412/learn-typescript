function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022)
    return income * 0.1;
  return income * 0.4;
}

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}
let employee: Employee = {
  id: 1,
  name: "Trinh",
  retire: (date: Date) => {
    console.log(date);
  }
}

//union type
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2
}
// Tuple
const tuple:[number,string] = [123,"Hello"]; 

//intersection type
type Draggable = {
  drag: () => void
}

type Resizeable = {
  resize: () => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
  drag() {
    console.log("Drag");
  },
  resize() {
    console.log("Resize");
  },
}

//Literal type (specific)
type Quantity = 50 | 100
type Metric = 'cm' | 'inch'

//Nullable type

function greet(name: string | null | undefined) {
  if (name)
    console.log("Hello " + name);
  else
    console.log("Hola stranger");
}


//Optional Chaining

type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

//Optional chaining
let customer = getCustomer(10)
// console.log(customer?.birthday?.getFullYear());


//interface
interface StringArray {
  [index: number]: string;
}

let myName: StringArray;
myName = ["Tôi", "là", "Nguyễn", "Văn", "A"];

let myStr: string = myName[0];


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
    constructor(
      public name: string,
      private age: number,
      readonly male: boolean){}
    print(){
     console.log( `Name: ${this.name} - Age ${this.age} - Gender Male : ${this.male}`);
    }
}

const herry = new Student("Herry",20,true)
const justin = new Student("Justin",20,true)
let students:Student[] = [];
students.push(herry)
students.push(justin,herry)

//Interface
interface Person{
  name:string
  age:number,
  speak:(lang:string)=>void
  spend(amount:number): number
}

const kiyamus:Person = {
  name: "Kiyamus",
  age: 20,
  speak(text:string):void {
    console.log(text);
  }, 
  spend(amt:number){
    console.log("Your amount"+amt);
    return amt
  }
}


// Generic

function hello<T>(a: T, b: T): [T, T] {
  return [a, b];
}
const makeFullNameConstrain = (obj:{firstName:string,lastName:string}) =>{
  return{
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const n1 = makeFullNameConstrain({firstName: "Trinh",lastName:"Nguyen"})
console.log(n1.fullName);

const makeFullNameConstrainWithGeneric = <T extends {firstName:string,lastName:string}>(obj:T)=>{
  return{
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const n2 = makeFullNameConstrainWithGeneric({firstName:"Justin", lastName:"Nguyen",age:20})
console.log(n2);

const addNewEmployee = <T extends object>(obj:T )=>{
  const uid = Math.floor(Math.random()*100);
  return{
    ...obj,
    uid,
  }
}

const n3 = addNewEmployee({firstName:"Kiyamus", lastName:"Nguyen",age:20})
console.log(n3);

//Generic in Interface

interface Resource<T>{
  uid: number,
  name: string,
  data: T
}
const resourceOne : Resource<string> = {
  uid: 1,
  name: "Kiyamyus",
  data: "Hello",
}
