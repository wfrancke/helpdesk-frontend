import React from 'react'
import { ScrollView } from 'react-native'
import { Link } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TicketForm } from '../../components/TicketForm/TicketForm'
import { theme } from '../../themes'
import { DrawerParamList } from '../HomeScreen/HomeScreen'
import * as Styled from './EditTicketScreen.styles'
import { useTicketQuery } from '../../api/tickets/tickets'

export const EditTicketScreen = ({
  route
}: DrawerScreenProps<DrawerParamList, 'TicketDetails'>) => {
  const { data } = useTicketQuery(route.params.ticketId)

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Link to={{ screen: 'MyTickets' }}>
          <Icon name='arrow-left' color={theme.colors.text} size={40} />
        </Link>
        <TicketForm
          onSubmit={() => null}
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}