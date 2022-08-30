// practice deploying JS promises
const add = (xPromise, yPromise) => {
    console.log([xPromise, yPromise]);
    // return value waits for both x and y to be provided before firing
    return Promise.all([xPromise, yPromise])
    .then((array) => array[0] + array[1]);
}
const fetchX = (value) => {
    console.log(value);
    return Promise.resolve(value);
}
const fetchY = (value) => {
    console.log(value);
    return Promise.resolve(value);
}
add(fetchX(1), fetchY(2))
.then((sum) => console.log(sum));