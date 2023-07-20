//You can creating your own user-defined complex types by combining simple ones. This can be done using either unions or generics.
//Also see: Generics.
var service = "open"; //String can only be open, closed or minimized. The union almost functions like an enum.
console.log(service);
//Unions also provides a way to handle different types too.
function getLength(obj) {
    return obj.length;
}
console.log(getLength("Typescript"));
console.log(getLength(['Java', 'Javascript', 'Typescript']));
function getType(obj) {
    if (typeof obj === 'string') {
        console.log("Type of parameter is string");
    }
    else if (Array.isArray(obj)) {
        console.log("Type of parameter is array");
    }
}
getType("Typescript");
getType(['Java', 'Javascript', 'Typescript']);
