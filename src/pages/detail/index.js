import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export function Detail() {
    return (
        <SafeAreaView >
            <Text style={styles.container}>Página Detalhes da receita</Text>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',

    }
})