

const shuffle = (array) => {
    var copy = [], n = array.length, i;
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
let player = 0;
const boxes = document.querySelectorAll('.memory');
let images = ['award','happy','music','angular','react','running','fist','hand'];
const doubleImages = images.concat(images);
const shuffledImages = shuffle(doubleImages);
console.log(shuffledImages);

// Loop through the shuffled images array
    // add a tag like this to each .memory div
// `<img src="${imageName}.png" class="front"/>`

for(let i = 0; i < shuffledImages.length; i++) {
    const imageName = shuffledImages[i];
    boxes[i].innerHTML = `<img src="images/${imageName}.png" class="front"/>`;
}

let parent = $("container");
let divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}
$('.front').css("visibility", "hidden");
$(".memory").click((event)=>{
    $(event.target).children().first().css("visibility","visible");
})


  
  




