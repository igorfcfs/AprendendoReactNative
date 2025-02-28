import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import general from '../styles/general';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hello World!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...general
})