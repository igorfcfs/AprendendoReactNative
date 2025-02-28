import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../styles/Styles';

//COMPONENTE = ESTRUTURA ISOLADA INDEPENDENTE COM PROPÓSITO DE SER UTILIZADO EM MUITOS LUGARES DO CÓDIGO
//Não faz sentido deixar os estilos separados

export default function BoasVindas(props) {
  return (
    <View>
      <Text style={styles.texto}>Olá,</Text>
      <Text style={Styles.texto}>{props.nome}</Text>
      <Text style={Styles.section}>Teste General</Text>
    </View>
  );
}

//FORMA CORRETA DE APLICAR O CSS-IN-JS EM COMPONENTES
const styles = StyleSheet.create({
  texto: {
    fontWeight: 10
  }
})