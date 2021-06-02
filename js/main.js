// Ссылка от куда взял скрипт https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    console.log('Вы ввели значение меньше нуля. Введите корректное значение.');
  } else if (min === max) {
    console.log('min и max равны. Так нельзя');
  } else if (min > max) {
    console.log('min > max.Некорректно');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


getRandomIntInclusive(0, 10);

function checkMaxLenghtString(text, maxLenght) {
  const lenghtText = text.length;
  return !(lenghtText > maxLenght);
}

checkMaxLenghtString('asd', 5);
