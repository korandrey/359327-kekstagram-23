import { addEffectPhoto } from './utils/add-effect-photo.js';

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const NUM_HASHTAGS = 5;
const MAX_NUM_COMMENTS = 140;
const imgUploadText = document.querySelector('.img-upload__text');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('.img-upload__cancel');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__item > input');
const hashtags = document.querySelector('.text__hashtags');
const hashtagCharacterCondition = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const comment = document.querySelector('.text__description');


function openUploadedPhotoForm() {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}


function closeFormEsc(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    imgUploadOverlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    imgUploadInput.value = '';
  }
}
function closeFormUploadedPhotoEsc(evt) {
  document.removeEventListener('keydown', closeFormEsc(evt));
}

function increasePhotoInFormUpladed() {
  const value = scaleControlValue.getAttribute('value');
  if (value === '25%') {
    scaleControlValue.setAttribute('value', '50%');
    imgUploadPreview.style = 'transform: scale(0.50)';
  } else if (value === '50%') {
    scaleControlValue.setAttribute('value', '75%');
    imgUploadPreview.style = 'transform: scale(0.75)';
  } else if (value === '75%' || value === '100%') {
    scaleControlValue.setAttribute('value', '100%');
    imgUploadPreview.style = 'transform: scale(1)';
  }
}

function diminutionPhotoInFormUpladed() {
  const value = scaleControlValue.getAttribute('value');
  if (value === '50%' || value === '25%') {
    scaleControlValue.setAttribute('value', '25%');
    imgUploadPreview.style = 'transform: scale(0.25)';
  } else if (value === '75%') {
    scaleControlValue.setAttribute('value', '50%');
    imgUploadPreview.style = 'transform: scale(0.50)';
  } else if (value === '100%') {
    scaleControlValue.setAttribute('value', '75%');
    imgUploadPreview.style = 'transform: scale(0.75)';
  }
}

function escToText(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.stopPropagation();
  }
}

function escFormOnClick() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
}

function closeFormDownloadingPhotoOnClick() {
  document.removeEventListener('keydown', escFormOnClick());
}

function checkTextHashtags() {
  const valueLength = hashtags.value.length;
  const numberOfHashtags = hashtags.value.split(' ');

  if (hashtags.value === '') {
    hashtags.setCustomValidity('');
  } else if (numberOfHashtags.length > NUM_HASHTAGS) {
    hashtags.setCustomValidity(`Количество хэштегов больше чем ${NUM_HASHTAGS}`);
  } else if (valueLength < MIN_HASHTAG_LENGTH) {
    hashtags.setCustomValidity(`Еще нужно добавить ${MIN_HASHTAG_LENGTH - valueLength} символов. Первый символ доджен быть #, не забудьте:)`);
  } else if (valueLength > MAX_HASHTAG_LENGTH) {
    hashtags.setCustomValidity(`Удалите лишние символы. Осталось удалить:${valueLength - MAX_HASHTAG_LENGTH}`);
  } else if (hashtagCharacterCondition.test(numberOfHashtags[numberOfHashtags.length - 1]) === false) {
    hashtags.setCustomValidity('Формат хэштега не подходит');
  } else {
    hashtags.setCustomValidity('');
  }

  function checkInputs() {
    for (let i = 0; i < numberOfHashtags.length; i++) {
      for (let j = 0; j < numberOfHashtags.length; j++) {
        if (i !== j && numberOfHashtags[i].toLowerCase() === numberOfHashtags[j].toLowerCase()) {
          hashtags.setCustomValidity('Присутствуют повторяющиеся хэштеги, исправте пожалуйста');
        }
      }
    }
  }

  numberOfHashtags.forEach(checkInputs);

  hashtags.reportValidity();
}

function checkTextComment() {
  if (comment.value.length > MAX_NUM_COMMENTS) {
    comment.setCustomValidity(`Удалите лишние символы. Осталось удалить:${comment.value.length - MAX_NUM_COMMENTS}`);
  }
}

function displayingPhotoEffects(element) {
  if (element.getAttribute('id') === 'effect-chrome') {
    addEffectPhoto('chrome');
  } else if (element.getAttribute('id') === 'effect-sepia') {
    addEffectPhoto('sepia');
  } else if (element.getAttribute('id') === 'effect-marvin') {
    addEffectPhoto('marvin');
  } else if (element.getAttribute('id') === 'effect-phobos') {
    addEffectPhoto('phobos');
  } else if (element.getAttribute('id') === 'effect-heat') {
    addEffectPhoto('heat');
  } else if (element.getAttribute('id') === 'effect-none') {
    addEffectPhoto('none');
  }
}

imgUploadInput.addEventListener('change', () => {
  openUploadedPhotoForm();

  uploadCancel.addEventListener('click', () => {
    escFormOnClick();
    closeFormDownloadingPhotoOnClick();
  });
  imgUploadText.addEventListener('keydown', (evt) => {
    escToText(evt);
  });
  document.addEventListener('keydown', (evt) => {
    closeFormEsc(evt);
    closeFormUploadedPhotoEsc(evt);
  });
  scaleControlBigger.addEventListener('click', () => {
    increasePhotoInFormUpladed();
  });
  scaleControlSmaller.addEventListener('click', () => {
    diminutionPhotoInFormUpladed();
  });
  imgUploadText.addEventListener('input', () => {
    checkTextHashtags();
  });
  comment.addEventListener('input', () => {
    checkTextComment();
  });
  for (let index = 0; index < effectsRadio.length; index++) {
    const element = effectsRadio[index];
    element.addEventListener('click', () => {
      displayingPhotoEffects(element);
    });
  }
});

export { imgUploadPreview };
