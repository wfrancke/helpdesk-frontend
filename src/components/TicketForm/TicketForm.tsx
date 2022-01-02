import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HelperText, Menu } from 'react-native-paper'
import { useFormik } from 'formik'

import { MenuSelect } from '../MenuSelect/MenuSelect'
import { Button } from '../Button/Button'
import { TagChip } from './TagChip/TagChip'
import { useTagsQuery } from '../../api/tags/tags'
import { createTicketSchema } from '../../schemas/createTicketSchema'
import * as Styled from './TicketForm.styles'

interface TicketValues {
  title: string
  description: string
  priority: string
  tags: string[]
}

interface TicketFormProps {
  initialValues?: TicketValues
  onSubmit: (values: TicketValues) => void
}

export const TicketForm = ({
  initialValues,
  onSubmit
}: TicketFormProps) => {
  const { t } = useTranslation()
  const { data: tagsData } = useTagsQuery()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormik<TicketValues>({
    initialValues: initialValues || {
      title: '',
      description: '',
      priority: 'low',
      tags: []
    },
    validationSchema: createTicketSchema,
    onSubmit,
  })

  const handleSelect = (name: string) => {
    values.tags = values.tags.includes(name)
      ? values.tags.filter((tag) => tag !== name)
      : values.tags.concat([name])
  }

  const handlePrioChange = (prio: string) => {
    values.priority = prio
    setIsMenuOpen(false)
  }

  return (
    <Styled.RootContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.title')}
        </Styled.SectionTitle>
        <Styled.TitleInput
          mode='outlined'
          value={values.title}
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          error={!!errors.title}
        />
        <HelperText 
          type='error'
          visible={!!errors.title}
        >
          {t(errors.title || '')}
        </HelperText>
      </Styled.SectionContainer>
      <Styled.SectionContainer>
        <Styled.SectionTitle>
          {t('common.description')}
        </Styled.SectionTitle>
        <Styled.DescriptionInput
          mode='outlined'
          multiline={true}
          value={values.description}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          error={!!errors.description}
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
          label={t(`ticketList.${values.priority}`)}
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
          {tagsData?.map((tag) => (
            <TagChip
              key={tag._id}
              name={tag.name}
              isSelected={values.tags.includes(tag.name)}
              onSelect={handleSelect}
            />
          ))}
        </Styled.TagsContainer>
      </Styled.SectionContainer>
      <Button
        label={t('common.send')}
        onPress={handleSubmit}
      />
    </Styled.RootContainer>
  )
}