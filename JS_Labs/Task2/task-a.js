window.x = 1;
const context = { x: 2 };
const testThis = function (y) {
    return `x=${this.x}, y=${y}`;
};
console.log(testThis(100)); // x=1, y=100

function bind(function_, context) {
    if (typeof function_ !== "function") {
        throw new TypeError(function_ + " is not a function");
    }
    return function () {
        return function_.apply(context, arguments);
    };
}

const boundFunction = bind(testThis, context);
const boundFunction2 = testThis.bind(context);
console.log(boundFunction(100)); // x=2, y=100
context.x = 20;
console.log(boundFunction(100)); // x=20, y=100
console.log(boundFunction2(100)); // x=20, y=100
