import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { TicketList } from '../../../components/data/TicketList/TicketList'
import * as Styled from '../TicketsScreen.styles'

const placeholderData = [
  {
    id: 1,
    title: 'Sample Title1',
    name: 'Sample Requester Name',
    priority: 'critical',
    status: 'closed'
  },
  {
    id: 2,
    title: 'Sample Title2',
    name: 'Sample Requester Name',
    priority: 'critical',
    status: 'closed'
  },
  {
    id: 3,
    title: 'Sample Title3',
    name: 'Sample Requester Name',
    priority: 'critical',
    status: 'closed'
  },
  {
    id: 4,
    title: 'Sample Title4',
    name: 'Sample Requester Name',
    priority: 'critical',
    status: 'closed'
  },
]

export const AssignedTicketsScreen = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Title')

  const handleSortChange = (value: string) => {
    setSelectedMenuItem(value)
    setIsMenuOpen(false)
  }

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.HeaderTitle>
          {t('tickets.assignedTickets')}
        </Styled.HeaderTitle>
        <Styled.ActionsContainer>
          <Styled.SearchInput
            label={t('tickets.searchByTitle')}
            mode='outlined'
          />
          <MenuSelect
            label={t(`tickets.sortBy${selectedMenuItem}`)}
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            onPress={() => setIsMenuOpen(true)}
          >
            <Menu.Item
              onPress={() => handleSortChange('Title')}
              title={t('tickets.sortByTitle')}
            />
            <Menu.Item
              onPress={() => handleSortChange('Date')}
              title={t('tickets.sortByDate')}
            />
            <Menu.Item
              onPress={() => handleSortChange('Priority')}
              title={t('tickets.sortByPriority')}
            />
            <Menu.Item
              onPress={() => handleSortChange('Status')}
              title={t('tickets.sortByStatus')}
            />
          </MenuSelect>
        </Styled.ActionsContainer>
        <TicketList
          items={placeholderData}
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}