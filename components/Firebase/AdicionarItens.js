import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert } from 'react-native';
import { getDatabase, ref, push } from "firebase/database"; // Certifique-se de importar corretamente
import { app } from "../../config/config"; // Importe corretamente sua configuração do Firebase

class AdicionarItens extends React.Component {
  state = {
    item: ''
  };

  salvarItem = () => {
    const db = getDatabase(app);
    const itensRef = ref(db, "/itens");
  
    push(itensRef, { item: this.state.item })
      .then(() => Alert.alert("Item salvo!"))
      .catch((error) => Alert.alert("Erro ao salvar:", error.message));
  };
  

  render() {
    return ( // Corrigido "reuturn" para "return"
      <View style={styles.container}>
        <Text style={styles.titulo}>Adicionar Item</Text>
        <TextInput
          style={styles.itemInput}
          value={this.state.item} // Agora o input exibe o valor atualizado
          onChangeText={(item) => this.setState({ item })}
          placeholder="Digite o item"
        />
        <TouchableHighlight
          style={styles.btn}
          underlayColor="white"
          onPress={this.salvarItem}
        >
          <Text style={styles.textoBtn}>Adicionar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
  },
  titulo: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "black",
    backgroundColor: "white",
  },
  textoBtn: {
    fontSize: 18,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  btn: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "#2196F3",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AdicionarItens;
