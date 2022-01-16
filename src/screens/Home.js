import * as React from "react";
import { Text, Box, Pressable, HStack, Image } from "native-base";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  return (
    <Box 
        bg="primary.400" 
        flex={1} 
        alignItems="center" 
        justifyContent="center">
      <StatusBar />
      <Text 
        fontFamily="body" 
        fontWeight={400} 
        fontStyle="italic" 
        fontSize={30}>
        TODO APP
      </Text>
      <HStack marginTop={5} space={5} >
        <Pressable onPress={() => navigation.navigate("Activity")} style={style.buttonLong1}>
          <Image style={style.image} source={require("../icon/society.png")} alt="Activity" />
          <Text>Today Activity</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Homework")} style={style.buttonShort1}>
          <Image style={style.image} source={require("../icon/laptop.png")} alt="Homework" />
          <Text>Homework</Text>
        </Pressable>
      </HStack>
      <HStack marginTop={5} space={5} >
        <Pressable style={style.buttonShort2}>
          <Image style={style.image} source={require("../icon/information.png")} alt="About us" />
          <Text>About Us</Text>
        </Pressable>
        <Pressable  onPress={() => navigation.navigate("Collection")} style={style.buttonLong2}>
          <Image style={style.image} source={require("../icon/collection.png")} alt="Collections" />
          <Text>Collections</Text>
        </Pressable>
      </HStack>
    </Box>
  );
}

const style = StyleSheet.create({
  buttonLong1: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 200,
    borderRadius: 10,
    backgroundColor: "hotpink",
  },
  buttonLong2: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 200,
    borderRadius: 10,
    backgroundColor: "skyblue",
    marginTop: -70
  },
  buttonShort1: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    borderRadius: 10,
    backgroundColor: "orange"
  },
  buttonShort2: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    borderRadius: 10,
    backgroundColor: "lightsteelblue"
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5
  }
})