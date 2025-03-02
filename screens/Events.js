import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Evento from "../components/Evento";

export default function Events() {
  return (
    <View style={styles.container}>
      <Evento />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});