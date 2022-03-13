import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AddGuess from './src/components/AddGuess';

export default function App() {
  return (
    <View style={styles.container}>
      <AddGuess />
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
