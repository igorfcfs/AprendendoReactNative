import Itens from "./components/Firebase/Itens";
import AdicionarItens from "./components/Firebase/AdicionarItens";
import ListarItens from "./components/Firebase/ListarItens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Itens" component={Itens} />
      <Stack.Screen name="Adicionar" component={AdicionarItens} />
      <Stack.Screen name="Listar" component={ListarItens} />
    </Stack.Navigator>
  )
}