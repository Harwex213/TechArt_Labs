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

Array.prototype.reduceByOleg = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    // TODO: Make accumulator = this[0] if initialValue === undefined, and currentValue = this[1]
    let accumulator = 0;
    for (const arrayElement of this) {
        accumulator = callback(accumulator, arrayElement);
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
    (accumulator, element) => accumulator + element.pagesCount
);
// eslint-disable-next-line unicorn/no-array-reduce
const NotesPagesFromReduce = notes.reduce(
    (accumulator, element) => accumulator + element.pagesCount,
    0
);
console.log(NotesPagesFromOlegReduce);
console.log(NotesPagesFromReduce);
console.log("-----------------------------------");
