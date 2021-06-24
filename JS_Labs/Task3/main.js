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
    if (data.length === 0) {
        throw new Error("Was received empty data.");
    }

    const table = document.createElement("table");

    const titleRow = document.createElement("tr");
    table.append(titleRow);
    for (const [key, _] of Object.entries(data[0])) {
        let titleColumn = document.createElement("td");
        titleColumn.innerHTML = String(key);
        titleRow.append(titleColumn);
    }

    for (const dataElement of data) {
        const newRow = document.createElement("tr");
        table.append(newRow);

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

    container.append(table);
}

CreateTable(downloads, document.querySelector(".table"));

const findStatusElementIndex = (tableElementsArray) => {
    if (tableElementsArray.length === 0) {
        throw new Error("Was received empty table.");
    }

    const titleRow = tableElementsArray[0];
    for (let i = 0; i < titleRow.children.length; i++) {
        if (titleRow.children[i].innerHTML === "status") {
            return i;
        }
    }
};

function CheckData(checkDataParams) {
    console.log("Check Started");

    const pendingObjects = checkDataParams.tableElements.filter(
        (child) => child.children[checkDataParams.statusElementIndex].innerHTML === "Pending"
    );

    if (pendingObjects.length === 0) {
        return false;
    }

    pendingObjects[0].children[checkDataParams.statusElementIndex].innerHTML = "Done";
    return true;
}

document.querySelector(".check-data").addEventListener("click", () => {
    const table = document.querySelector(".table").children[0];
    const checkDataParams = {
        tableElements: null,
        statusElementIndex: null,
    };
    checkDataParams.tableElements = Array.from(table.children);
    checkDataParams.statusElementIndex = findStatusElementIndex(checkDataParams.tableElements);

    setTimeout(() => {
        let intervalId = setInterval(() => {
            if (!CheckData(checkDataParams)) {
                clearInterval(intervalId);
            }
        }, 1000);
    }, 500);
});

// Task b.
const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");

function debounce(func, delay) {
    let timeoutId;

    return function ExecutedFunction() {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

const ExecuteSynchronizing = (inputText) => {
    firstInput.value = inputText;
    secondInput.value = inputText;
};

const RegisterSynchronizing = debounce(ExecuteSynchronizing, 1000);

firstInput.addEventListener("keyup", () => {
    RegisterSynchronizing(firstInput.value);
});
secondInput.addEventListener("keyup", () => {
    RegisterSynchronizing(secondInput.value);
});
