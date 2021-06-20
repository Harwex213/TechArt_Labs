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
