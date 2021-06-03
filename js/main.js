// Ссылка от куда взял скрипт https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  max = Math.floor(max);
  if (min < 0) {
    throw RangeError(`Параметр ${min} должен быть больше или равен нулю`);
  } else if (max < 0) {
    throw RangeError(`Параметр ${max} должен быть больше или равен нулю`);
  } else if (min === max) {
    throw RangeError(`Параметры ${min} и ${max} равны`);
  } else if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


getRandomIntInclusive(10, -10);


function MaxLengthStringCheck(text, maxLength) {
  return text.length < maxLength;
}

MaxLengthStringCheck('asd', 5);

