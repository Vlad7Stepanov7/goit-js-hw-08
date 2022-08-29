// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const murkupImage = galleryItems => {
    const { preview, original, description } = galleryItems;
    return `
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
  </a>
    `;
};
// добавил разметку галереи
const gallery = document.querySelector(`.gallery`);

const galleryMurkup = galleryItems.map(murkupImage).join(` `);

gallery.insertAdjacentHTML(`afterbegin`, galleryMurkup);

// инициализация библиотеки
const lightbox = new SimpleLightbox(`.gallery__link`, { captionsData: `title`, captionPosition: `bottom`, captionDelay: 250, });

