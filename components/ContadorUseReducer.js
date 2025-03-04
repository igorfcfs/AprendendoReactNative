import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/* USE REDUCER SERVE PARA APLICAÇÕES MAIS COMPLEXAS - REDUX
- reducer é uma função com 2 parâmetros: state e action, não um objeto literal, que será invocada toda vez que quisermos alterar o estado de um componente
  - action: informa qual tipo de alteração deve ser feita no estado, este objeto action tem 2 atributos: type e payload
    - type
    - payload
- state é o próprio estado do componente manipulado
- dispatch é a função que chama um reducer
*/

const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementar':
      return {...state, contador: state.contador + action.payload};
    case 'decrementar':
      return {...state, contador: state.contador - action.payload};
    default: return state;
  };

}

const ContadorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });
  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Contagem</Text>
      <Text style={styles.contador}>Valor atual: {state.contador}</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.btnIncrementar} onPress={() => {dispatch({type: 'incrementar', payload: 1})}}><Text style={styles.btnText}>Incrementar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnDecrementar} onPress={() =>{dispatch({type: 'decrementar', payload: 1})}}><Text style={styles.btnText}>Decrementar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default ContadorUseReducer;

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