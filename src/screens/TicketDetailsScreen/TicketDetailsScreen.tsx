import React, { useMemo } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { Link } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DetailsSection } from './DetailsSection/DetailsSection'
import { CommentsSection } from './CommentsSection/CommentsSection'
import { DrawerParamList } from '../HomeScreen/HomeScreen'
import { theme } from '../../themes'
import * as Styled from './TicketDetailsScreen.styles'
import { useTicketQuery } from '../../api/tickets/tickets'
import { useProfileQuery, useUserQuery } from '../../api/users/users'

export const TicketDetailsScreen = ({
  route
}: DrawerScreenProps<DrawerParamList, 'TicketDetails'>) => {
  const { data: userData } = useProfileQuery()
  const { data: ticketData } = useTicketQuery(route.params.ticketId)
  const { data: requesterData } = useUserQuery(ticketData?.requesterId || '')
  const { data: assignedData } = useUserQuery(ticketData?.assignedId || '')
  

  const data = {
    _id: ticketData?._id || '',
    title: ticketData?.title || '',
    description: ticketData?.description || '',
    requester: `${requesterData?.firstName} ${requesterData?.lastName}\nmail: ${requesterData?.email}\nnum: ${requesterData?.phoneNumber}`,
    assignee: `${assignedData?.firstName} ${assignedData?.lastName}\nmail: ${assignedData?.email}\nnum: ${assignedData?.phoneNumber}`,
    status: ticketData?.status || 'closed',
    priority: ticketData?.priority || 'low',
    fillingDate: ticketData?.fillingDate || '',
    finishDate: ticketData?.finishDate,
    tags: ticketData?.tags || [],
  }

  const commentData = useMemo(() => (
    ticketData?.comments || []
  ), [ticketData])

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
        <CommentsSection
          values={commentData}
          user={`${userData?.firstName} ${userData?.lastName}`}
          ticketId={data._id}
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}