import React from 'react'
import { View, Text } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { DrawerParamList } from '../HomeScreen/HomeScreen'

export const TicketDetailsScreen = ({
  route
}: DrawerScreenProps<DrawerParamList, 'TicketDetails'>) => {
  return (
    <View>
      <Text>{route.params.ticketId}</Text>
    </View>
  )
}