import { getRandomIntInclusive } from './utils/get-random-int-inclusive.js';


const AVATARS = ['1', '2', '3', '4', '5', '6'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Август', 'Авдей', 'Аверкий', 'Аверьян', 'Авксентий', 'Автоном', 'Агап', 'Агафон', 'Аггей', 'Адам', 'Адриан', 'Азарий', 'Аким', 'Александр', 'Алексей', 'Амвросий', 'Амос', 'Ананий', 'Анатолий', 'Андрей', 'Андрон', 'Андроник', 'Аникей', 'Аникита', 'Анисим'];
const DESCPTION_PHOTO = 'Хорошая фотография';
const MIN_LIKES = 15;
const MAX_LIKES = 200;
let ids = 1;
let urls = 1;
let idsComments = 1;

function getId() {
  return ids++;
}

function getUrl() {
  return `photos/${urls++}.jpg`;
}

function getIdComments() {
  return idsComments++;
}

function getArrayRandomAvatar(elements) {
  const result = getRandomIntInclusive(1, elements.length); // убрал -1, так как выгружаась аватарка с номером 7,которой не сущетсвует
  return `img/avatar-${result}.svg`;
}

function getArrayRandomMessage(elements) {
  const numberMessages = getRandomIntInclusive(1, 2);
  const randomArrayElement = getRandomIntInclusive(0, elements.length - 1); // добавил -1,так как в комментариях бывало значение undefined
  if (numberMessages === 1) {
    return elements[randomArrayElement];
  }
  return `${elements[randomArrayElement]} \n ${elements[randomArrayElement + 1]}`;
}

function getArrayRandomElement(elements) {
  const randomResult = getRandomIntInclusive(0, elements.length + 1);
  return elements[randomResult];
}


function createPhoto() {
  return {
    id: getId(),
    url: getUrl(),
    description: DESCPTION_PHOTO,
    likes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
    comments: [
      {
        id: getIdComments(),
        avatar: getArrayRandomAvatar(AVATARS),
        message: getArrayRandomMessage(MESSAGES),
        name: getArrayRandomElement(NAMES),
      },
    ],

  };
}

const generatePhotos = new Array(25).fill(null).map(() => createPhoto());


export { generatePhotos };
