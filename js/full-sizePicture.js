export function openFullScreenPictures(smallPhoto) {
  const sectionFullSizePictures = document.querySelector('.big-picture');
  sectionFullSizePictures.classList.remove('hidden');
  const showBigPhoto = sectionFullSizePictures.querySelector('.big-picture__img');
  showBigPhoto.querySelector('img').setAttribute('src', smallPhoto.url);
  sectionFullSizePictures.querySelector('.likes-count').textContent = smallPhoto.likes;
  sectionFullSizePictures.querySelector('.comments-count').textContent = smallPhoto.comments[0].id;
  const socialComments = sectionFullSizePictures.querySelector('.social__comments');
  socialComments.innerHTML =
    `<li class="social__comment">
  <img
      class="social__picture"
      src="${smallPhoto.comments[0].avatar}"
      alt="${smallPhoto.comments[0].name}"
      width="35" height="35">
  <p class="social__text">${smallPhoto.comments[0].message}</p>
  </li>`;
  sectionFullSizePictures.querySelector('.social__caption').textContent = smallPhoto.description;
  sectionFullSizePictures.querySelector('.social__comment-count').classList.add('hidden');
  sectionFullSizePictures.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  const bigPictureCancel = sectionFullSizePictures.querySelector('.big-picture__cancel');
  bigPictureCancel.addEventListener('click', () => {
    sectionFullSizePictures.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      sectionFullSizePictures.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
}
