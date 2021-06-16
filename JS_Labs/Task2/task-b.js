const Robot = function (name) {
    this.name = name;
    return this;
};
function add(op1, op2) {
    this.name = this.name || "Human";
    return this.name + " can count to " + (op1 + op2);
}
const voltron = new Robot("Voltron");

console.log(add(0, 1));
("Human can count to 1"); //0 + 1
console.log(add.call(voltron, 1, 2));
("Voltron can count to 3"); //1 + 2
console.log(add.apply(voltron, [20, 30]));
("Voltron can count to 50"); //20 + 30
