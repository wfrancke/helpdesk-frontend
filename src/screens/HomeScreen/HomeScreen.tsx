import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { isMobile } from 'react-device-detect'

import { DrawerContent } from '../../components/Drawer/DrawerContent'
import { MyTicketsScreen } from '../TicketsScreens/MyTicketsScreen/MyTicketsScreen'
import { AssignedTicketsScreen } from '../TicketsScreens/AssignedTicketsScreen/AssignedTicketsScreen'
import { TeamTicketsScreen } from '../TicketsScreens/TeamTicketsScreen/TeamTicketsScreen'
import { CreateTicketScreen } from '../CreateTicketScreen/CreateTicketScreen'
import { TicketDetailsScreen } from '../TicketDetailsScreen/TicketDetailsScreen'
import { AccountScreen } from '../AccountScreen/AccountScreen'
import { useSetRole, useUserAccessToken } from '../../providers/AuthProvider'
import { useProfileQuery } from '../../api/users/users'

export type DrawerParamList = {
  MyTickets: undefined,
  AssignedTickets: undefined,
  TeamTickets: undefined,
  CreateTicket: undefined,
  TicketDetails: { ticketId: string },
  Account: undefined,
}

const Drawer = createDrawerNavigator<DrawerParamList>()

export const HomeScreen = () => {
  const accessToken = useUserAccessToken()
  const setRole = useSetRole()

  useProfileQuery({
    enabled: !!accessToken,
    onSuccess: ({ role }) => setRole(role)
  })

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
      <Drawer.Screen name='CreateTicket' component={CreateTicketScreen} />
      <Drawer.Screen
        name='TicketDetails'
        component={TicketDetailsScreen}
        initialParams={{ ticketId: '' }}
      />
      <Drawer.Screen name='Account' component={AccountScreen} />
    </Drawer.Navigator>
  )
}