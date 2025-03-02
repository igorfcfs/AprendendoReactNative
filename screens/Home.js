/* eslint-disable react-native/no-color-literals */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BoasVindas from '../components/BoasVindas';
import ChecaNumero from '../components/ChecaNumero';
import Evento from '../components/Evento';

export default function Home() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  return (
    <View style={styles.container}>
      <BoasVindas nome={nome} />
      <ChecaNumero numero={numero} />
      <Text>Aplicando conhecimentos do livro do React Native</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.txtInput}
        placeholder="Nome"
        onChangeText={(nome) => setNome(nome)}
      />
      <TextInput
        style={styles.txtInput}
        placeholder='Número'
        onChangeText={(numero) => setNumero(numero)} />
      <TouchableOpacity
        style={styles.btnClick}
        onPress={() => alert(`Olá ${nome}`)}
      >
        <Text style={{ color: 'white' }}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
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
