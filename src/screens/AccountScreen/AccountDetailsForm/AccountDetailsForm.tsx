import React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from '../AccountScreen.styles'

export const AccountDetailsForm = () => {
  const { t } = useTranslation()

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.editDetails')}
      </Styled.SectionTitle>
      <Styled.TextInput
        label={t('common.firstName')}
        mode='outlined'
      />
      <Styled.TextInput
        label={t('common.lastName')}
        mode='outlined'
      />
      <Styled.TextInput
        label={t('common.email')}
        mode='outlined'
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