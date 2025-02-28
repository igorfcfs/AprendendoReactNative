import React from "react";
import { View, Text } from 'react-native';

export default function BoasVindas(props){
    return (
        <View>
            <Text>Olá, {props.nome}</Text>
        </View>
    )
}