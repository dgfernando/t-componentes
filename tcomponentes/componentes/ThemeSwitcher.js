import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <View style={styles.container}>
      <Button
        title={theme === 'light' ? 'cambiar al modo oscuro' : 'cambiar al modo claro'}
        onPress={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default ThemeSwitcher;