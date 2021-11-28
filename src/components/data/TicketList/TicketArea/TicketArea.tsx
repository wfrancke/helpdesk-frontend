import React from 'react'
import { Link } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  const title = values.title.length >= 20
    ? values.title.substr(0, 16) + '...'
    : values.title

  return (
    <Link to={{ screen: 'TicketDetails', params: { ticketId: values.id }}}
      style={{ marginTop: 8 }}
    >
      <Styled.RootContainer>
        <Styled.Title>
          {title}
        </Styled.Title>
        <Styled.Text>
          {values.name}
        </Styled.Text>
        <Styled.SecondaryContainer>
          <Styled.Text>
            {t(`ticketList.${values.priority}`)}
          </Styled.Text>
          <Styled.Text>
            {t(`ticketList.${values.status}`)}
          </Styled.Text>
        </Styled.SecondaryContainer>
      </Styled.RootContainer>
    </Link>
  )
}