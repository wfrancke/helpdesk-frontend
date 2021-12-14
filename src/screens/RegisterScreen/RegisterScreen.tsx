import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { HelperText } from 'react-native-paper'
import { useFormik } from 'formik'

import { theme } from '../../themes'
import logo from '../../../assets/logo.png'
import { registerSchema } from '../../schemas/registerSchema'
import { useSignUpMutation } from '../../api/users/users'
import * as Styled from './RegisterScreen.styles'

interface RegisterFields {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export const RegisterScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const { mutate } = useSignUpMutation({
    onSuccess: () => navigation.navigate('Login')
  })

  const onSubmit = (values: RegisterFields) => {
    mutate(values)
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormik<RegisterFields>({
    initialValues: { 
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
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
        {t('register.createAccount')}
      </Styled.HeaderTitle>
      <Styled.LoginInput
        label={t('common.firstName')}
        mode='outlined'
        value={values.firstName}
        onChangeText={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
        error={!!errors.firstName}
      />
      <HelperText 
        type='error'
        visible={!!errors.firstName}
      >
        {t(errors.firstName || '')}
      </HelperText>
      <Styled.LoginInput
        label={t('common.lastName')}
        mode='outlined'
        value={values.lastName}
        onChangeText={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
        error={!!errors.lastName}
      />
      <HelperText 
        type='error'
        visible={!!errors.lastName}
      >
        {t(errors.lastName || '')}
      </HelperText>
      <Styled.LoginInput
        label={t('common.email')}
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
      <View style={{margin: 30}}>
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
        <Styled.LoginInput
          label={t('register.repeatPassword')}
          mode='outlined'
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          error={!!errors.confirmPassword}
          secureTextEntry={true}
        />
        <HelperText 
          type='error'
          visible={!!errors.confirmPassword}
        >
          {t(errors.confirmPassword || '')}
        </HelperText>
      </View>
      <Styled.LoginButton
        onPress={handleSubmit}
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