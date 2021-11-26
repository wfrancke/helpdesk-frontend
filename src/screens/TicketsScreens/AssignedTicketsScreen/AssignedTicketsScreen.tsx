import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, ScrollView } from 'react-native'
import { Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../../themes'
import { TicketList } from '../../../components/data/TicketList/TicketList'
import * as Styled from '../TicketsScreen.styles'

const placeholderData = [
  {
    id: 1,
    title: 'Sample Title1',
    name: 'Sample Requester Name',
    priority: 'Critical',
    status: 'Closed'
  },
  {
    id: 2,
    title: 'Sample Title2',
    name: 'Sample Requester Name',
    priority: 'Critical',
    status: 'Closed'
  },
  {
    id: 3,
    title: 'Sample Title3',
    name: 'Sample Requester Name',
    priority: 'Critical',
    status: 'Closed'
  },
  {
    id: 4,
    title: 'Sample Title4',
    name: 'Sample Requester Name',
    priority: 'Critical',
    status: 'Closed'
  },
]

export const AssignedTicketsScreen = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(t('tickets.sortByTitle'))

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
          <Menu
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            anchor={
              <Styled.SortMenuAnchor
                mode='outlined'
                uppercase={false}
                onPress={() => setIsMenuOpen(true)}
                icon={({ size }) => <Icon name='chevron-down' color={theme.colors.text} size={size}/>}
                contentStyle={{
                  flexDirection: 'row-reverse'
                }}
              >
                <Text style={{
                  color: theme.colors.text,
                  fontSize: 19
                }}>
                  {selectedMenuItem}
                </Text>
              </Styled.SortMenuAnchor>
            }
          >
            <Menu.Item
              onPress={() => {
                setSelectedMenuItem(t('tickets.sortByTitle'))
                setIsMenuOpen(false)
              }}
              title={t('tickets.sortByTitle')}
            />
            <Menu.Item
              onPress={() => {
                setSelectedMenuItem(t('tickets.sortByDate'))
                setIsMenuOpen(false)
              }}
              title={t('tickets.sortByDate')}
            />
            <Menu.Item
              onPress={() => {
                setSelectedMenuItem(t('tickets.sortByPriority'))
                setIsMenuOpen(false)
              }}
              title={t('tickets.sortByPriority')}
            />
            <Menu.Item
              onPress={() => {
                setSelectedMenuItem(t('tickets.sortByStatus'))
                setIsMenuOpen(false)
              }}
              title={t('tickets.sortByStatus')}
            />
          </Menu>
        </Styled.ActionsContainer>
        <TicketList
          items={placeholderData}
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}