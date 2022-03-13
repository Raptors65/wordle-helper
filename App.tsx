import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AddGuess from './src/components/AddGuess';
import Guess from './src/types/Guess';

export default function App() {
  const [guesses, setGuesses]  = useState<Guess[]>([]);

  return (
    <View style={styles.container}>
      <AddGuess onAddGuess={guess => setGuesses([...guesses, guess])} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50
  }
});
