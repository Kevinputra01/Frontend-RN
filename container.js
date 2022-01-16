import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useTheme } from 'native-base'

const Stack = createStackNavigator()

import Home from './src/screens/Home'
import Today from './src/screens/Today'
import Homework from './src/screens/Homework'
import Collection from './src/screens/collection'

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
                    component={Home} 
                />
                <Stack.Screen 
                    name='Collection'
                    component={Collection} 
                />
                <Stack.Screen 
                    name='Activity'
                    component={Today} 
                />
                <Stack.Screen 
                    name='Homework'
                    component={Homework} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}