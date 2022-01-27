const images = [
  "bg01.jpg",
  "bg02.jpg",
  "bg03.jpg"
];

const chosenImage = [images[Math.floor(Math.random() * images.length)]];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// document.body.prepend(bgImage);

bgImage.id = 'bgImage';