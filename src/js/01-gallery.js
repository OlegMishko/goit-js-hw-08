// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
let markupImg = "";
const refs = { imageGallery: document.querySelector('.gallery'), };

galleryItems.forEach(({ preview, original, description }) => {

    markupImg += `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </div>
    `;

});

addImgMarkup(markupImg);

function addImgMarkup(markup) {
    refs.imageGallery.insertAdjacentHTML('beforeend', markup);
    console.log(markup);
}

const lightbox = new SimpleLightbox(".gallery a", {

    captionsData: "alt",
    captionDelay: 250,
});