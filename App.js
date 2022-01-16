import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider, extendTheme } from 'native-base'

import AppLoading from "expo-app-loading"

import {
  useFonts, 
  BalsamiqSans_400Regular, 
  BalsamiqSans_400Regular_Italic
} from '@expo-google-fonts/balsamiq-sans'
import Container from "./container";

export default function App() {

  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic
  })

  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic",
      }
    }
  }

  const costumeColor = {
    primary: {
      300: "#67e8f9",
      600: "#0891b2",
      900: "#164e63",
    }
  }

  const theme = extendTheme({
    colors: costumeColor,
    fontConfig,
    fonts: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans"
    },
    config: { initialColorMode: "dark" }
  })

  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  );
}