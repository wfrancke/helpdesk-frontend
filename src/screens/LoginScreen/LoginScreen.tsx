import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-native'

import logo from '../../../assets/logo.png'
import * as Styled from './LoginScreen.styles'

export const LoginScreen = () => {
  const { t } = useTranslation()

  return (
    <Styled.RootContainer>
      <Styled.HeaderLogo source={logo}/>
      <Styled.HeaderTitle>
        {t('login.login')}
      </Styled.HeaderTitle>
      <Styled.LoginInput
        label={t('login.username')}
        mode='outlined'
      />
      <Styled.LoginInput
        label={t('common.password')}
        mode='outlined'
      />
    </Styled.RootContainer>
  )
}