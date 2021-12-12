import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Button } from 'react-native-paper'

import { useSignInMutation } from '../../api/auth/auth'
import { useSetToken } from '../../providers/AuthProvider'
import { theme } from '../../themes'
import logo from '../../../assets/logo.png'
import * as Styled from './LoginScreen.styles'

export const LoginScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const setToken = useSetToken()

  const styles = StyleSheet.create({
    rootContainer: {
      height: Dimensions.get('window').height
    },
  })

  const { mutate } = useSignInMutation({
    onSuccess: async ({ accessToken: newAccessToken }) => {
      console.log(newAccessToken)
      setToken(newAccessToken)
    },
    onError: () => {
      console.log('error')
    }
  })

  const handleLogin = () => {
    mutate({ email: 'user@gmail.com', password: 'qwer1234' })
    navigation.navigate('Home')
  }

  return (
    <Styled.RootContainer style={styles.rootContainer}>
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
      <Button
        color={theme.colors.text}
        uppercase={false}
        onPress={() => console.log('forgot')}
        style={{ marginBottom: 50 }}
      >
        {t('login.forgot')}
      </Button>
      <Styled.LoginButton
        onPress={handleLogin}
        label={t('login.login')}
      />
      <Link to={{ screen: 'Register' }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={{color: theme.colors.text}}>{t('login.noAccount')}</Text>
          <Text style={{color: theme.colors.primary}}>{t('register.register')}</Text>
        </View>
      </Link>
    </Styled.RootContainer>
  )
}