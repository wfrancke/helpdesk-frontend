import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { Link } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DetailsSection } from './DetailsSection/DetailsSection'
import { DrawerParamList } from '../HomeScreen/HomeScreen'
import { theme } from '../../themes'
import * as Styled from './TicketDetailsScreen.styles'
import { useTicketQuery } from '../../api/tickets/tickets'
import { useUserQuery } from '../../api/users/users'

export const TicketDetailsScreen = ({
  route
}: DrawerScreenProps<DrawerParamList, 'TicketDetails'>) => {
  const { data: ticketData } = useTicketQuery(route.params.ticketId)
  const { data: requesterData } = useUserQuery(ticketData?.requesterId || '')
  const { data: assignedData } = useUserQuery(ticketData?.assignedId || '')
  

  const data = {
    _id: ticketData?._id || '',
    title: ticketData?.title || '',
    description: ticketData?.description || '',
    requester: `${requesterData?.firstName} ${requesterData?.lastName}`,
    assignee: `${assignedData?.firstName} ${assignedData?.lastName}`,
    status: ticketData?.status || 'closed',
    priority: ticketData?.priority || 'low',
    fillingDate: ticketData?.fillingDate || new Date(),
    finishDate: ticketData?.finishDate,
    tags: ticketData?.tags || []
  }

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.DetailsContainer>
          <Link to={{ screen: 'MyTickets' }}>
            <Icon name='arrow-left' color={theme.colors.text} size={40} />
          </Link>
          <DetailsSection
            values={data}
          />
        </Styled.DetailsContainer>
      </Styled.RootContainer>
    </ScrollView>
  )
}