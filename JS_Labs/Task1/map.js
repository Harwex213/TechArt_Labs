Array.prototype.MapByOleg = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    let newArray = [];
    for (const arrayElement of this) {
        newArray.push(callback(arrayElement));
    }
    return newArray;
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
const newNotesFromOlegMap = notes.MapByOleg((x) => ({
    id: x.id,
    title: x.title,
}));
const newNotesFromMap = notes.map((x) => ({ id: x.id, title: x.title }));
console.log(newNotesFromOlegMap);
console.log(newNotesFromMap);
