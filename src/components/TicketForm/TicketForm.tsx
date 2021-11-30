import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../MenuSelect/MenuSelect'
import { Button } from '../Button/Button'
import { TagChip } from './TagChip/TagChip'
import { TagChipInput } from './TagChip/TagChipInput'
import * as Styled from './TicketForm.styles'

const placeholderTags = [
  {
    id: 1,
    name: 'Placeholder tag1',
  },
  {
    id: 2,
    name: 'Placeholder tag1',
  },
  {
    id: 3,
    name: 'Placeholder tag1',
  },
  {
    id: 4,
    name: 'Placeholder tag1',
  },
  {
    id: 5,
    name: 'Placeholder tag1',
  },
  {
    id: 6,
    name: 'Placeholder tag1',
  },
  {
    id: 7,
    name: 'Placeholder tag1',
  },
  
]

const alreadySelectedTags = [1, 4]

export const TicketForm = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedPrio, setSelectedPrio] = useState<string>('low')
  
  const [availableTags, setAvailableTags] = useState(placeholderTags)
  const [selectedTags, setSelectedTags] = useState<number[]>(alreadySelectedTags)


  const handleSelect = (id: number) => {
    setSelectedTags(selectedTags.includes(id)
      ? selectedTags.filter((tag) => tag !== id)
      : selectedTags.concat([id])
    )
  }

  const handlePrioChange = (prio: string) => {
    setSelectedPrio(prio)
    setIsMenuOpen(false)
  }

  const handleAddTag = (name: string) => {
    setAvailableTags(availableTags.concat(
      [{
        id: availableTags[availableTags.length-1].id+1,
        name: name
      }]
    ))
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
          {availableTags.map((tag) => (
            <TagChip
              key={tag.id}
              id={tag.id}
              name={tag.name}
              isSelected={selectedTags.includes(tag.id)}
              onSelect={handleSelect}
            />
          ))}
        </Styled.TagsContainer>
        <TagChipInput
          onSubmit={(name) => handleAddTag(name)}
        />
      </Styled.SectionContainer>
      <Button
        label={t('common.send')}
        onPress={handleConfirm}
      />
    </Styled.RootContainer>
  )
}