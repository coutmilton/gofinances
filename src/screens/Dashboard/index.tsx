import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from './styles'


export function Dashboard(){
    return (
        <Container>
            <Text>Você é demais</Text>
        </Container>
    )
}

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })