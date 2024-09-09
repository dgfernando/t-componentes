import React from 'react';
import { View, Text, Button } from 'react-native';

const ChildCounter = ({ count, increment }) => {
  return (
    <View>
      <Text>Contador hijo: {count}</Text>
      <Button title="Incrementar" onPress={increment} />
    </View>
  );
};

export default ChildCounter;