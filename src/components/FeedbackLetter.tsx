import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feedback from '../types/Feedback';

export default function FeedbackLetter(props: {
  feedback: Feedback,
  index: number,
  onFeedbackChange: (feedback: Feedback) => void,
  sideLength: number
}) {
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
      style={{ backgroundColor: props.feedback, height: props.sideLength, width: props.sideLength }}
    />
  );
}