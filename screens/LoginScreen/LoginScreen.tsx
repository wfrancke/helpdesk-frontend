import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-native'

import * as Styled from './LoginScreen.styles'

export const LoginScreen = () => {
  const { t } = useTranslation()

  return (
    <Styled.RootContainer> 
      <Styled.HeaderTitle>
        {t('login.login')}
      </Styled.HeaderTitle>
    </Styled.RootContainer>
  )
}