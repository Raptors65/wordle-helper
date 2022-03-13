import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import AddGuess from './src/components/AddGuess';
import Guess from './src/types/Guess';
import AddedGuess from './src/components/AddedGuess';
import AnswersList from './src/components/AnswersList';

export default function App() {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  return (
    <View style={styles.container}>
      <AddGuess guessedWords={guesses.map(guess => guess.word)} onAddGuess={guess => setGuesses([...guesses, guess])} />
      <FlatList
        data={guesses}
        keyExtractor={item => item.word}
        renderItem={({ item }) => <AddedGuess guess={item} />}
      />
      <AnswersList guesses={guesses} />
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
