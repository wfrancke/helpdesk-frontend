import React from 'react'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'

import { TicketItemType, TicketArea } from './TicketArea/TicketArea'
import * as Styled from './TicketList.styles'

interface TicketListProps {
  items: TicketItemType[]
  isRequested?: boolean
}

export const TicketList = ({ items, isRequested }: TicketListProps ) => {
  const { t } = useTranslation()

  return (
    <Styled.RootContainer>
      {isMobile === false && (
        <Styled.ColumnHeadersContainer>
          <Styled.TitleHeader>
            {t('common.title')}
          </Styled.TitleHeader>
          <Styled.Header>
            {t(isRequested ? 'ticketList.requester' : 'ticketList.assignee')}
          </Styled.Header>
          <Styled.SecondaryContainer>
            <Styled.Header>
              {t('common.priority')}
            </Styled.Header>
            <Styled.Header>
              {t('common.status')}
            </Styled.Header>
          </Styled.SecondaryContainer>
        </Styled.ColumnHeadersContainer>
      )}
      {items.map((item) => (
        <TicketArea
          key={item._id}
          values={item}
        />
      ))}
    </Styled.RootContainer>
  )
}