const imagesArray=[
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
];

let imagesTags="";

const slider = document.querySelector('.slider');

for (let i=0; i<imagesArray.length; i++) {
  imagesTags += `
  <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

slider.innerHTML += imagesTags;

const next = document.querySelector('.btn-chevron up');
const prev = document.querySelector('.btn-chevron down');

const items = document.getElementsByClassName ('item');

items[0].classList.add('active');