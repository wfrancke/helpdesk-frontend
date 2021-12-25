import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAddTagMutation, useTagsQuery } from '../../../api/tags/tags'
import { useProfileQuery, useUpdateSpecialtyMutation } from '../../../api/users/users'

import { TagChip } from '../../../components/TicketForm/TagChip/TagChip'
import { TagChipInput } from '../../../components/TicketForm/TagChip/TagChipInput'
import * as Styled from '../AccountScreen.styles'

export const SpecialtyForm = () => {
  const { t } = useTranslation()

  const { data: tagsData, refetch } = useTagsQuery()
  const { data: userData } = useProfileQuery()
  const { mutate: addTag } = useAddTagMutation({
    onSuccess: () => {
      refetch()
    }
  })
  const { mutate: updateSpecialty } = useUpdateSpecialtyMutation()

  const [selectedTags, setSelectedTags] = useState<string[]>(userData?.specialty || [])


  const handleSelect = (name: string) => {
    setSelectedTags(selectedTags.includes(name)
      ? selectedTags.filter((tag) => tag !== name)
      : selectedTags.concat([name])
    )
  }

  const handleAddTag = (name: string) => {
    addTag({ name })
  }

  const handleConfirm = () => {
    updateSpecialty({ specialty: selectedTags })
  }

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('common.tags')}
      </Styled.SectionTitle>
      <Styled.TagsContainer>
        {tagsData?.map((tag) => (
          <TagChip
            key={tag._id}
            name={tag.name}
            isSelected={selectedTags.includes(tag.name)}
            onSelect={handleSelect}
          />
        ))}
      </Styled.TagsContainer>
      <TagChipInput
        onSubmit={(name) => handleAddTag(name)}
      />
      <Styled.Button
        label={t('common.submit')}
        onPress={handleConfirm}
      />
    </Styled.SectionContainer>
  )
}