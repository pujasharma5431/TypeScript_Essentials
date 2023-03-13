let fname: string ="Puja";
fname="Sharma";

let num:number;
num=1;

const names: string[]=[];
names.push("PP")

function sum (a:number, b:number):number{
    return a+b;
}

// Tuples

let address: [number,string,number];
address=[11, "BUTWAL", 1223];

// object

let person:{name: string,age?:number};
person={name: 'Puja', age:30}

function add(a1: string, b1?:string){
    return a1+b1;
}

console.log(add('1','2'))