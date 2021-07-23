import { imgUploadPreview } from '../form.js';
function addEffectPhoto(classAdd) {
  imgUploadPreview.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none', 'effects__preview--chrome');
  imgUploadPreview.classList.add(`effects__preview--${classAdd}`);
}

export { addEffectPhoto };
