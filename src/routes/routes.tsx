import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from '../screens/LoginScreen/LoginScreen'
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen'
import { MyTicketsScreen } from '../screens/MyTicketsScreen/MyTicketsScreen'

const Stack = createNativeStackNavigator()

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='MyTickets' component={MyTicketsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}