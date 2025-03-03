import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import EventsScreen from './screens/Events'
import APIScreen from './screens/GithubAPI'
import { createDrawerNavigator } from '@react-navigation/drawer'; //CRIA TODA A ESTRUTURA DO MENU
import APIEventsNavigation from './APIEventsNavigation';

/*NAVEGAÇÃO - O APP.JS SE TORNA O MENU
- DEPENDÊNCIAS:
  - npm install @react-navigation/native
  - npx expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
- POR MENU LATERAL (DRAWER NAVIGATION)
  - importação: npm install --save @react-navigation/drawer
- POR LINKS (STACK NAVIGATION) - NAVEGADOR POR PILHA (EMPILHAGEM DE PÁGINAS/TELAS) - por meio de links e botões
  - Pilha em Ciências da Computação é uma estrutura de dados do tipo LIFO (Last in, First out) - O 1º que entra é o 1º que sai
  - importação: npm install --save @react-navigation/stack
*/

const Drawer = createDrawerNavigator();

{/*COMPONENTE QUE CONSTRÓI O MENU*/}
export default function Rotas() {
  return (
    <Drawer.Navigator> 
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="API & Events" component={APIEventsNavigation} />
    </Drawer.Navigator>
  );
}

