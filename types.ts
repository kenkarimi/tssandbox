//To Run: tsc types.ts
//To Run and watch: tsc types.ts -w

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*let strArr: string[];
let numArr: number[];
let boolArr: boolean[];*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number]; //A tuple is an array with a defined number of elements.

myString = 'Hello world';
myNum = 22;
myBool = false;
myVar = 5;

strArr = ['hello', 'world'];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ['hello', 4];

let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);