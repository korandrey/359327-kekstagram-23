import { generatePhotos } from './data.js';

const sectionPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('a');


generatePhotos.forEach((photo) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('img').attributes[1].textContent = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments[0].message;
  sectionPictures.appendChild(photoElement);
});

