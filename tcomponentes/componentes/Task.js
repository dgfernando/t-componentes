import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Task = ({ task }) => {
    return (
      <View>
        <Text>{task.title}</Text>
        <Text>{task.completed ? "Completada" : "No completada"}</Text>
      </View>
    );
  };
export default Task;