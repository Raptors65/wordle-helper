import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feedback from '../types/Feedback';
import Guess from '../types/Guess';
import FeedbackLetter from './FeedbackLetter';

export default function AddGuess(props: {onAddGuess: (guess: Guess) => void}) {
  const [feedback, setFeedback] = useState(new Array(5).fill(Feedback.Wrong));
  const [word, setWord] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        spellCheck={false}
        defaultValue={word}
        onChangeText={text => setWord(text.toLowerCase())}
        placeholder="Guess"
        style={styles.guessInput} />
      <FlatList
        data={feedback}
        horizontal
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) =>
          <FeedbackLetter
            key={index}
            feedback={item}
            index={index}
            onFeedbackChange={(newFeedback) => setFeedback([
              ...feedback.slice(0, index),
              newFeedback,
              ...feedback.slice(index + 1)
            ])}
          />
        }
        contentContainerStyle={styles.feedbackListContainer}
        style={styles.feedbackList}
      />
      <TouchableOpacity onPress={() => props.onAddGuess({ feedback, word })} style={styles.addButton}>
        <Text>+ ADD</Text>
      </TouchableOpacity>

    </View>
  );
}

const black = '#000';
const gray = '#707070';
const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    borderColor: black,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  },
  container: {
    borderColor: black,
    borderWidth: 1,
    height: 200,
    paddingTop: 20
  },
  feedbackList: {
    marginTop: 20,
    paddingHorizontal: 15
  },
  feedbackListContainer: {
    justifyContent: 'space-between',
    width: '100%'
  },
  guessInput: {
    alignSelf: 'center',
    borderColor: gray,
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    paddingLeft: 10,
    width: 150
  }
});