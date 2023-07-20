//You can creating your own user-defined complex types by combining simple ones. This can be done using either unions or generics.
//Also see: Unions.
var my_string_array = ['Java', 'Javascript', 'Typescript'];
console.log(my_string_array);
var my_number_array = [0, 1, 2, 3, 4, 5];
console.log(my_number_array);
var my_object_array = [{ name: "John Doe" }, { name: "Jane Doe" }];
console.log(my_object_array);
var my_second_object_array = [{ id: 13450, name: 'Marvin' }, {}];
console.log(my_second_object_array);
//Object is a string because the return type of the get function in the interface will be a string.
//const object = backpack.get(); //If you console.log this, it should give an error because the return type is a string and it's trying to return a void(there's nothing to actually return). Also, error here because no value was ever assigned to backpack.
//The add function in the interface takes in a string within its parameters.
//backpack.add('Jane Doe'); //Error when you run because no value was actually ever assigned to backpack. Instead we used delcare on the constant to tell it not to worry about where the initializing value was coming from.
