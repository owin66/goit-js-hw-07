import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const cards = renderImg(galleryItems);

galleryEl.insertAdjacentHTML('afterBegin', cards);

// render cards

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
    document.addEventListener('keydown', handleClose);
  },

  onClose: instance => {
    document.removeEventListener('keydown', handleClose);
  },
});

function openImageClick(e) {
  const { target } = e;
  e.preventDefault();

  if (target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = target.dataset.source;
  instance.show();
}

galleryEl.addEventListener('click', openImageClick);

function handleClose(event) {
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}
