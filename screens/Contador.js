import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContadorUseState from '../components/ContadorUseState';
import ContadorUseReducer from '../components/ContadorUseReducer';

/*HOOKS - GANCHOS DO REACT -> ADIÇÃO AO REACT QUE PERMITE USAR O STATE E OUTROS RECURSOS SEM A NECESSIDADE DE CLASSES - FUNCIONALIDADE OPCIONAL
- PROBLEMAS MOTIVADORES:
  - É DIFÍCIL REUTILIZAR LÓGICA COM ESTADO ENTRE COMPONENTES
  - COMPONENTES COMPLEXOS SE TORNAM DIFÍCEIS DE ENTENDER
  - CLASSES CONFUNDEM TANTO PESSOAS QUANTO MÁQUINAS
AINDA ASSIM, O USO DOS ESTADOS NOS COMPONENTES DE CLASSE CONTINUARÁ FIRME E FORTE
*/
const Contador = () => {
  return (
    <View style={styles.conteudo}>
      <ContadorUseReducer />
    </View>
  )
}

export default Contador;

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})