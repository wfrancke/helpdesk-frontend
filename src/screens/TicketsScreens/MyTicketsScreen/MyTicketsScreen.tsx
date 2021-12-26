import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import { Menu } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../../themes'
import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { TicketList } from '../../../components/data/TicketList/TicketList'
import * as Styled from '../TicketsScreen.styles'
import { useMyTicketsQuery } from '../../../api/tickets/tickets'

export const MyTicketsScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const { data } = useMyTicketsQuery()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Title')

  const handleSubmitTicket = () => {
    navigation.navigate('CreateTicket')
  }

  const handleSortChange = (value: string) => {
    setSelectedMenuItem(value)
    setIsMenuOpen(false)
  }

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.HeaderTitle>
          {t('tickets.myTickets')}
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
          <Styled.SubmitButton
            onPress={handleSubmitTicket}
            icon={() => <Icon name='plus' color={theme.colors.background} size={22} />}
            label={t('tickets.submit')}
          />
        </Styled.ActionsContainer>
        <TicketList
          items={data || []}
          isRequested
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}