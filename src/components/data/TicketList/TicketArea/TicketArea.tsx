import React from 'react'
import { Link } from '@react-navigation/native'

import * as Styled from './TicketArea.styles'

export interface TicketItemType {
  id: number,
  title: string,
  name: string,
  priority: string,
  status: string
}

interface TicketAreaProps {
  values: TicketItemType
}

export const TicketArea = ({ values }: TicketAreaProps) => {
  return (
    <Link to={{ screen: 'TicketDetails', params: { ticketId: values.id }}}>
      <Styled.RootContainer>
        <Styled.Title>
          {values.title}
        </Styled.Title>
        <Styled.Text>
          {values.name}
        </Styled.Text>
        <Styled.SecondaryContainer>
          <Styled.Text>
            {values.priority}
          </Styled.Text>
          <Styled.Text>
            {values.status}
          </Styled.Text>
        </Styled.SecondaryContainer>
      </Styled.RootContainer>
    </Link>
  )
}