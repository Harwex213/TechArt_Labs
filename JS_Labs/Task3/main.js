const downloads = [
    {
        id: 1,
        title: "Recipe",
        status: "Done",
    },
    {
        id: 2,
        title: "Workouts",
        status: "Pending",
    },
    {
        id: 3,
        title: "Passwords",
        status: "Pending",
    },
    {
        id: 4,
        title: "To Do 2021",
        status: "Pending",
    },
    {
        id: 5,
        title: "Books",
        status: "Failed",
    },
];

function isIterable(object) {
    if (object === undefined) {
        return false;
    }
    return typeof object[Symbol.iterator] === "function";
}

function CreateTable(data, container) {
    if (!isIterable(data)) {
        throw new Error("Was received non iterable data.");
    }

    const tableElement = document.createElement("table");
    for (const dataElement of data) {
        const newRow = document.createElement("tr");
        tableElement.append(newRow);

        let newColumn = document.createElement("td");
        if (typeof dataElement === "object") {
            for (const [_, elementProperty] of Object.entries(dataElement)) {
                newColumn.innerHTML = String(elementProperty);
                newRow.append(newColumn);
                newColumn = document.createElement("td");
            }
        } else {
            newColumn.innerHTML = String(dataElement);
            newRow.append(newColumn);
        }
    }
    container.append(tableElement);
}

CreateTable(downloads, document.querySelector(".table"));

function CheckData() {
    console.log("Check Started");

    const pendingObjects = downloads.filter((x) => x.status === "Pending");
    if (pendingObjects.length === 0) {
        return false;
    }

    pendingObjects[0].status = "Done";

    const tableElement = document.querySelector(".table").children[0];
    for (const child of tableElement.children) {
        if (child.children[0].innerHTML === String(pendingObjects[0].id)) {
            child.children[2].innerHTML = pendingObjects[0].status;
        }
    }
    return true;
}

document.querySelector(".check-data").addEventListener("click", () => {
    setTimeout(() => {
        let intervalId = setInterval(() => {
            if (!CheckData()) {
                clearInterval(intervalId);
            }
        }, 1000);
    }, 500);
});

// Task b.
const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");
let callCount = 0;

function ExecuteSynchronizing(inputText) {
    if (callCount !== 1) {
        console.log("Synchronizing declined!");
        return;
    }

    console.log("Synchronizing executed!");
    firstInput.value = inputText;
    secondInput.value = inputText;
}

function RegisterSynchronizing(inputText) {
    console.log("Synchronizing called!");

    callCount++;
    setTimeout(() => ExecuteSynchronizing(inputText), 1000);
    setTimeout(() => callCount--, 1000);
}

firstInput.addEventListener("keyup", () => {
    RegisterSynchronizing(firstInput.value);
});
secondInput.addEventListener("keyup", () => {
    RegisterSynchronizing(secondInput.value);
});
