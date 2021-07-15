import { generatePhotos } from './data.js';

const photo = document.querySelector('.picture__img');
photo.addEventListener('click', function () {
    const sectionFullSizePictures = document.querySelector('.big-picture');
    sectionFullSizePictures.classList.remove('hidden');
    const showBigPhoto = sectionFullSizePictures.querySelector('.big-picture__img');
    showBigPhoto.querySelector('img').setAttribute('src', generatePhotos[0].url);
    sectionFullSizePictures.querySelector('.likes-count').textContent = generatePhotos[0].likes;
    sectionFullSizePictures.querySelector('.comments-count').textContent = generatePhotos[0].comments[0].id;
    const socialComments = sectionFullSizePictures.querySelector('.social__comments');
    socialComments.innerHTML =
        `<li class="social__comment">
<img
    class="social__picture"
    src="${generatePhotos[0].comments[0].avatar}"
    alt="${generatePhotos[0].comments[0].name}"
    width="35" height="35">
<p class="social__text">${generatePhotos[0].comments[0].message}</p>
</li>`;
    sectionFullSizePictures.querySelector('.social__caption').textContent = generatePhotos[0].description;
    sectionFullSizePictures.querySelector('.social__comment-count').classList.add('hidden');
    sectionFullSizePictures.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
    const bigPictureCancel = sectionFullSizePictures.querySelector('.big-picture__cancel');
    bigPictureCancel.addEventListener('click', function () {
        sectionFullSizePictures.classList.add('hidden');
        document.querySelector('body').classList.remove('modal-open')
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            sectionFullSizePictures.classList.add('hidden');
            document.querySelector('body').classList.remove('modal-open')
        }
    });
});
