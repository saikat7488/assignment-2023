import  { useState, useEffect } from 'react';
import UserDataFetcher from './UserDataFetcher';
import { v4 as uuid } from 'uuid';
import { subjects, verbs, adjectives, objects } from './words';

const GenerateComments = () => {
  const { userData, isLoading, error } = UserDataFetcher();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!isLoading && !error && userData && userData.length > 0 && comments.length === 0) {
      const generateDummySentence = (minWords, maxWords) => {
        const generateWords = (array, count) => {
          const result = [];
          for (let i = 0; i < count; i++) {
            result.push(array[Math.floor(Math.random() * array.length)]);
          }
          return result.join(' ');
        };

        const getRandomElement = (array) =>
          array[Math.floor(Math.random() * array.length)];

        const sentence = `${generateWords(
          subjects,
          getRandomElement([minWords, maxWords])
        )} ${generateWords(
          verbs,
          getRandomElement([minWords, maxWords])
        )} ${generateWords(
          adjectives,
          getRandomElement([minWords, maxWords])
        )} ${generateWords(objects, getRandomElement([minWords, maxWords]))}.`;

        return sentence;
      };

      let newComments = [];

      for (let i = 1; i <= 6; i++) {
        const randomUserIndex = Math.floor(Math.random() * userData.length);
        const randomUser = userData[randomUserIndex];

        let content = {
          id: uuid(),
          uid: randomUser.id,
          image: randomUser.image,
          fullName: randomUser.fullName,
          comment: generateDummySentence(3, 6),
          reply: [],
        };

        for (let j = 1; j <= Math.floor(Math.random() * 4 + 2); j++) {
          const randomReplyUserIndex = Math.floor(
            Math.random() * userData.length
          );
          const randomReplyUser = userData[randomReplyUserIndex];

          let replyContent = {
            id: uuid(),
            uid: randomReplyUser.id,
            image: randomReplyUser.image,
            fullName: randomReplyUser.fullName,
            comment: generateDummySentence(3, 5),
            reply: [],
          };

          for (let k = 1; k <= Math.floor(Math.random() * 6 + 2); k++) {
            const randomInnerReplyUserIndex = Math.floor(
              Math.random() * userData.length
            );
            const randomInnerReplyUser = userData[randomInnerReplyUserIndex];

            let innerReplyContent = {
              id: uuid(),
              uid: randomInnerReplyUser.id,
              image: randomInnerReplyUser.image,
              fullName: randomInnerReplyUser.fullName,
              comment: generateDummySentence(2, 4),
            };
            replyContent.reply.push(innerReplyContent);
          }

          content.reply.push(replyContent);
        }

        newComments.push(content);
      }

      setComments(newComments);
    }
  }, [isLoading, error, userData, comments]);

  return {
    comments,
  };
};

export default GenerateComments;




