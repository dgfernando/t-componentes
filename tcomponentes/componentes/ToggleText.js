import React, { useState } from 'react';
import { Text, View, Button } from "react-native";


const ToggleText = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => {
      setVisible(!visible);
    };
  
    return (
      <View>
        <Button title={visible ? "Ocultar texto" : "Mostrar texto"} onPress={toggleVisibility} />
        {visible && <Text>Ahora es visible</Text>}
      </View>
    );
  };

export default ToggleText;