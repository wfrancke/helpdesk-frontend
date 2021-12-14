import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Button, HelperText } from 'react-native-paper'
import { useFormik } from 'formik'

import { useSignInMutation } from '../../api/auth/auth'
import { useSetToken } from '../../providers/AuthProvider'
import { loginSchema } from '../../schemas/loginSchema'
import { theme } from '../../themes'
import logo from '../../../assets/logo.png'
import * as Styled from './LoginScreen.styles'

interface LoginFields {
  email: string
  password: string
}

export const LoginScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const setToken = useSetToken()

  const { mutate } = useSignInMutation({
    onSuccess: async ({ accessToken: newAccessToken }) => {
      setToken(newAccessToken)
      navigation.navigate('Home')
    },
  })

  
  const onSubmit = (values: LoginFields) => {
    mutate({ email: values.email, password: values.password })
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormik<LoginFields>({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit,
  })


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
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={!!errors.email}
      />
      <HelperText 
        type='error'
        visible={!!errors.email}
      >
        {t(errors.email || '')}
      </HelperText>
      <Styled.LoginInput
        label={t('common.password')}
        mode='outlined'
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={!!errors.password}
        secureTextEntry={true}
      />
      <HelperText 
        type='error'
        visible={!!errors.password}
      >
        {t(errors.password || '')}
      </HelperText>
      <Button
        color={theme.colors.text}
        uppercase={false}
        onPress={() => console.log('forgot')}
        style={{ marginBottom: 50 }}
      >
        {t('login.forgot')}
      </Button>
      <Styled.LoginButton
        onPress={handleSubmit}
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