import { Pressable, Text } from "native-base";
export default function BtnHello({ navigation, bgColor }) {
  return (
    <Pressable 
      onPress={() => navigation.navigate("IncDec")}
      style={{
          backgroundColor: bgColor,
          height: 40,
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
          borderRadius: 10
      }}>
        <Text style={{
            color: 'white'
        }}
        >Screen Increment and Decrement</Text>
    </Pressable>
  );
}