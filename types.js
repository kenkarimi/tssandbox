//To Run: tsc types.ts
//To Run and watch: tsc types.ts -w
var myString;
var myNum;
var myBool;
var myVar;
/*let strArr: string[];
let numArr: number[];
let boolArr: boolean[];*/
var strArr;
var numArr;
var boolArr;
var strNumTuple; //A tuple is an array with a defined number of elements.
myString = 'Hello world';
myNum = 22;
myBool = false;
myVar = 5;
strArr = ['hello', 'world'];
numArr = [1, 2, 3];
boolArr = [true, false, true];
strNumTuple = ['hello', 4];
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//Type-casting:
var word = null; //null value cast as any so its acceptable to a variable of type string.
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
