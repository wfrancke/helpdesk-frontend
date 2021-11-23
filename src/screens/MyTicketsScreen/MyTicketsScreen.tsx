import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import { Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../themes'
import { TicketArea } from '../../components/data/TicketList/TicketArea/TicketArea'
import * as Styled from './MyTicketsScreen.styles'

export const MyTicketsScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(t('myTickets.sortByTitle'))

  const handleSubmitTicket = () => {
    //navigation.navigate('Submit ticket')
    console.log('Submit')
  }

  return (
    <Styled.RootContainer>
      <Styled.HeaderTitle>
        {t('myTickets.myTickets')}
      </Styled.HeaderTitle>
      <Styled.ActionsContainer>
        <Styled.SearchInput
          label={t('myTickets.searchByTitle')}
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
              setSelectedMenuItem(t('myTickets.sortByTitle'))
              setIsMenuOpen(false)
            }}
            title={t('myTickets.sortByTitle')}
          />
          <Menu.Item
            onPress={() => {
              setSelectedMenuItem(t('myTickets.sortByDate'))
              setIsMenuOpen(false)
            }}
            title={t('myTickets.sortByDate')}
          />
          <Menu.Item
            onPress={() => {
              setSelectedMenuItem(t('myTickets.sortByPriority'))
              setIsMenuOpen(false)
            }}
            title={t('myTickets.sortByPriority')}
          />
          <Menu.Item
            onPress={() => {
              setSelectedMenuItem(t('myTickets.sortByStatus'))
              setIsMenuOpen(false)
            }}
            title={t('myTickets.sortByStatus')}
          />
        </Menu>
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
      <TicketArea
        id={100}
        title='Sample title'
        name='Sample Requester Name'
        priority='Critical'
        status='Closed'
      />
    </Styled.RootContainer>
  )
}