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

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

//Type-casting:
let word: string = null as any; //null value cast as any so its acceptable to a variable of type string.
//let word2: string = null as string; //can't cast null as string.
//let word3: string = null as number; //can't cast null as number.
//let word4: string = null as boolean; //can't cast null as boolean.

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
console.log(word);