import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form');
const container = document.querySelector('.gallery');
// const loader = document.querySelector(".loader");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
  const userSearch = event.target.elements.input.value.trim();

  if (userSearch.length === 0) {
    iziToast.show({
      message: 'Please, fill in the "Search" params',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      position: 'center',
    });
      container.innerHTML = "";
    return;
    }

  getImages(userSearch)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          position: 'center',
        });
      }

        container.innerHTML = createMarkup(data.hits);

           const lightbox = new SimpleLightbox('.card a', {
    captionsData: "alt",
});
        
        

    })
    .catch(error => console.log(error))
      .finally(() => form.reset());
}

function getImages(paramsToSearch) {
  const params = new URLSearchParams({
    key: '43250270-1f98e5ae52bb69b689c51c131',
    q: paramsToSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="card">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" class="card-img">
        </a>
        <ul class="card-stats">
          <li>
            <h3 class="card-stats-name">Likes</h3>
            <p class="card-stats-info">${likes}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Views</h3>
            <p class="card-stats-info">${views}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Comments</h3>
            <p class="card-stats-info">${comments}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Downloads</h3>
            <p class="card-stats-info">${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');
}



