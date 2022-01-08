import React from 'react'
import { ScrollView } from 'react-native'
import { Link, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { QueryClient } from 'react-query'

import { TicketForm } from '../../components/TicketForm/TicketForm'
import { theme } from '../../themes'
import { useCreateTicketMutation } from '../../api/tickets/tickets'
import * as Styled from './CreateTicketScreen.styles'

export const CreateTicketScreen = () => {
  const navigation = useNavigation()
  const queryClient = new QueryClient()

  const { mutate } = useCreateTicketMutation({
    onSuccess: () => {
      navigation.goBack()
      queryClient.refetchQueries({ queryKey: 'getMyTickets'})
    }
  })

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Link to={{ screen: 'MyTickets' }}>
          <Icon name='arrow-left' color={theme.colors.text} size={40} />
        </Link>
        <TicketForm
          onSubmit={(values) => mutate(values)}
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}