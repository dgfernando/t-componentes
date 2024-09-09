import React from 'react';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Greeting from "./componentes/Greeting";
import UserDetails from "./componentes/UserDetails";
import Task from "./componentes/Task";
import ToggleText from "./componentes/ToggleText";
import DynamicForm from "./componentes/DynamicForm";
import ClickCounter from "./componentes/ClickCounter";
import RegistrationForm from "./componentes/RegistrationForm";
import ThemeSwitcher from './componentes/ThemeSwitcher';
import AlertButton from './componentes/AlertButton';
import ParentCounter from './componentes/ParentCounter';
import ImageGallery from './componentes/ImageGallery';
import Game from './componentes/Game';

export default function App() {

  // form
  const [userData, setUserData] = useState(null);
  const register = (data) => {
    setUserData(data);
  };
  // tema
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <SafeAreaView style={styles.safeArea}>
      <Text>09/09/2024</Text>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Greeting name="diego" />
      <UserDetails name="diego" age={20} occupation="estudiante" />
      <Task task={{ title: "Taller componentes", completed: true }} />
      <ToggleText />
      <DynamicForm/>
      <ClickCounter></ClickCounter>
      <RegistrationForm onRegister={register} />
      {userData && (
          <View>
            <Text>Registro exitoso:</Text>
            <Text>Nombre: {userData.name}</Text>
            <Text>Correo electrónico: {userData.email}</Text>
            <Text>Contraseña: {userData.password}</Text>
          </View>
        )}

      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <AlertButton message="🚨🚨🚨🚨" />
      <ParentCounter />
      <ImageGallery />
      </SafeAreaView>
      <Game />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
    marginBottom: 30
  },
  safeArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    text: {
      color: "#000000",
    },
  },
  darkContainer: {
    width: "100%",
    backgroundColor: "#333333",
    text: {
      color: "#ffffff",
    },
  },
});

