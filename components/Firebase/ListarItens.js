import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Itens from "../../Itens";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../config/config"; // Certifique-se de que o Firebase está importado corretamente

class ListarItens extends React.Component {
  state = {
    itens: []
  };

  componentDidMount() {
    const db = getDatabase(app); // Obtém a instância do banco de dados
    const itensRef = ref(db, "/itens"); // Cria a referência correta

    onValue(itensRef, (snapshot) => {
      const data = snapshot.val();
      console.log("🔥 Dados recebidos do Firebase:", data); // <-- Verifique o console
      if (data) {
        const itens = Object.values(data);
        console.log("🛠️ Itens convertidos:", itens); // <-- Veja se os itens aparecem corretamente
        this.setState({ itens });
      } else {
        console.log("⚠️ Nenhum dado encontrado no Firebase.");
      }
    });
  }

  render() {
    return (
      <View style={styles.conteudoPrincipal}>
        {this.state.itens.length > 0 ? (
          <>
            {console.log("✅ Renderizando itens:", this.state.itens)}
            <Itens itens={this.state.itens} />
          </>
        ) : (
          <Text>Não há itens salvos</Text>
        )}
      </View>
    );
  }
}

export default ListarItens;

const styles = StyleSheet.create({
  conteudoPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
