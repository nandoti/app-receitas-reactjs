import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export function Favorites() {
    return (
        <SafeAreaView >
            <Text style={styles.container}>Página favoritos</Text>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',

    }
})