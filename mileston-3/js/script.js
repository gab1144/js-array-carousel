const imagesArray=[
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
];

const el = document.querySelector.bind(document);

let imagesTags="";
let thumbnailsTags="";

const slider = el('.slider');
const thumbnails = el('.thumbnails');

for (let i=0; i<imagesArray.length; i++) {
  imagesTags += `
  <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
  thumbnailsTags += `
  <img class="thumbnail-item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

slider.innerHTML += imagesTags;
thumbnails.innerHTML += thumbnailsTags;

const next = el('.btn-chevron.down');
const prev = el('.btn-chevron.up');

const items = document.getElementsByClassName ('item');
const thumbnailItems = document.getElementsByClassName ('thumbnail-item');

let counterImages=0;

items[counterImages].classList.add('active');
thumbnailItems[counterImages].classList.add('active');

next.addEventListener('click', function(){
  //nasconde l'immagine
  items[counterImages].classList.remove('active');
  thumbnailItems[counterImages].classList.remove('active');
  //mostra l'immagine successiva
  if(counterImages === (imagesArray.length - 1)) {
    counterImages=0;
    items[counterImages].classList.add('active');
    thumbnailItems[counterImages].classList.add('active');
  } else {
    items[++counterImages].classList.add('active');
    thumbnailItems[counterImages].classList.add('active');
  }
});

prev.addEventListener('click', function(){
  //nasconde l'immagine
  items[counterImages].classList.remove('active');
  thumbnailItems[counterImages].classList.remove('active');
  //mostra l'immagine precedente
  if(counterImages === 0){
    counterImages=imagesArray.length - 1;
    items[counterImages].classList.add('active');
    thumbnailItems[counterImages].classList.add('active');
  } else {
    items[--counterImages].classList.add('active');
    thumbnailItems[counterImages].classList.add('active');
  }
});