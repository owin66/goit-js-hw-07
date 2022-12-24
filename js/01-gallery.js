import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const cards = renderImg(galleryItems);

galleryEl.insertAdjacentHTML('afterBegin', cards);

function renderImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'>
      <a class = 'gallery__link' href = '${original}'>
    <img class='gallery__image' src='${preview}' alt='${description}' data-source='${original}'>
    </a>
    </div>`;
    })
    .join('');
}
console.log(galleryEl);

const instance = basicLightbox.create(`<img class="modal-img src="">`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscCloseModal);
  },

  onClose: instance => {
    window.removeEventListener('keydown', onEscCloseModal);
  },
});

function openImageClick(e) {
  console.log(e);
}

galleryEl.addEventListener('click', openImageClick);
