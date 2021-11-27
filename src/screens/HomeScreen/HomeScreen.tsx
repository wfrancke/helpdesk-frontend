import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { isMobile } from 'react-device-detect'

import { DrawerContent } from '../../components/Drawer/DrawerContent'
import { MyTicketsScreen } from '../TicketsScreens/MyTicketsScreen/MyTicketsScreen'
import { AssignedTicketsScreen } from '../TicketsScreens/AssignedTicketsScreen/AssignedTicketsScreen'
import { TeamTicketsScreen } from '../TicketsScreens/TeamTicketsScreen/TeamTicketsScreen'
import { TicketDetailsScreen } from '../TicketDetailsScreen/TicketDetailsScreen'
import { AccountScreen } from '../AccountScreen/AccountScreen'

export type DrawerParamList = {
  MyTickets: undefined,
  AssignedTickets: undefined,
  TeamTickets: undefined,
  TicketDetails: { ticketId: number },
  Account: undefined,
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
      <Drawer.Screen name='TeamTickets' component={TeamTicketsScreen} />
      <Drawer.Screen
        name='TicketDetails'
        component={TicketDetailsScreen}
        initialParams={{ ticketId: 0 }}
      />
      <Drawer.Screen name='Account' component={AccountScreen} />
    </Drawer.Navigator>
  )
}