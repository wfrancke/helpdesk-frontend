import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { TeamMemberTicketsArea } from '../../../components/data/TeamMemberTicketsArea/TeamMemberTicketsArea'
import * as Styled from '../TicketsScreen.styles'

const placeholderTickets = [
  {
    id: 1,
    title: 'Sample Title1',
    name: 'Sample Assignee Name',
    priority: 'critical',
    status: 'closed'
  },
  {
    id: 2,
    title: 'Sample Title2',
    name: 'Sample Assignee Name',
    priority: 'critical',
    status: 'closed'
  },
  {
    id: 3,
    title: 'Sample Title3',
    name: 'Sample Assignee Name',
    priority: 'critical',
    status: 'closed'
  },
  {
    id: 4,
    title: 'Sample Title4',
    name: 'Sample Assignee Name',
    priority: 'critical',
    status: 'closed'
  },
]

const placeholderTeam = [
  {
    id: 1,
    name: 'Team member 1',
    tickets: placeholderTickets
  },
  {
    id: 2,
    name: 'Team member 2',
    tickets: placeholderTickets
  },
]

export const TeamTicketsScreen = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(t('Title'))

  const handleSortChange = (value: string) => {
    setSelectedMenuItem(value)
    setIsMenuOpen(false)
  }

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.HeaderTitle>
          {t('tickets.teamTickets')}
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
        {placeholderTeam.map((member) => (
          <TeamMemberTicketsArea
            key={member.id}
            name={member.name}
            items={member.tickets}
          />
        ))}
      </Styled.RootContainer>
    </ScrollView>
  )
}