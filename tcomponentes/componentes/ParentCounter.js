import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <View>
      <ChildCounter count={count} increment={increment} />
    </View>
  );
};

export default ParentCounter;