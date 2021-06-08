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

let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let used_id = [''];
let url = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
let used_url = [''];
let idComments = [10, 16, 3, 1, 4, 64, 73, 81, 9, 112, 111, 122, 123, 154, 154, 136, 127, 18, 190, 20, 21, 212, 223, 234, 25];
let avatar = ['1', '2', '3', '4', '5', '6'];
let messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
let names = ['Август', 'Авдей', 'Аверкий', 'Аверьян', 'Авксентий', 'Автоном', 'Агап', 'Агафон', 'Аггей', 'Адам', 'Адриан', 'Азарий', 'Аким', 'Александр', 'Алексей', 'Амвросий', 'Амос', 'Ананий', 'Анатолий', 'Андрей', 'Андрон', 'Андроник', 'Аникей', 'Аникита', 'Анисим'];

function getArrayId(elements) {
  for (let i = 0; i < elements.length; i++) {
    used_id.push(elements[i]);
    if (used_id.includes(elements[i])) {
      return elements[i]++;
    }
  }
};

function getArrayUrl(elements) {
  for (let i = 0; i < elements.length; i++) {
    used_url.push(elements[i]);
    if (used_url.includes(elements[i])) {
      return 'photos/' + elements[i]++ + '.jpg';
    }
  }
}

function getArrayRandomAvatar(elements) {
  let result = getRandomIntInclusive(1, elements.length + 1);
  return 'img/avatar-' + result + '.svg';
}

function getArrayRandomElement(elements) {
  let r = getRandomIntInclusive(0, elements.length)
  return elements[r];
}


function createPhoto() {
  return {
    id: getArrayId(id),
    url: getArrayUrl(url),
    description: 'Хорошая фотография',
    likes: getRandomIntInclusive(15, 200),
    comments: [
      {
        id: getArrayId(idComments),
        avatar: getArrayRandomAvatar(avatar),
        message: getArrayRandomElement(messages),
        name: getArrayRandomElement(names),
      },
    ],

  };
};

const UploadPhoto = new Array(25).fill(null).map(() => createPhoto());
console.log(UploadPhoto);
