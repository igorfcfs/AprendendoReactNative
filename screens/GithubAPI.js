import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UsuarioGithub from '../components/UsuarioGithub';

export default function GithubAPI(){
  return (
    <View style={styles.container}>
      <UsuarioGithub />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})