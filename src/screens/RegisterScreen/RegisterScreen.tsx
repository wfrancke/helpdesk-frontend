import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@react-navigation/native'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Button } from 'react-native-paper'

import { theme } from '../../themes'
import logo from '../../../assets/logo.png'
import * as Styled from './RegisterScreen.styles'

export const RegisterScreen = () => {
  const { t } = useTranslation()

  const styles = StyleSheet.create({
    rootContainer: {
      height: Dimensions.get('window').height
    },
  })

  return (
    <Styled.RootContainer style={styles.rootContainer}>
      <Styled.HeaderLogo source={logo}/>
      <Styled.HeaderTitle>
        {t('register.createAccount')}
      </Styled.HeaderTitle>
      <Styled.LoginInput
        label={t('common.firstName')}
        mode='outlined'
      />
      <Styled.LoginInput
        label={t('common.lastName')}
        mode='outlined'
      />
      <Styled.LoginInput
        label={t('common.email')}
        mode='outlined'
      />
      <View style={{margin: 30}}>
        <Styled.LoginInput
          label={t('common.password')}
          mode='outlined'
        />
        <Styled.LoginInput
          label={t('register.repeatPassword')}
          mode='outlined'
        />
      </View>
      <Styled.LoginButton
        onPress={() => console.log('halo')}
        label={t('register.register')}
      />
      <Link to={{ screen: 'Login'}}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={{color: theme.colors.text}}>{t('register.alreadyAccount')}</Text>
          <Text style={{color: theme.colors.primary}}>{t('login.login')}</Text>
        </View>
      </Link>
    </Styled.RootContainer>
  )
}