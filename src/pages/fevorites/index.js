import { View, Text, StyleSheet } from 'react-native'

export function Favorites() {
    return (
        <View>
            <Text style={styles.container}>Página favoritos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',

    }
})