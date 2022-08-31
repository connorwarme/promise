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
main.classList.add('main');
const picContainer = document.createElement('div');
picContainer.className = 'picContainer';
const picture = document.createElement('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=KItDMzaj55RdWIHhN5eJNf6eoNvcj3eE&s=cats', {
    mode: "cors"
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data.images.original.url);
    picture.src = response.data.images.original.url;
  })
main.appendChild(picContainer);
picContainer.appendChild(picture);
const refresh = document.createElement('button');
refresh.textContent = "Refresh";
main.appendChild(refresh);

let currentValue = 'cats';
const kitties = () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=KItDMzaj55RdWIHhN5eJNf6eoNvcj3eE&s=${currentValue}`, {
    mode: "cors"
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data.images.original.url);
    picture.src = response.data.images.original.url;
  })
}
refresh.addEventListener('click', () => {
    console.log('fire');
    kitties();
});

const searchContainer = document.createElement('div');
searchContainer.classList.add('searchContainer');
main.appendChild(searchContainer);
const text = document.createElement('input');
const search = document.createElement('button');
search.textContent = "Search";
searchContainer.appendChild(text);
searchContainer.appendChild(search);

const getGIF = () => {
    const searchVal = text.value;
    currentValue = searchVal;
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=KItDMzaj55RdWIHhN5eJNf6eoNvcj3eE&s=${searchVal}`
    fetch(url, {
        mode: "cors"
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data.images.original.url);
        picture.src = response.data.images.original.url;
      })
      .catch((err) => {
        console.log(err);
        alert('Unable to find any GIFs. Try a different search!');
      })
    }
search.addEventListener('click', () => {
    console.log(text.value);
    getGIF();
})