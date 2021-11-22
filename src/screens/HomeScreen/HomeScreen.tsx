import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { isMobile } from 'react-device-detect'

import { DrawerContent } from '../../components/Drawer/DrawerContent'
import { MyTicketsScreen } from '../MyTicketsScreen/MyTicketsScreen'
import { AssignedTicketsScreen } from '../AssignedTicketsScreen/AssignedTicketsScreen'

const Drawer = createDrawerNavigator()

export const HomeScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName='My Tickets'
      screenOptions={{
        headerShown: false,
        drawerType: isMobile === false ? 'permanent' : 'front'
      }}
      drawerContent={(props) => <DrawerContent {...props}/>}
    >
      <Drawer.Screen name='My Tickets' component={MyTicketsScreen} />
      <Drawer.Screen name='Assigned Tickets' component={AssignedTicketsScreen} />
    </Drawer.Navigator>
  )
}