import { Box, Heading, Text, VStack, HStack, Pressable } from 'native-base'
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';

export default function Collection() {
    return (
        <Box 
        safeArea 
        justifyContent="center"
        p={10}>
            <StatusBar />
            <Heading color="primary.600">Collections</Heading>
            <VStack marginTop={10}>
                <Pressable style={style.card}>
                    <Text>Pets</Text>
                </Pressable>
                <Pressable style={style.card}>
                    <Text>Game</Text>
                </Pressable>
                <Pressable style={style.card}>
                    <HStack space={2}>
                        <AntDesign name="plus" size={24} color="black" />
                        <Text>Add New Collection</Text>
                    </HStack>
                </Pressable>
            </VStack>
        </Box>
    )
}

const style = StyleSheet.create({
    card: {
        width: "100%",
        height: 80,
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "blue"
    }
})