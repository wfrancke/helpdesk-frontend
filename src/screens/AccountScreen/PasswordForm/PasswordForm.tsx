import React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from '../AccountScreen.styles'

export const PasswordForm = () => {
  const { t } = useTranslation()

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.editPass')}
      </Styled.SectionTitle>
      <Styled.TextInput
        label={t('common.password')}
        mode='outlined'
      />
      <Styled.TextInput
        label={t('account.repeatPass')}
        mode='outlined'
        style={{marginBottom: 30}}
      />
      <Styled.Button
        onPress={() => console.log('pass change')}
        label={t('common.submit')}
      />
    </Styled.SectionContainer>
  )
}