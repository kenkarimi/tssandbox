interface UserInterface {
    name: string;
    email: string;
    age: number;
    register(): void;
    payInvoice(): void;
}

/*The global variables/properties in class user need to have corresponding types to the ones implemented in the UserInterface above.
 *The methods/functions in user don't need to be typed since their types have already been declared in the interface above. When you hover over them, they show their typing.*/
class User implements UserInterface {
    name: string;
    email: string;
    age: number;

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

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

//let john = new User('John Doe', 'doe@gmail.com', 34);
//john.register();

let mike: User = new Member(1, 'Mike Smith', 'msmith@gmail.com', 31);
mike.payInvoice();