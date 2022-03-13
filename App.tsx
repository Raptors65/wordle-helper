import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import AddGuess from './src/components/AddGuess';
import Guess from './src/types/Guess';
import AddedGuess from './src/components/AddedGuess';
import AnswersList from './src/components/AnswersList';

export default function App() {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <AddGuess guessedWords={guesses.map(guess => guess.word)} onAddGuess={guess => setGuesses([...guesses, guess])} />
      <Text style={styles.header}>Guesses</Text>
      <FlatList
        data={guesses}
        keyExtractor={item => item.word}
        renderItem={({ item, index }) => (
          <AddedGuess
            guess={item}
            onEditGuess={guess => setGuesses([...guesses.slice(0, index), guess, ...guesses.slice(index + 1)])}
          />
        )}
        scrollEnabled={false}
        style={styles.guessesList}
      />
      <Text style={styles.header}>Possible Answers</Text>
      <AnswersList guesses={guesses} />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  guessesList: {
    maxHeight: 100
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10
  }
});
