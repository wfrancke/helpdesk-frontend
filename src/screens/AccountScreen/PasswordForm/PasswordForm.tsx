import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { HelperText } from 'react-native-paper'

import { useUpdatePasswordMutation } from '../../../api/users/users'
import { passwordSchema } from '../../../schemas/passwordSchema'
import * as Styled from '../AccountScreen.styles'

interface EditPasswordFields {
  password: string
  confirmPassword: string
}

export const PasswordForm = () => {
  const { t } = useTranslation()

  const { mutate } = useUpdatePasswordMutation({
    onSuccess: () => {
      console.log('siema')
    }
  })

  const onSubmit = (values: EditPasswordFields) => {
    mutate({ password: values.password })
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormik<EditPasswordFields>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: passwordSchema,
    onSubmit,
    enableReinitialize: true,
  })

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.editPass')}
      </Styled.SectionTitle>
      <Styled.TextInput
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
      <Styled.TextInput
        label={t('account.repeatPass')}
        mode='outlined'
        style={{marginBottom: 30}}
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
      <Styled.Button
        onPress={handleSubmit}
        label={t('common.submit')}
      />
    </Styled.SectionContainer>
  )
}