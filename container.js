// Import React Navigation & Stack
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import Styling
import { useTheme } from 'native-base'

// Create Stack Navigation
const Stack = createStackNavigator()

// Import Screens
import FormNativeBase from './src/screens/form'
import Hello from './src/screens/hello'
import IncDec from './src/screens/incDec'

export default function Container(){

    const theme = useTheme()

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: { 
                        backgroundColor: theme.colors.primary['900']
                     }
                }}
            >
                <Stack.Screen 
                    name='Home'
                    component={Hello} 
                />
                <Stack.Screen 
                    name='IncDec'
                    component={IncDec} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}