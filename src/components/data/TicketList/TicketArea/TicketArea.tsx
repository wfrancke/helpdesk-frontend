import React from 'react'
import { Link } from '@react-navigation/native'

import * as Styled from './TicketArea.styles'

interface TicketAreaProps {
  id: number,
  title: string,
  name: string,
  priority: string,
  status: string
}

export const TicketArea = ({
  id,
  title,
  name,
  priority,
  status
}: TicketAreaProps) => {
  return (
    <Link to={{ screen: 'TicketDetails', params: { ticketId: id }}}>
      <Styled.RootContainer>
        <Styled.Title>
          {title}
        </Styled.Title>
        <Styled.Text>
          {name}
        </Styled.Text>
        <Styled.SecondaryContainer>
          <Styled.Text>
            {priority}
          </Styled.Text>
          <Styled.Text>
            {status}
          </Styled.Text>
        </Styled.SecondaryContainer>
      </Styled.RootContainer>
    </Link>
  )
}