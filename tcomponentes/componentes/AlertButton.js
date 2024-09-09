import React from 'react';
import { Button, Alert } from 'react-native';

const AlertButton = ({ message }) => {
  const showAlert = () => {
    Alert.alert('ALERTA', message);
  };

  return (
    <Button title="botón de pánico" onPress={showAlert} />
  );
};

export default AlertButton;

