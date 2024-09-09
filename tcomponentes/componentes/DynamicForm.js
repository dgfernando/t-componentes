import React, { useState } from 'react';
import { View, TextInput, Button, Text} from 'react-native';

const DynamicForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    const saveInput = () => {
        setSubmittedValue(inputValue);
        setInputValue('');
    };

    return (
        <View>
            <TextInput
                placeholder="Ingrese una palabra"
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Button title="Enviar" onPress={saveInput} />
            {submittedValue !== '' && (
                <Text>Palabra ingresada: {submittedValue}</Text>
            )}
        </View>
    );
};

export default DynamicForm;