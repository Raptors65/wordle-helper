import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feedback from '../types/Feedback';
import Guess from '../types/Guess';
import FeedbackLetter from './FeedbackLetter';

export default function AddGuess(props: {guessedWords: string[], onAddGuess: (guess: Guess) => void}) {
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState<Feedback[]>(new Array(5).fill(Feedback.Wrong));
  const [word, setWord] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={text => setWord(text.toLowerCase())}
        placeholder="Guess"
        value={word}
        style={styles.guessInput} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
        scrollEnabled={false}
        contentContainerStyle={styles.feedbackListContainer}
        style={styles.feedbackList}
      />
      <TouchableOpacity
        onPress={() => {
          if (word.length !== 5) {
            setError('Guess is not 5 characters long.');
          } else if (props.guessedWords.includes(word)) {
            setError('Guess has already been added.');
          } else {
            setError('');
            setWord('');
            props.onAddGuess({ feedback, word });
          }
        }}
        style={styles.addButton}
      >
        <Text>+ ADD</Text>
      </TouchableOpacity>

    </View>
  );
}

const black = '#000';
const gray = '#707070';
const red = '#f00';
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
    paddingTop: 20
  },
  errorText: {
    color: red,
    marginTop: 20,
    textAlign: 'center'
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