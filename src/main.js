import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const lightbox = new SimpleLightbox('.card a', {
  captionsData: 'alt',
});

const form = document.querySelector('.form');
const container = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const formInput = document.querySelector('.form-input');

form.addEventListener('submit', onFormSubmit);

loader.style.display = 'none';


function onFormSubmit(event) {
  event.preventDefault();

  container.innerHTML = '';
  loader.style.display = '';

  const userSearch = event.target.elements.input.value.trim();

  if (userSearch.length === 0) {
    iziToast.show({
      message: 'Please, fill in the "Search" params',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      position: 'center',
    });
    return;
  }

  getImages(userSearch)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: ' #ffa000',
          messageColor: '#fff',
          position: 'center',
        });
      }

      loader.style.display = 'none';

      container.innerHTML = createMarkup(data.hits);

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.show({
        message: `${error}`,
        backgroundColor: ' #ffa000',
        messageColor: '#fff',
        position: 'center',
      });
    })
    .finally(() => form.reset());
}
