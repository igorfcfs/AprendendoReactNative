import React from 'react';
import { StyleSheet } from 'react-native';
import Rotas from './Rotas';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Rotas />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnClick: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  txtInput: {
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: '80%',
  },
});
