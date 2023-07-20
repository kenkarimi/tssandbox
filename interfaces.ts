/*function showTodo(todo: { title: string, text: string }){
    console.log(todo.title + ' '+ todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);*/

interface Todo { //The object within the parameters of showTodo will have to conform to this interface.
    title: string,
    text: string
}

function showTodo(todo: Todo){
    console.log(todo.title + ' '+ todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);

interface Person { //The person object will have to conform to this interface.
    name: string;
    id: number;
}

const person: Person = {
    name: "John Doe",
    id: 0
}

console.log(person);