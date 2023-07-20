//Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.


//NB: There are three types of enums: Numeric enums, String enums, Heterogenous enums.
//NB: Being able to save values e.g. numbers & strings in enums means that unlike in Java or Swift, the enums themselves can be printed or saved in databases since they have inner values.
//NB: This means that there's no need to use the ternary operator to convert them back and forth when its time to compare, print or save them in a database.

//Numeric Enums: 
enum Direction {
    Up = 1, //Up is initialized with 1. All of the following members are auto-incremented from that point on (2, 3 etc.)
    Down,
    Left,
    Right
}

enum Direction2 { //If we wanted to, we could leave off the initializers entirely.
    Up, //Up would have 0, Down would have 1, etc. This auto-incrementing behaviour is useful in cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.
    Down,
    Left,
    Right
}

enum UserResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
    if(message === UserResponse.No){
        console.log(`Recepient: ${recipient} Message is ${message}(No)`) //Recepient: Jane Doe Message is 0(No)
    } else if(message === UserResponse.Yes){
        console.log(`Recepient: ${recipient} Message is ${message}(Yes)`) //Recepient: Jane Doe Message is 1(Yes)
    }
}

respond("Jane Doe", UserResponse.Yes)

//NB: Even if you don't initialize No & Yes with 0 & 1 respectively, the would still be auto-incremented meaning that when consol logged, they would still print out 0 & 1 respectively, yielding the same result as seen above.

//String Enums:
enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let my_direction = Direction3.Right;
console.log(my_direction); //Prints: RIGHT

//NB: String enums are a similar concept to numbered enums but with subtle runtime differences. Each member has to be constant-initialized with a string literal or with another string enum member.

//Heterogeneous Enums:
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
}

let my_result: BooleanLikeHeterogeneousEnum = BooleanLikeHeterogeneousEnum.No
console.log(BooleanLikeHeterogeneousEnum.No);