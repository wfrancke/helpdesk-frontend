import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { isMobile } from 'react-device-detect'

import { MyTicketsScreen } from '../MyTicketsScreen/MyTicketsScreen'
import { AssignedTicketsScreen } from '../AssignedTicketsScreen/AssignedTicketsScreen'

const Drawer = createDrawerNavigator()

export const HomeScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName='MyTickets'
      screenOptions={{
        headerShown: false,
        drawerType: isMobile === false ? 'permanent' : 'front'
      }}
    >
      <Drawer.Screen name='MyTickets' component={MyTicketsScreen} />
      <Drawer.Screen name='AssignedTickets' component={AssignedTicketsScreen} />
    </Drawer.Navigator>
  )
}