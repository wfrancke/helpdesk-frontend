import React from 'react'
import { Link } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TicketForm } from '../../components/TicketForm/TicketForm'
import { theme } from '../../themes'
import * as Styled from './CreateTicketScreen.styles'

export const CreateTicketScreen = () => {

  return (
    <Styled.RootContainer>
      <Link to={{ screen: 'MyTickets' }}>
        <Icon name='arrow-left' color={theme.colors.text} size={40} />
      </Link>
      <TicketForm />
    </Styled.RootContainer>
  )
}