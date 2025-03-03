import GithubAPI from "./screens/GithubAPI";
import Events from "./screens/Events";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function APIEventsNavigation(){
  return (
    <Tab.Navigator>
        <Tab.Screen name='API' component={GithubAPI} />
        <Tab.Screen name='Events' component={Events} />
    </Tab.Navigator>
  )
}