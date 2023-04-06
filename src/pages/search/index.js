import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export function Search() {
    return (
        <SafeAreaView>
            <Text style={styles.container}>Página Buscar!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',

    }
})