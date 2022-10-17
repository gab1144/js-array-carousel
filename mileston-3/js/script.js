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

const next = document.querySelector('.btn-chevron.down');
const prev = document.querySelector('.btn-chevron.up');

const items = document.getElementsByClassName ('item');

let counterImages=0;

items[counterImages].classList.add('active');

next.addEventListener('click', function(){
  //nasconde l'immagine
  items[counterImages].classList.remove('active');
  //mostra l'immagine successiva
  if(counterImages === (imagesArray.length - 1)) {
    counterImages=0;
    items[counterImages].classList.add('active');
  }else{
    items[++counterImages].classList.add('active');
  }
});

prev.addEventListener('click', function(){
  //nasconde l'immagine
  items[counterImages].classList.remove('active');
  //mostra l'immagine precedente
  if(counterImages === 0){
    counterImages=imagesArray.length - 1;
    items[counterImages].classList.add('active');
  } else {
    items[--counterImages].classList.add('active');
  }
});