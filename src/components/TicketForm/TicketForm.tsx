import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../MenuSelect/MenuSelect'
import { Button } from '../Button/Button'
import { TagChip } from './TagChip/TagChip'
import * as Styled from './TicketForm.styles'
import { useTagsQuery } from '../../api/tags/tags'

export const TicketForm = () => {
  const { t } = useTranslation()

  const { data } = useTagsQuery()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedPrio, setSelectedPrio] = useState<string>('low')
  const [selectedTags, setSelectedTags] = useState<string[]>([])


  const handleSelect = (name: string) => {
    setSelectedTags(selectedTags.includes(name)
      ? selectedTags.filter((tag) => tag !== name)
      : selectedTags.concat([name])
    )
  }

  const handlePrioChange = (prio: string) => {
    setSelectedPrio(prio)
    setIsMenuOpen(false)
  }

  const handleConfirm = () => {
    console.log(selectedTags)
  }

  return (
    <Styled.RootContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.title')}
        </Styled.SectionTitle>
        <Styled.TitleInput
          mode='outlined'
        />
      </Styled.SectionContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.description')}
        </Styled.SectionTitle>
        <Styled.DescriptionInput
          mode='outlined'
          multiline={true}
        />
      </Styled.SectionContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.priority')}
        </Styled.SectionTitle>
        <MenuSelect
          visible={isMenuOpen}
          onDismiss={() => setIsMenuOpen(false)}
          onPress={() => setIsMenuOpen(true)}
          label={t(`ticketList.${selectedPrio}`)}
        >
          <Menu.Item
            title={t('ticketList.low')}
            onPress={() => handlePrioChange('low')}
          />
          <Menu.Item
            title={t('ticketList.high')}
            onPress={() => handlePrioChange('high')}
          />
          <Menu.Item
            title={t('ticketList.critical')}
            onPress={() => handlePrioChange('critical')}
          />
        </MenuSelect>
      </Styled.SectionContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.tags')}
        </Styled.SectionTitle>
        <Styled.TagsContainer>
          {data?.map((tag) => (
            <TagChip
              key={tag._id}
              name={tag.name}
              isSelected={selectedTags.includes(tag.name)}
              onSelect={handleSelect}
            />
          ))}
        </Styled.TagsContainer>
      </Styled.SectionContainer>
      <Button
        label={t('common.send')}
        onPress={handleConfirm}
      />
    </Styled.RootContainer>
  )
}