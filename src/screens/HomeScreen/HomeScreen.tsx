import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { isMobile } from 'react-device-detect'

import { DrawerContent } from '../../components/Drawer/DrawerContent'
import { MyTicketsScreen } from '../MyTicketsScreen/MyTicketsScreen'
import { AssignedTicketsScreen } from '../AssignedTicketsScreen/AssignedTicketsScreen'
import { TicketDetailsScreen } from '../TicketDetailsScreen/TicketDetailsScreen'

export type DrawerParamList = {
  MyTickets: undefined,
  AssignedTickets: undefined,
  TicketDetails: { ticketId: number }
}

const Drawer = createDrawerNavigator<DrawerParamList>()

export const HomeScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName='MyTickets'
      screenOptions={{
        headerShown: false,
        drawerType: isMobile === false ? 'permanent' : 'front'
      }}
      drawerContent={(props) => <DrawerContent {...props}/>}
    >
      <Drawer.Screen name='MyTickets' component={MyTicketsScreen} />
      <Drawer.Screen name='AssignedTickets' component={AssignedTicketsScreen} />
      <Drawer.Screen
        name='TicketDetails'
        component={TicketDetailsScreen}
        initialParams={{ ticketId: 0 }}
      />
    </Drawer.Navigator>
  )
}