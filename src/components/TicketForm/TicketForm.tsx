import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HelperText, Menu } from 'react-native-paper'
import { useFormik } from 'formik'

import { useRole } from '../../hooks/useRole'
import { MenuSelect } from '../MenuSelect/MenuSelect'
import { Button } from '../Button/Button'
import { TagChip } from './TagChip/TagChip'
import { useTagsQuery } from '../../api/tags/tags'
import { useProfileQuery, useTeamMembersQuery } from '../../api/users/users'
import { createTicketSchema } from '../../schemas/createTicketSchema'
import * as Styled from './TicketForm.styles'

interface TicketValues {
  title: string
  description: string
  priority: string
  tags: string[]
  assignedId?: string
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
  const { data: profileData } = useProfileQuery()
  const { data: tagsData } = useTagsQuery()
  const { data: teamData } = useTeamMembersQuery()

  const profile = {
    ...profileData,
    _id: profileData?.id,
  }

  const [isPrioMenuOpen, setIsPrioMenuOpen] = useState<boolean>(false)
  const [isAssigneeMenuOpen, setIsAssigneeMenuOpen] = useState<boolean>(false)
  const [assigneeName, setAssigneeName] = useState<string>(!initialValues ? t('tickets.selectAuto') : t('ticketList.assignee'))

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    setFieldValue
  } = useFormik<TicketValues>({
    initialValues: initialValues || {
      title: '',
      description: '',
      priority: 'low',
      tags: [],
      assignedId: undefined
    },
    validationSchema: createTicketSchema,
    onSubmit,
  })

  const handleSelect = (name: string) => {
    setFieldValue(
      'tags',
      values.tags.includes(name)
        ? values.tags.filter((tag) => tag !== name)
        : values.tags.concat([name])
    )
  }

  const handlePrioChange = (prio: string) => {
    setFieldValue('priority', prio)
    setIsPrioMenuOpen(false)
  }

  const handleAssigneeChange = (assigneeId: string | undefined, assigneeName: string) => {
    setFieldValue('assignedId', assigneeId)
    setIsAssigneeMenuOpen(false)
    setAssigneeName(assigneeName)
    console.log(assigneeId)
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
          visible={isPrioMenuOpen}
          onDismiss={() => setIsPrioMenuOpen(false)}
          onPress={() => setIsPrioMenuOpen(true)}
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
      {useRole('manager') && (
        <Styled.SectionContainer>
          <Styled.SectionTitle>
            {t('ticketList.assignee')}
          </Styled.SectionTitle>
          <MenuSelect
            visible={isAssigneeMenuOpen}
            onDismiss={() => setIsAssigneeMenuOpen(false)}
            onPress={() => setIsAssigneeMenuOpen(true)}
            label={assigneeName}
          >
            {!initialValues && (
              <Menu.Item
                title={t('tickets.selectAuto')}
                onPress={() => handleAssigneeChange(undefined, t('tickets.selectAuto'))}
              />
            )}
            {teamData?.concat(profile || []).map((emp) => (
              <Menu.Item
                key={emp._id}
                title={`${emp.firstName} ${emp.lastName}`}
                onPress={() => handleAssigneeChange(emp._id, `${emp.firstName} ${emp.lastName}`)}
              />
            ))}
          </MenuSelect>
        </Styled.SectionContainer>
      )}
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