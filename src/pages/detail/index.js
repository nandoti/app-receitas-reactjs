import { View, Text, StyleSheet } from 'react-native'

export function Detail() {
    return (
        <View>
            <Text style={styles.container}>Página Detalhes da receita</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',

    }
})