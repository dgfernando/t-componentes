import React, { useState } from 'react';
import { View, Text } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [correctAnswer, setCorrectAnswer] = useState('React Native');

  return (
    <View>
      <Text>Esta app está contruida en?:</Text>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
};

export default Game;