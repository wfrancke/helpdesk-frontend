import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Menu } from 'react-native-paper'
import { useUpdateTicketStatusMutation } from '../../../api/tickets/tickets'

import { Button } from '../../../components/Button/Button'
import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { Status } from '../../../types/Status'
import * as Styled from '../TicketDetailsScreen.styles'

interface TicketDetails {
  _id: string
  title: string
  description: string
  requester: string
  assignee: string
  status: string
  priority: string
  fillingDate: Date
  finishDate?: Date
  tags: string[]
}

interface DetailsSectionProps {
  values: TicketDetails
}

export const DetailsSection = ({ values }: DetailsSectionProps) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedStatus, setSelectedStatus] = useState<string>(values.status)

  useEffect(() => {
    setSelectedStatus(values.status)
  }, [values])

  const { mutate } = useUpdateTicketStatusMutation(values._id)

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status as Status)
    setIsMenuOpen(false)
  }

  const handleStatusSubmit = () => {
    mutate({ status: selectedStatus })
  }

  const handleEdit = () => {
    navigation.navigate('EditTicket', { ticketId: values._id })
  }

  return (
    <Styled.DetailsContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.title')}
        </Styled.SectionTitle>
        <Styled.Title>
          {values.title}
        </Styled.Title>
      </Styled.SectionContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.description')}
        </Styled.SectionTitle>
        <Styled.Description>
          {values.description}
        </Styled.Description>
      </Styled.SectionContainer>
      <Styled.RowContainer>
        <Styled.SectionContainer>
          <Styled.SectionTitle>
            {t('ticketList.requester')}
          </Styled.SectionTitle>
          <Styled.Text>
            {values.requester}
          </Styled.Text>
        </Styled.SectionContainer>
        <Styled.SectionContainer>
          <Styled.SectionTitle>
            {t('ticketList.assignee')}
          </Styled.SectionTitle>
          <Styled.Text>
            {values.assignee}
          </Styled.Text>
        </Styled.SectionContainer>
      </Styled.RowContainer>
      <Styled.RowContainer>
        <Styled.SectionContainer>
          <Styled.SectionTitle>
            {t('common.status')}
          </Styled.SectionTitle>
          <MenuSelect
            visible={isMenuOpen}
            onDismiss={() => setIsMenuOpen(false)}
            onPress={() => setIsMenuOpen(true)}
            label={t(`ticketList.${selectedStatus}`)}
          >
            <Menu.Item
              title={t('ticketList.closed')}
              onPress={() => handleStatusChange('closed')}
            />
            <Menu.Item
              title={t('ticketList.open')}
              onPress={() => handleStatusChange('open')}
            />
          </MenuSelect>
          <Button
            label={t('common.submit')}
            onPress={handleStatusSubmit}
          />
        </Styled.SectionContainer>
        <Styled.SectionContainer>
          <Styled.SectionTitle>
            {t('common.priority')}
          </Styled.SectionTitle>
          <Styled.Text>
            {t(`ticketList.${values.priority}`)}
          </Styled.Text>
        </Styled.SectionContainer>
      </Styled.RowContainer>
      <Styled.RowContainer>
        <Styled.SectionContainer>
          <Styled.SectionTitle>
            {t('common.filingDate')}
          </Styled.SectionTitle>
          <Styled.Text>
            {values.fillingDate.toString()}
          </Styled.Text>
        </Styled.SectionContainer>
        {values.finishDate && (
          <Styled.SectionContainer>
            <Styled.SectionTitle>
              {t('common.finishDate')}
            </Styled.SectionTitle>
            <Styled.Text>
              {values.finishDate.toString()}
            </Styled.Text>
          </Styled.SectionContainer>
        )}
      </Styled.RowContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.tags')}
        </Styled.SectionTitle>
        <Styled.Text>
          {values.tags.map((tag) => 
            `${tag}, `)}
        </Styled.Text>
      </Styled.SectionContainer>
      <Button
        label={t('common.edit')}
        onPress={handleEdit}
      />
    </Styled.DetailsContainer>
  )
}