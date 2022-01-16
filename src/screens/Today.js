import React, { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, Checkbox, HStack, Input, FlatList, IconButton, Icon, FormControl } from 'native-base'
import { Feather } from "@expo/vector-icons"
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { API } from "../config/api";

export default function Today() {
    const [form, setForm] = useState({
        name: "",
        time: "",
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
            const response = await API.post("/add-today", body, config);
            getAllToday();
            } catch (error) {
            console.log(error);
        }
    };

    const [activity, setActivity] = useState([]);
    const getAllToday = async () => {
        try {
            const response = await API.get('/today');
            setActivity(response.data.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllToday();
    }, []);

    const deleteToday = async (id) => {
        try {
            await API.delete(`/today/${id}`);
            getAllToday();
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
            activity.map((li) => {
                if (li.id == id) {
                    if (Boolean(li.status)) {
                        body = JSON.stringify({ status: false });
                    } else {
                        body = JSON.stringify({ status: true });
                    }
                }
            });
            const response = await API.patch(`/today/${id}`, body, config);
            // console.log(response.data.data);
            getAllToday();
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
            <Heading color="primary.600">Today Activity</Heading>
            <FormControl>
                <HStack space={2} alignItems="center" marginTop={5}>
                    <VStack  flex={1}>
                        <Input name="name" onChangeText={(name) => setForm({ ...form, name })} value={form.name} placeholder="Name Activity" />
                        <Input name="time" onChangeText={(time) => setForm({ ...form, time })} value={form.time} placeholder="Time (hh:mm)" />
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
                    data={activity}
                    renderItem={({item}) => (
                        <Box style={style.card}>
                            <HStack alignItems="center">
                                <Checkbox isChecked={item.status} onChange={() => handleStatus(item.id)} />
                                <VStack marginLeft={3} width={230}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.time}</Text>
                                </VStack>
                                <AntDesign onPress={() => deleteToday(item.id)} name="minus" size={24} color="black" />
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