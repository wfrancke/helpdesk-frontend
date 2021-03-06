import React, { useEffect, useState } from 'react'
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
import { TicketValues } from '../../../api/tickets/types'

export const MyTicketsScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const { data } = useMyTicketsQuery()

  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredData, setFilteredData] = useState<TicketValues[]>(data || [])
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Title')

  const handleSubmitTicket = () => {
    navigation.navigate('CreateTicket')
  }

  const handleSearchChange = (value: string) => {
    setSelectedMenuItem(value)
    switch (value) {
    case 'Title':
      setFilteredData(data?.filter((ticket) => ticket.title.toLowerCase().includes(searchInput)) || [])
      break
    case 'Description':
      setFilteredData(data?.filter((ticket) => ticket.description.toLowerCase().includes(searchInput)) || [])
      break
    case 'Status':
      setFilteredData(data?.filter((ticket) => ticket.status.toLowerCase().includes(searchInput)) || [])
      break
    case 'Priority':
      setFilteredData(data?.filter((ticket) => ticket.priority.toLowerCase().includes(searchInput)) || [])
      break
    case 'Tags':
      setFilteredData(data?.filter((ticket) => (ticket.tags.some((tag) => tag.toLowerCase().includes(searchInput)))) || [])
      break
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setFilteredData(data || [])
  }, [data])

  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.HeaderTitle>
          {t('tickets.myTickets')}
        </Styled.HeaderTitle>
        <Styled.ActionsContainer>
          <Styled.SearchInput
            onChangeText={(value) => setSearchInput(value.toLowerCase())}
            label={t('tickets.search')}
            mode='outlined'
            onKeyPress={() => handleSearchChange(selectedMenuItem)}
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
          <Styled.SubmitButton
            onPress={handleSubmitTicket}
            icon={() => <Icon name='plus' color={theme.colors.background} size={22} />}
            label={t('tickets.submit')}
          />
        </Styled.ActionsContainer>
        <TicketList
          items={filteredData}
          isRequested
        />
      </Styled.RootContainer>
    </ScrollView>
  )
}