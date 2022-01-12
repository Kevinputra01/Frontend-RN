import * as React from "react";
import { Text, Box, Pressable } from "native-base";

import BtnHello from "../components/BtnHello";

export default function Hello({ navigation }) {
  return (
    <Box 
        bg="primary.400" 
        flex={1} 
        alignItems="center" 
        justifyContent="center">
      <Text 
        fontFamily="body" 
        fontWeight={400} 
        fontStyle="italic" 
        fontSize={30}>
        Life's too short
      </Text>
      <BtnHello navigation={navigation} bgColor="blue" />
      <BtnHello navigation={navigation} bgColor="red" />
    </Box>
  );
}