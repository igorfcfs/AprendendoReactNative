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

export default function Home() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <BoasVindas nome="Igor" />
      <Text>Aplicando conhecimentos do livro do React Native</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.txtInput}
        placeholder="Nome"
        onChangeText={(nome) => setNome(nome)}
      />
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
