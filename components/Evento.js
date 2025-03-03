import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

/*ESTADOS (STATE), EVENTOS E COMPONENTES CONTROLADOS X NÃO CONTROLADOS
- ESTADOS - PARECIDO COM AS PROPS - SÃO DADOS A SEREM USADOS PELOS COMPONENTES (STRINGS, NÚMEROS, ARRAYS E OBJETOS...)
  - PROPRIEDADES: INFORMAÇÕES EXTERNAS RECEBIDAS - COMO O PARÂMETRO DE UMA FUNÇÃO QUE DEVERÁ SER USADA NO CORPO DO COMPONENTE OU MESMO SER PASSADA ADIANTE
  - ESTADOS: DADOS PRIVADOS E COMPLETAMENTE CONTROLADOS PELO PRÓPRIO COMPONENTE, REPRESENTA UM ESTADO DO COMPONENTE, UM MOMENTO ESPECÍFICO NO TEMPO EM QUE ELE TEM UMA INFORMAÇÃO QUE PODERÁ SER DIFERENTE NO FUTURO
OS ESTADOS SÃO USADOS SEMPRE QUE UM COMPONENTE FOR ARMAZENAR DADOS QUE SERÃO ALTERADOS DENTRO DELE

- EVENTOS: SÃO INTERAÇÕES DO USUÁRIO COMO TOQUES, ROLAGEM, ENTRADA DE TEXTO...

- COMPONENTES:
  - CONTROLADOS: O estado do componente é armazenado no state do React e atualizado via onChange -> SÃO AQUELES CAPAZES DE ADMINISTRAR SEU PRÓPRIO VALOR POR MEIO DOS ESTADOS, ELE É AUTOSSUFICIENTE, NÃO PRECISA QUE NINGUÉM INDIQUE SEU VALOR
  - NÃO CONTROLADOS: O estado não é gerenciado pelo React, mas diretamente pelo DOM nativo (ou no caso do React Native, pelos componentes nativos).
*/

/*CICLO DE VIDA DOS COMPONENTES
- MONTAGEM (MOUNTING)
- ATUALIZAÇÃO (UPDATING)
- DESMONTAGEM (UNMOUTING)
- ERROS (ERROR HANDLING)
*/
class Evento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.alteraInput = this.alteraInput.bind(this);
  }

  alteraInput(input) {
    this.setState({input});
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.font30}>{this.state.input}</Text>
        <TextInput style={styles.input} value={this.state.input} onChangeText={this.alteraInput}></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 50,
    width: 300,
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'black',
    padding: 1
  },
  font30: {
    fontSize: 30
  }
})

export default Evento;