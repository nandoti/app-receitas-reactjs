import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Entypo } from '@expo/vector-icons'

export function Detail() {
    const route = useRoute();
    const navigate = useNavigation();

    useLayoutEffect(() => {
        navigate.setOptions({
            title: route.params?.data
                ? route.params?.data.name
                : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => console.log('Clicou')}>
                    <Entypo
                        name="heart"
                        size={28}
                        color="#FF4141"
                    />
                </Pressable>
            )
        });
    }, [navigate, route.params?.data]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Página Detalhes da receita</Text>
                <Text>{route.params?.data.name}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
    },
});
