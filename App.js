import React from 'react';
import { StyleSheet } from 'react-native';
import Rotas from './Rotas';
import LoginStack from './components/LoginStack';
import { NavigationContainer } from '@react-navigation/native'; //CONTÊINER PARA OS MENUS QUE QUISERMOS USAR NA APLICAÇÃO
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginStack} />
        <Stack.Screen name='Rotas' component={Rotas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnClick: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  txtInput: {
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: '80%',
  },
});
