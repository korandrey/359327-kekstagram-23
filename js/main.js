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


getRandomIntInclusive(1, 10);


function checkStringMaxLength(text, maxLength) {
  return text.length < maxLength;
}

checkStringMaxLength('asd', 5);

const ids = [1];
const urls = ['1'];
const idComments = [1];
const avatars = ['1', '2', '3', '4', '5', '6'];
const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const names = ['Август', 'Авдей', 'Аверкий', 'Аверьян', 'Авксентий', 'Автоном', 'Агап', 'Агафон', 'Аггей', 'Адам', 'Адриан', 'Азарий', 'Аким', 'Александр', 'Алексей', 'Амвросий', 'Амос', 'Ананий', 'Анатолий', 'Андрей', 'Андрон', 'Андроник', 'Аникей', 'Аникита', 'Анисим'];
const descriptionPhoto = 'Хорошая фотография';
const minLikes = 15;
const maxLikes = 200;

function getArrayId(elements) {
  for (let index = 0; index < 25; index++) {
    return elements[index]++;
  }
}

function getArrayUrl(elements) {
  for (let index = 0; index < 25; index++) {
    return `photos/${elements[index]++}.jpg`;
  }
}

function getArrayRandomAvatar(elements) {
  const result = getRandomIntInclusive(1, elements.length + 1);
  return `img/avatar-${result}.svg`;
}

function getArrayRandomMessage(elements) {
  const numberMessages = getRandomIntInclusive(1, 2);
  const randomElementsArray = getRandomIntInclusive(0, elements.length);
  if (numberMessages === 1) {
    return elements[randomElementsArray];
  }
  return `${elements[randomElementsArray]} \n ${elements[randomElementsArray + 1]}`;
}

function getArrayRandomElement(elements) {
  const randomResult = getRandomIntInclusive(0, elements.length);
  return elements[randomResult];
}


function createPhoto() {
  return {
    id: getArrayId(ids),
    url: getArrayUrl(urls),
    description: descriptionPhoto,
    likes: getRandomIntInclusive(minLikes, maxLikes),
    comments: [
      {
        id: getArrayId(idComments),
        avatar: getArrayRandomAvatar(avatars),
        message: getArrayRandomMessage(messages),
        name: getArrayRandomElement(names),
      },
    ],

  };
}

new Array(25).fill(null).map(() => createPhoto());


