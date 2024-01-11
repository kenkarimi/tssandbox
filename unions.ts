//You can creating your own user-defined complex types by combining simple ones. This can be done using either unions or generics.
//Also see: Generics.

//With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false.
type MyBool = true | false; //If you hover over MyBool, you'll see that it's classed as a boolean. This is a property of the structural type system.

//A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let service: WindowStates = "open"; //String can only be open, closed or minimized. The union almost functions like an enum.
console.log(service);

//Unions also provides a way to handle different types too.
function getLength(obj: string | string[]): Number { //Type can either be a string or a string array.
    return obj.length;
}

console.log(getLength("Typescript"));
console.log(getLength(['Java', 'Javascript', 'Typescript']));

function getType(obj: string | string[]) {
    if (typeof obj === 'string') {
        console.log("Type of parameter is string");
    } else if(Array.isArray(obj)) {
        console.log("Type of parameter is array");
    }
}

getType("Typescript");
getType(['Java', 'Javascript', 'Typescript']);