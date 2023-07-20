//Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
//NB: There are three types of enums: Numeric enums, String enums, Heterogenous enums.
//NB: Being able to save values e.g. numbers & strings in enums means that unlike in Java or Swift, the enums themselves can be printed or saved in databases since they have inner values.
//NB: This means that there's no need to use the ternary operator to convert them back and forth when its time to compare, print or save them in a database.
//Numeric Enums: 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    if (message === UserResponse.No) {
        console.log("Recepient: ".concat(recipient, " Message is ").concat(message, "(No)")); //Recepient: Jane Doe Message is 0(No)
    }
    else if (message === UserResponse.Yes) {
        console.log("Recepient: ".concat(recipient, " Message is ").concat(message, "(Yes)")); //Recepient: Jane Doe Message is 1(Yes)
    }
}
respond("Jane Doe", UserResponse.Yes);
//NB: Even if you don't initialize No & Yes with 0 & 1 respectively, the would still be auto-incremented meaning that when consol logged, they would still print out 0 & 1 respectively, yielding the same result as seen above.
//String Enums:
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
var my_direction = Direction3.Right;
console.log(my_direction); //Prints: RIGHT
//NB: String enums are a similar concept to numbered enums but with subtle runtime differences. Each member has to be constant-initialized with a string literal or with another string enum member.
//Heterogeneous Enums:
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
var my_result = BooleanLikeHeterogeneousEnum.No;
console.log(BooleanLikeHeterogeneousEnum.No);
