

const shuffle = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
        i = Math.floor(Math.random() * array.length);
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }
    return copy;
}

let checklist = [];
const boxes = document.querySelectorAll('.memory');
let images = ['award', 'happy', 'music', 'angular', 'react', 'running', 'fist', 'hand'];
const doubleImages = images.concat(images);
const shuffledImages = shuffle(doubleImages);


// Loop through the shuffled images array
// add a tag like this to each .memory div
// `<img src="${imageName}.png" class="front"/>`

for (let i = 0; i < shuffledImages.length; i++) {
    const imageName = shuffledImages[i];
    boxes[i].innerHTML = `<img src="images/${imageName}.png" class="front"/>`;
}

const checkImages = () => {
    if (checklist[0].firstChild.src !== checklist[1].firstChild.src) {
        setTimeout(() => {
            checklist[0].firstChild.style.visibility = "hidden";
            checklist[1].firstChild.style.visibility = "hidden";
            empty();
        }, 500);
    } else {
        empty();
    }
}

let parent = $(".container");
let divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}

$('.front').css("visibility", "hidden");
$(".memory").click((event) => {
    $(event.target).children().first().css("visibility", "visible");
    if (event.target.classList.contains("memory")) {
        checklist.push(event.target);
    }
    if (checklist.length == 2) {
        checkImages();
    }
})

const empty = () => {
    return checklist.length = 0;
}

$(".one").click(function () {
    Swal.fire("Memory game is a well known game. there are several field with picures which all arent" +
        " visible at the begining.there are always fields with same picures on it when you click on the fields " +
        "with the same picure on it one after the another then the picure stay visible otherwise only the last selected " +
        " picure stay visible.the game is solved when all pics are visible.\nGood luck");
})










