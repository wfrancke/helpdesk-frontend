import React from 'react'
import { useTranslation } from 'react-i18next'
import { Title } from 'react-native-paper'

export const RegisterScreen = () => {
  const { t } = useTranslation()

  return (
    <Title>
      {t('register.register')}
    </Title>
  )
}