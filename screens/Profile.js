/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import general from '../styles/general';
import DimensoesFixasWidthHeightEFlexDirection from '../components/DimensoesFixasWidthHeightEFlexDirection';
import DimensoesFixasJustifyContent from '../components/DimensoesFixasJustifyContent';
import DimensoesFixasAlignItems from '../components/DimensoesFixasAlignItems';
import DimensoesFixasFlexWrap from '../components/DimensoesFixasFlexWrap';
import DimensoesFixasFlexGrow from '../components/DimensoesFixasFlexGrow';
import DimensoesFixasFlexShrinkEBasis from '../components/DimensoesFixasFlexShrinkEBasis';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hello World!!!</Text>
      <DimensoesFixasWidthHeightEFlexDirection />
    </View>
  );
}

const styles = StyleSheet.create({
  ...general,
});
