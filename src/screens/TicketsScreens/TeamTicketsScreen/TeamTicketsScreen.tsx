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

  const handleSearchChange = (value: string) => {
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
            label={t(`tickets.searchBy${selectedMenuItem}`)}
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            onPress={() => setIsMenuOpen(true)}
          >
            <Menu.Item
              onPress={() => handleSearchChange('Title')}
              title={t('tickets.searchByTitle')}
            />
            <Menu.Item
              onPress={() => handleSearchChange('Description')}
              title={t('tickets.searchByDescription')}
            />
            <Menu.Item
              onPress={() => handleSearchChange('Priority')}
              title={t('tickets.searchByPriority')}
            />
            <Menu.Item
              onPress={() => handleSearchChange('Status')}
              title={t('tickets.searchByStatus')}
            />
            <Menu.Item
              onPress={() => handleSearchChange('Tags')}
              title={t('tickets.searchByTags')}
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