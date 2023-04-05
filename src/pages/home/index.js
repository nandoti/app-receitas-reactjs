import { View, Text, StyleSheet } from 'react-native'

export function Home() {
    return (
        <View>
            <Text style={styles.container}>Página Home!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',

    }
})