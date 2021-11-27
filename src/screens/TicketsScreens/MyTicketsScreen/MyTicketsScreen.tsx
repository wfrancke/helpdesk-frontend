import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Text, ScrollView } from 'react-native'
import { Menu } from 'react-native-paper'

import { theme } from '../../../themes'
import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { TicketList } from '../../../components/data/TicketList/TicketList'
import * as Styled from '../TicketsScreen.styles'

const placeholderData = [
  {
    id: 1,
    title: 'Sample title for assignment',
    name: 'Sample Assignee Name',
    priority: 'Critical',
    status: 'Closed'
  },
  {
    id: 2,
    title: 'Sample Title2',
    name: 'Sample Assignee Name',
    priority: 'Critical',
    status: 'Closed'
  },
  {
    id: 3,
    title: 'Sample Title3',
    name: 'Sample Assignee Name',
    priority: 'Critical',
    status: 'Closed'
  },
  {
    id: 4,
    title: 'Sample Title4',
    name: 'Sample Assignee Name',
    priority: 'Critical',
    status: 'Closed'
  },
]

export const MyTicketsScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(t('tickets.sortByTitle'))

  const handleSubmitTicket = () => {
    //navigation.navigate('Submit ticket')
    console.log('Submit')
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
            label={selectedMenuItem}
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            onPress={() => setIsMenuOpen(true)}
          >
            <Menu.Item
              onPress={() => handleSortChange(t('tickets.sortByTitle'))}
              title={t('tickets.sortByTitle')}
            />
            <Menu.Item
              onPress={() => handleSortChange(t('tickets.sortByDate'))}
              title={t('tickets.sortByDate')}
            />
            <Menu.Item
              onPress={() => handleSortChange(t('tickets.sortByPriority'))}
              title={t('tickets.sortByPriority')}
            />
            <Menu.Item
              onPress={() => handleSortChange(t('tickets.sortByStatus'))}
              title={t('tickets.sortByStatus')}
            />
          </MenuSelect>
          <Styled.SubmitButton
            mode='contained'
            uppercase={false}
            onPress={handleSubmitTicket}
          >
            <Text style={{color: theme.colors.background, fontSize: 19}}>
              {t('common.submit')}
            </Text>
          </Styled.SubmitButton>
        </Styled.ActionsContainer>
        <TicketList
          items={placeholderData}
          isRequested
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}