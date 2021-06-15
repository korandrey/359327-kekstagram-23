function checkStringLength (string, length) {
  return string.length <= length;
}

function checkStringMaxLength(text, maxLength) {
  return text.length < maxLength;
}

export {checkStringLength, checkStringMaxLength};
