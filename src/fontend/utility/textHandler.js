const textHandler = (text, maxLength, isShortened) => {
  if (isShortened && text.length > maxLength) {
    const shortenedText = text.substring(0, maxLength) + "..."; // Add ellipsis for indication
    return shortenedText;
  } else {
    return text;
  }
};

export default textHandler;
