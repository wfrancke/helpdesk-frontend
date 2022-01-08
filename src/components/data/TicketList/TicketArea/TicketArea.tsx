import React from 'react'
import { Link } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { useUserQuery } from '../../../../api/users/users'
import * as Styled from './TicketArea.styles'

export interface TicketItemType {
  _id: string,
  title: string,
  priority: string,
  status: string,
  requesterId: string,
  assignedId: string
}

interface TicketAreaProps {
  values: TicketItemType
  isRequested: boolean
}

export const TicketArea = ({ values, isRequested }: TicketAreaProps) => {
  const { t } = useTranslation()

  const title = values.title.length >= 20
    ? values.title.substr(0, 16) + '...'
    : values.title

  const { data: userData } = useUserQuery(isRequested ? values.assignedId : values.requesterId)

  const getPriorityColor = (prio: string) => {
    if (prio === 'low') {
      return 'green'
    }
    if (prio === 'high') {
      return 'orange'
    }
    return 'red'
  }

  return (
    <Link to={{ screen: 'TicketDetails', params: { ticketId: values._id }}}
      style={{ marginTop: 8 }}
    >
      <Styled.RootContainer>
        <Styled.Title>
          {title}
        </Styled.Title>
        <Styled.Text>
          {`${userData?.firstName} ${userData?.lastName}`}
        </Styled.Text>
        <Styled.SecondaryContainer>
          <Styled.Text
            style={{
              color: getPriorityColor(values.priority)
            }}
          >
            {t(`ticketList.${values.priority}`)}
          </Styled.Text>
          <Styled.Text
            style={{
              color: values.status === 'open' ? 'green' : 'grey'
            }}
          >
            {t(`ticketList.${values.status}`)}
          </Styled.Text>
        </Styled.SecondaryContainer>
      </Styled.RootContainer>
    </Link>
  )
}