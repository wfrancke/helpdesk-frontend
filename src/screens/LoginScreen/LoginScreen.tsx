import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-native'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Button } from 'react-native-paper'

import { theme } from '../../themes'
import logo from '../../../assets/logo.png'
import * as Styled from './LoginScreen.styles'

export const LoginScreen = () => {
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
      >
        {t('login.forgot')}
      </Button>
      <Styled.LoginButton
        mode='contained'
        uppercase={false}
        onPress={() => console.log('halo')}
      >
        <Text style={{color: theme.colors.background, fontSize: 19}}>
          {t('login.login')}
        </Text>
      </Styled.LoginButton>
      <Link to='/register'>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={{color: theme.colors.text}}>{t('login.noAccount')}</Text>
          <Text style={{color: theme.colors.primary}}>{t('register.register')}</Text>
        </View>
      </Link>
    </Styled.RootContainer>
  )
}