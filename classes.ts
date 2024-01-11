interface UserInterface { //Class user will have to conform to this interface.
    name: string;
    email: string;
    age: number;
    register(): void;
    payInvoice: () => void; //Alternative to the declaration style above this.
}

/*The global variables/properties in class user need to have corresponding types to the ones implemented in the UserInterface above.
 *The methods/functions in user don't need to be typed since their types have already been declared in the interface above. When you hover over them, they show their typing.*/
class User implements UserInterface {
    public name: string; //access modifiers can be public, private, protected or nothing at all like the pay invoice method below that has none. protected means it can't be used from outside of this class but can be used in classes that inherit this one.
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: '+ this.name);
    }

    public register(){
        console.log(this.name +' is now registered');
    }

    payInvoice(){
        console.log(this.name +' paid invoice');
    }
}

class Member extends User { //inherits from User
    id: number;

    constructor(id: number, name: string, email: string, age: number){ //id, along with the fields of the class it's inheriting from.
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let john = new User('John Doe', 'jdoe@gmail.com', 34);
console.log(john.name);
john.register();

let jane: User = new Member(1, 'Jane Doe', 'doejane@gmail.com', 31);
jane.payInvoice();