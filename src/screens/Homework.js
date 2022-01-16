import React, { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, Checkbox, HStack, Input, FlatList, IconButton, Icon, FormControl } from 'native-base'
import { Feather } from "@expo/vector-icons"
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { API } from "../config/api";

export default function Homework() {
    const [form, setForm] = useState({
        name: "",
        date: "",
        status: 0,
    });

    const handleSubmit = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const body = JSON.stringify(form);
            const response = await API.post("/add-homework", body, config);
            getAllHomework();
            } catch (error) {
            console.log(error);
        }
    };

    const [homework, setHomework] = useState([]);
    const getAllHomework = async () => {
        try {
            const response = await API.get('/homework');
            setHomework(response.data.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllHomework();
    }, []);

    const deleteHomework = async (id) => {
        try {
            await API.delete(`/homework/${id}`);
            getAllHomework();
        } catch (error) {
            console.log(error);
        }
    };

    const handleStatus = async (id) => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
        
            let body;
            homework.map((li) => {
                if (li.id == id) {
                    if (Boolean(li.status)) {
                        body = JSON.stringify({ status: false });
                    } else {
                        body = JSON.stringify({ status: true });
                    }
                }
            });
            const response = await API.patch(`/homework/${id}`, body, config);
            // console.log(response.data.data);
            getAllHomework();
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Box 
        safeArea 
        justifyContent="center"
        p={10}>
            <StatusBar />
            <Heading color="primary.600">Homework</Heading>
            <FormControl>
                <HStack space={2} alignItems="center" marginTop={5}>
                    <VStack  flex={1}>
                        <Input name="name" onChangeText={(name) => setForm({ ...form, name })} value={form.name} placeholder="Name Homework" />
                        <Input name="time" onChangeText={(date) => setForm({ ...form, date })} value={form.date} placeholder="Date (20 june 2021)" />
                    </VStack>
                    <IconButton
                        borderRadius="sm"
                        variant="solid"
                        icon={
                            <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
                        }
                        onPress={() => handleSubmit()}
                    />
                </HStack>
            </FormControl>
            <VStack marginTop={10}>
                <FlatList 
                    data={homework}
                    renderItem={({item}) => (
                        <Box style={style.card}>
                            <HStack alignItems="center">
                                <Checkbox isChecked={item.status} onChange={() => handleStatus(item.id)} />
                                <VStack marginLeft={3} width={230}>
                                    <Text>{item.name}</Text>
                                    <Text>Deadline in {item.date}</Text>
                                </VStack>
                                <AntDesign onPress={() => deleteHomework(item.id)} name="minus" size={24} color="black" />
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
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
        marginBottom: 20
    }
})