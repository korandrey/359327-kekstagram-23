import { generatePhotos } from './data.js';
import { openFullScreenPictures } from './full-sizePicture.js';

const sectionPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('a');


generatePhotos.forEach((photo) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('img').setAttribute('src', photo.url);
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments[0].id;
  sectionPictures.appendChild(photoElement).addEventListener('click', () => {
    openFullScreenPictures(photo);
  });
});


