import React from 'react';
import { FlatList, Text } from 'react-native';
import answers from '../data/answers.json';
import Feedback from '../types/Feedback';
import Guess from '../types/Guess';

export default function AnswersList(props: { guesses: Guess[] }) {
  const knownLetters: (string | null)[] = new Array(5).fill(null);
  const knownWrongs: string[][] = [...new Array(5)].map(() => []);
  const minCharCounts: number[] = new Array(26).fill(0);

  for (const { feedback, word } of props.guesses) {
    for (let i = 0; i < 5; i++) {
      const charCounts = new Array(26).fill(0);
      if (feedback[i] !== Feedback.Wrong) {
        charCounts[word.charCodeAt(i) - 97]++;
      }
      charCounts.forEach((count, index) => minCharCounts[index] = Math.max(count, minCharCounts[index]));

      if (feedback[i] === Feedback.Correct) {
        knownLetters[i] = word[i];
      } else {
        knownWrongs[i].push(word[i]);
      }
    }
  }

  const possibleAnswers = answers.filter(answer => {
    const charCounts = new Array(26).fill(0);
    for (let i = 0; i < 5; i++) {
      const answerCharCode = answer.charCodeAt(i);
      charCounts[answerCharCode - 97]++;

      if ((knownLetters[i] !== null) && (knownLetters[i] !== answer[i])) {
        return false;
      }
      if (knownWrongs[i].includes(answer[i])) {
        return false;
      }
    }

    if (charCounts.some((value, index) => value < minCharCounts[index])) {
      return false;
    }

    return true;
  });

  return (
    <FlatList
      data={possibleAnswers}
      keyExtractor={answer => answer} renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
}