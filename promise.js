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
add(fetchX(1), fetchY('X'))
.then(
    function(sum) {
        console.log(sum);
    },
    function(err) {
        console.error(err);
    }
);

const delay = (time) => new Promise((resolve, reject) => {
    setTimeout(resolve, time);
});
setTimeout(() => {
    console.log("step 0");
}, 0);
console.log('step 1');
delay(100)
.then(() => {
    console.log("step 2 after 100ms");
    return delay(400);
})
.then(() => {
    console.log("step 3 after 400ms");
    return delay(3000);
})
.then(() => {
    console.log("step 4 after 3000ms");
});

// learn how to use APIs
const main = document.querySelector('div.main');
const picture = document.createElement('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=KItDMzaj55RdWIHhN5eJNf6eoNvcj3eE&s=cats', {
    mode: "cors"
})
  .then((response) => {
    console.log(response.json());
  });
main.appendChild(picture);
