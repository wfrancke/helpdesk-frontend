import React from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileQuery } from '../../../api/users/users'

import * as Styled from '../AccountScreen.styles'

export const AccountDetailsForm = () => {
  const { t } = useTranslation()

  const { data } = useProfileQuery()

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.editDetails')}
      </Styled.SectionTitle>
      <Styled.TextInput
        label={t('common.firstName')}
        mode='outlined'
        value={data?.firstName || ''}
      />
      <Styled.TextInput
        label={t('common.lastName')}
        mode='outlined'
        value={data?.lastName || ''}
      />
      <Styled.TextInput
        label={t('common.email')}
        mode='outlined'
        value={data?.email || ''}
      />
      <Styled.TextInput
        label={t('common.phoneNumber')}
        mode='outlined'
      />
      <Styled.TextInput
        label={t('common.username')}
        mode='outlined'
        style={{marginBottom: 30}}
      />
      <Styled.Button
        onPress={() => console.log('data change')}
        label={t('common.submit')}
      />
    </Styled.SectionContainer>
  )
}