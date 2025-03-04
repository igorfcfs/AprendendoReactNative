import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

/*REQUISIÇÕES AJAX E APIS
- AJAX -> ASYNCHRONOUS JAVASCRIPT AND XML -ferramenta JavaScript para fazer requisições web e alterar uma página/tela de forma dinâmica (sem a necessidade de carregá-la inteira novamente - só uma parte dela).
*/

/*PROPRIEDADES DOS BOTÕES (BUTTON)
- onPress: apontar qual função o botão deve executar quando clicado
- title: título do botão
- colot: cor do botão
- accessibilityLabel: label complementar para acessibilidade
*/
class UsuarioGithub extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      dados: {},
      usuario: 'octocat',
    }

    this.fetchDados = this.fetchDados.bind(this);
    this.formaDadosUsuario = this.formaDadosUsuario.bind(this);
  }

  fetchDados() {
    fetch(`https://api.github.com/users/${this.state.usuario}`)
      .then(response => response.json()) // MÉTODO DISPARADO ASSIM QUE TEMOS UMA RESPOSTA POSITIVA DA API
      .then(json => this.setState({dados: json}))
      .catch(err => this.setState({dados: {err}})) // MÉTODO DISPARADO SE DER ERRO NA REQUISIÇÃO
  }

  formaDadosUsuario() {
    if (this.state.dados.name !== undefined){
      const {name, public_repos, followers} = this.state.dados;
      return (
        <> // FRAGMENT
          <Text style={styles.font30}>Dados do usuário:</Text>
          <Text>Nome: {name}</Text>
          <Text>Repositórios: {public_repos}</Text>
          <Text>Seguidores: {followers}</Text>
        </>
      )
    } else {
      return (
        <Text style={styles.font30}>Este usuário não existe</Text>
      )
    }
  }

  componentDidMount(){
    this.fetchDados; //esse método é invocado pela primeira vez assim que o elemento é renderizado na tela
  }

  render(){
    return (
      <View style={styles.container}>
        {this.formaDadosUsuario()}
        <Text>{JSON.stringify(this.state.dados)}</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={usuario => {this.setState({usuario})}}
            value={this.setState.usuario}
            placeholder='Usuário'
          />
        </View>
        <View>
          <Button
            onPress={this.fetchDados}
            title='Buscar dados'
            accessibilityLabel='Busque os dados do usuário no Github'
          />
        </View>
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
    borderBlockColor: 'black',
    margin: 10,
    padding: 5
  },
  font30: {
    fontSize: 30
  }
})

export default UsuarioGithub;