import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Guess from '../types/Guess';

export default function AddedGuess(props: {guess: Guess}) {
  return (
    <View>
      <Text>{props.guess.word} &#8594; {props.guess.feedback.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});