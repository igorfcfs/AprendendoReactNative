import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function LoginStack({ navigation }){
  return (
    <View>
      <Text>Ola</Text>
      <Button title='Ir para home' onPress={() => navigation.navigate('Rotas')} />
    </View>
  )
}

const styles = StyleSheet.create({

})