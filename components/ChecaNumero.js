import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Renderização Condicional
export default props => {
  //ESTRUTURAS CONDICIONAIS
  /*if(props.numero % 2 === 0){
    return <Text style={styles.text}>O número é par</Text>
  } else {
    return <Text style={styles.text}>O número é ímpar</Text>
  }*/
  
  //OPERADOR CONDICIONAL TERNÁRIO
  return (
    <View style={styles.container}>
      {/*
        props.numero % 2 === 0 ? <Text style={styles.text}>O número é par</Text> : <Text style={styles.text}>O número é ímpar</Text>
      */}
      {validaParOuImpar(props.numero)}
    </View>
  );
}

//POR MEIO DE FUNÇÃO - + ORGANIZADO
function validaParOuImpar(numero){
  return numero % 2 === 0 ? <Text style={styles.text}>O número é par</Text> : <Text style={styles.text}>O número é ímpar</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: .7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'  
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red',
    padding: 10
  }
})

