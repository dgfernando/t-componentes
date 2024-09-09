import React, { useState } from 'react';
import { Text, View, Button } from "react-native";

const ClickCounter = () => {
    const [countValue, setCount] = useState(0);

    return (
        <View>
            <Text> has clickeado {countValue} veces</Text>
            <Button title="click" onPress={() => setCount(countValue + 1)} />
        </View>
    );
    
};

export default ClickCounter;