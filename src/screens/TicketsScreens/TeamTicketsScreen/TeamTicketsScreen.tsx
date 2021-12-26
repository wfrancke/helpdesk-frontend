import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { TeamMemberTicketsArea } from '../../../components/data/TeamMemberTicketsArea/TeamMemberTicketsArea'
import { useTeamMembersQuery } from '../../../api/users/users'
import * as Styled from '../TicketsScreen.styles'

export const TeamTicketsScreen = () => {
  const { t } = useTranslation()

  const { data } = useTeamMembersQuery()

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
        {data?.map((member) => (
          <TeamMemberTicketsArea
            key={member._id}
            id={member._id}
            name={`${member.firstName} ${member.lastName}`}
          />
        ))}
      </Styled.RootContainer>
    </ScrollView>
  )
}