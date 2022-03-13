import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Feedback from '../enums/Feedback';

export default function FeedbackLetter(props: { feedback: Feedback, index: number, onFeedbackChange: (feedback: Feedback) => void }) {
  return (
    <TouchableOpacity
      onPress={() => {
        switch (props.feedback) {
        case Feedback.Correct:
          props.onFeedbackChange(Feedback.Contains);
          break;
        case Feedback.Contains:
          props.onFeedbackChange(Feedback.Wrong);
          break;
        case Feedback.Wrong:
          props.onFeedbackChange(Feedback.Correct);
          break;
        }
      }}
      style={[{ backgroundColor: props.feedback }, styles.container ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60
  }
});