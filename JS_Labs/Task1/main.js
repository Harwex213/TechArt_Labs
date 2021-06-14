Array.prototype.mapByOleg = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    const newArray = [];
    for (const arrayElement of this) {
        newArray.push(callback(arrayElement));
    }
    return newArray;
};

Array.prototype.filterByOleg = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    const newArray = [];
    for (const arrayElement of this) {
        if (callback(arrayElement)) {
            newArray.push(arrayElement);
        }
    }
    return newArray;
};

Array.prototype.reduceByOleg = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const isInitialValueSet = initialValue !== undefined;
    if (this.length === 0 && !isInitialValueSet) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = isInitialValueSet ? initialValue : this[0];
    let initialIndex = isInitialValueSet ? 0 : 1;

    for (let index = initialIndex; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }

    return accumulator;
};

const notes = [
    {
        id: 1,
        title: "Recipe",
        description: "Ingredients include 2 eggs...",
        pagesCount: 2,
        isMarked: false,
        access: [],
    },
    {
        id: 2,
        title: "Workouts",
        description: "3 sets of squats...",
        pagesCount: 1,
        isMarked: true,
        access: [],
    },
    {
        id: 3,
        title: "Passwords",
        description: "VISA ...",
        pagesCount: 6,
        isMarked: true,
        access: [],
    },
    {
        id: 4,
        title: "To Do 2021",
        description: "1. Learn JS...",
        pagesCount: 3,
        isMarked: false,
        access: [],
    },
];
console.log(notes);

console.log("-----------------------------------");
console.log("Using Map");
console.log("-----------------------------------");
const newNotesFromOlegMap = notes.mapByOleg((x) => ({
    id: x.id,
    title: x.title,
}));
const newNotesFromMap = notes.map((x) => ({ id: x.id, title: x.title }));
console.log(newNotesFromOlegMap);
console.log(newNotesFromMap);
console.log("-----------------------------------");

console.log("-----------------------------------");
console.log("Using Filter");
console.log("-----------------------------------");
const newNotesFromOlegFilter = notes.filterByOleg((x) => x.isMarked);
const newNotesFromFilter = notes.filter((x) => x.isMarked);
console.log(newNotesFromOlegFilter);
console.log(newNotesFromFilter);
console.log("-----------------------------------");

console.log("-----------------------------------");
console.log("Using Reduce");
console.log("-----------------------------------");
const NotesPagesFromOlegReduce = notes.reduceByOleg(
    (accumulator, element) => accumulator + element.pagesCount,
    0
);
// eslint-disable-next-line unicorn/no-array-reduce
const NotesPagesFromReduce = notes.reduce(
    (accumulator, element) => accumulator + element.pagesCount,
    0
);
console.log(NotesPagesFromOlegReduce);
console.log(NotesPagesFromReduce);
console.log("-----------------------------------");

function getUnique(array) {
    for (const arrayElement of array) {
        if (array.indexOf(arrayElement) === array.lastIndexOf(arrayElement)) {
            return arrayElement;
        }
    }
}

const testArray = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5];
console.log(getUnique(testArray));
