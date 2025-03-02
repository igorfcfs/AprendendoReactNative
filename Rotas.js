import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import EventsScreen from './screens/Events'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Events" component={EventsScreen} />
    </Drawer.Navigator>
  );
}
