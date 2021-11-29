import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button as ConfirmButton } from '../../components/Button/Button'
import { TagChip } from '../../components/TicketForm/TagChip/TagChip'
import * as Styled from './TicketForm.styles'

const placeholderTags = [
  {
    id: 1,
    name: 'Placeholder tag1',
  },
  {
    id: 2,
    name: 'Placeholder tag1',
  },{
    id: 3,
    name: 'Placeholder tag1',
  },{
    id: 4,
    name: 'Placeholder tag1',
  },
]

const alreadySelectedTags = [1, 4]

export const TicketForm = () => {
  const { t } = useTranslation()
  const [selectedTags, setSelectedTags] = useState<number[]>(alreadySelectedTags)

  const handleSelect = (id: number) => {
    setSelectedTags(selectedTags.includes(id)
      ? selectedTags.filter((tag) => tag !== id)
      : selectedTags.concat([id])
    )
  }

  const handleConfirm = () => {
    console.log(selectedTags)
  }

  return (
    <Styled.RootContainer>
      {placeholderTags.map((tag) => (
        <TagChip
          key={tag.id}
          id={tag.id}
          name={tag.name}
          isSelected={selectedTags.includes(tag.id)}
          onSelect={handleSelect}
        />
      ))}
      <ConfirmButton
        label={t('common.send')}
        onPress={handleConfirm}
      />
    </Styled.RootContainer>
  )
}