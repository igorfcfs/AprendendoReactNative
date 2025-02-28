import React from 'react';
import { StyleSheet } from 'react-native';
import Rotas from './Rotas';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Rotas />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    padding: 10,
    borderWidth: 1,
    width: '80%',
    marginTop: 10
  },
  btnClick: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10
  }
});
