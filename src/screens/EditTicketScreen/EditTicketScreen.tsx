import React from 'react'
import { ScrollView } from 'react-native'
import { Link, useNavigation } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TicketForm } from '../../components/TicketForm/TicketForm'
import { theme } from '../../themes'
import { DrawerParamList } from '../HomeScreen/HomeScreen'
import { useTicketQuery, useUpdateTicketDetailsMutation } from '../../api/tickets/tickets'
import * as Styled from './EditTicketScreen.styles'

export const EditTicketScreen = ({
  route
}: DrawerScreenProps<DrawerParamList, 'TicketDetails'>) => {
  const navigation = useNavigation()

  const { data } = useTicketQuery(route.params.ticketId)
  const { mutate } = useUpdateTicketDetailsMutation(
    route.params.ticketId,
    {
      onSuccess: () => {
        navigation.goBack()
      }
    }
  )

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Link to={{ screen: 'MyTickets' }}>
          <Icon name='arrow-left' color={theme.colors.text} size={40} />
        </Link>
        <TicketForm
          initialValues={data}
          onSubmit={(values) => mutate(values)}
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}