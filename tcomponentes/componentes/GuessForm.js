import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage('¡Correcto!');
    } else {
      setMessage('Incorrecto. Inténtalo de nuevo.');
    }
  };

  return (
    <View>
      <TextInput
        value={guess}
        onChangeText={setGuess}
        placeholder="Escribe tu respuesta"
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {message && <Text>{message}</Text>}
    </View>
  );
};

export default GuessForm;