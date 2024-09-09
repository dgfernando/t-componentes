import React from "react";
import { Text, View, StyleSheet } from "react-native";

const UserDetails = (props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Nombre: {props.name}</Text>
          <Text style={styles.text}>Edad: {props.age} años</Text>
          <Text style={styles.text}>Ocupación: {props.occupation}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginVertical: 10,
    },
    text: {
      fontSize: 13,
      marginVertical: 2,
    },
  });

export default UserDetails;