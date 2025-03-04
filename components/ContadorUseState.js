import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContadorUseState = () => {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Contagem</Text>
      <Text style={styles.contador}>Valor atual: {contador}</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.btnIncrementar} onPress={() => {setContador(contador + 1)}}><Text style={styles.btnText}>Incrementar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnDecrementar} onPress={() => {setContador(contador - 1)}}><Text style={styles.btnText}>Decrementar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default ContadorUseState;

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  contador: {
    fontSize: 32
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 10
  },
  btnIncrementar: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  btnDecrementar: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  }
})