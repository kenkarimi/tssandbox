//You can creating your own user-defined complex types by combining simple ones. This can be done using either unions or generics.
//Also see: Unions.

//Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
type StringArray = Array<string>; //StringArray type will have to contain strings only.
type NumberArray = Array<number>; //NumberArray type will have to contain numbers only.
type ObjectWithNameArray = Array<{ name: string }>; //ObjectWithNameArray type will not only have to be a sequence of objects, but each object will have to contain a name & string key-value pair.
type ObjectArray = Array<{}> //ObjectArray type will only have to be to be a sequence of objects with empty or any key-value pairs.

let my_string_array: StringArray = ['Java', 'Javascript', 'Typescript'];
console.log(my_string_array);

let my_number_array: NumberArray = [0, 1, 2, 3, 4, 5];
console.log(my_number_array);

let my_object_array: ObjectWithNameArray = [{ name: "John Doe" }, { name: "Jane Doe" }]
console.log(my_object_array)

let my_second_object_array: ObjectArray = [{ id: 13450, name: 'Marvin' }, {}]
console.log(my_second_object_array);

interface Backpack<Type> {
    add: (obj: Type) => void; //Object is of type Type and void is the return type
    get: () => Type; //Whereas here, the function has no parameters & Type is the return type.
}

//This line is a shortcut to tell TypeScript there is a constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

//Object is a string because the return type of the get function in the interface will be a string.
//const object = backpack.get(); //If you console.log this, it should give an error because the return type is a string and it's trying to return a void(there's nothing to actually return). Also, error here because no value was ever assigned to backpack.

//The add function in the interface takes in a string within its parameters.
//backpack.add('Jane Doe'); //Error when you run because no value was actually ever assigned to backpack. Instead we used delcare on the constant to tell it not to worry about where the initializing value was coming from.
