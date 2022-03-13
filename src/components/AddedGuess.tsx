import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Guess from '../types/Guess';
import FeedbackLetter from './FeedbackLetter';

export default function AddedGuess(props: {guess: Guess, onEditGuess: (guess: Guess) => void}) {
  return (
    <View style={styles.container}>
      <Text>{props.guess.word} &#8594;</Text>
      <FlatList
        data={props.guess.feedback}
        horizontal
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) =>
          <FeedbackLetter
            key={index}
            feedback={item}
            index={index}
            onFeedbackChange={newFeedback =>
              props.onEditGuess({
                feedback: [
                  ...props.guess.feedback.slice(0, index),
                  newFeedback,
                  ...props.guess.feedback.slice(index + 1)
                ],
                word: props.guess.word
              })}
            sideLength={20}
          />
        }
        scrollEnabled={false}
        contentContainerStyle={styles.feedbackListContainer}
        style={styles.feedbackList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  feedbackList: {
    paddingHorizontal: 15
  },
  feedbackListContainer: {
    justifyContent: 'space-between',
    width: 110
  }
});