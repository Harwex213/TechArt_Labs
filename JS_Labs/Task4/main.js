// Task A
function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), duration);
    });
}

function logHi() {
    console.log("Hi");
}

delay(2000).then(logHi);

// Task B
function makeDroids() {
    const droids = [];
    for (let index = 0; index < 10; index++) {
        const droid = () => {
            console.log("D" + index);
        };
        droids.push(droid);
    }
    return droids;
}

for (const droid of makeDroids()) {
    droid();
}

// Task C
function makeSomething() {
    return new Promise((resolve, reject) => {
        let isCompleted = false;
        const executionTime = Math.random() * 5001;
        console.log("Execution time: " + executionTime);
        setTimeout(() => {
            isCompleted = true;
            resolve();
        }, executionTime);
        setTimeout(() => {
            if (!isCompleted) {
                reject();
            }
        }, 2000);
    });
}

makeSomething()
    .then(() => console.log("Less than 2s"))
    .catch(() => console.error("More than 2s"));
