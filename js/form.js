const imgUploadText = document.querySelector('.img-upload__text');
const formUploadImgages = document.querySelector('.img-upload__form');
const actionLink = 'https://23.javascript.pages.academy/kekstagram';
formUploadImgages.setAttribute('action', actionLink);
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
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const hashtagCharacterCondition = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const NUM_HASHTAGS = 5;
const comment = document.querySelector('.text__description');
const MAX_NUM_COMMENTS = 140;


imgUploadInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  uploadCancel.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    imgUploadInput.value = '';
  });
  imgUploadText.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      imgUploadOverlay.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      imgUploadInput.value = '';
    }
  });

  hashtags.addEventListener('focus', (evt) => {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });

  scaleControlSmaller.addEventListener('click', () => {
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
  });
  scaleControlBigger.addEventListener('click', () => {
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
  });
  for (let index = 0; index < effectsRadio.length; index++) {
    const element = effectsRadio[index];
    element.addEventListener('click', () => {
      if (element.getAttribute('id') === 'effect-chrome') {
        imgUploadPreview.classList.add('effects__preview--chrome');
        imgUploadPreview.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none');
      } else if (element.getAttribute('id') === 'effect-sepia') {
        imgUploadPreview.classList.add('effects__preview--sepia');
        imgUploadPreview.classList.remove('effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none', 'effects__preview--chrome');
      } else if (element.getAttribute('id') === 'effect-marvin') {
        imgUploadPreview.classList.add('effects__preview--marvin');
        imgUploadPreview.classList.remove('effects__preview--sepia', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none', 'effects__preview--chrome');
      } else if (element.getAttribute('id') === 'effect-phobos') {
        imgUploadPreview.classList.add('effects__preview--phobos');
        imgUploadPreview.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--heat', 'effects__preview--none', 'effects__preview--chrome');
      } else if (element.getAttribute('id') === 'effect-heat') {
        imgUploadPreview.classList.add('effects__preview--heat');
        imgUploadPreview.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--none', 'effects__preview--chrome');
      } else if (element.getAttribute('id') === 'effect-none') {
        imgUploadPreview.classList.add('effects__preview--none');
        imgUploadPreview.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--chrome');

      }
    });
  }

  imgUploadText.addEventListener('input', () => {
    const valueLength = hashtags.value.length;
    const numberOfHashtags = hashtags.value.split(' ');

    if (numberOfHashtags.length > NUM_HASHTAGS) {
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
  });

  comment.addEventListener('input', () => {
    if (comment.value.length > MAX_NUM_COMMENTS) {
      comment.setCustomValidity(`Удалите лишние символы. Осталось удалить:${comment.value.length - MAX_NUM_COMMENTS}`);
    }
  });
});
