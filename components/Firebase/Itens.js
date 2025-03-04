/* FIREBASE: BaaS (Backend as a Service) by Google - BANCO DE DADOS NoSQL
- DEPENDÊNCIA: npm install firebase | npm i --save firebase
- criar o arquivo config.js e add a Firebase SDK
*/
import React from "react";
import { View, Button, StyleSheet } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Button title='Adicionar' onPress={() => navigation.navigate('Adicionar')} />
      </View>
      <View>
        <Button title='Listar' onPress={() => navigation.navigate('Listar')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    margin: 10
  }
})