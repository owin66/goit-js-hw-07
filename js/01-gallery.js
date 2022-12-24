import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
function renderImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'>
    <img class='gallery__image' src='${preview}' alt='${description}'>
    </div>`;
    })
    .join('');
}
console.log(galleryEl);
const cards = renderImg(galleryItems);
galleryEl.insertAdjacentHTML('afterBegin', cards);
