import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { HelperText } from 'react-native-paper'

import { useProfileQuery, useUpdateOwnDetailsMutation } from '../../../api/users/users'
import { accountDetailsSchema } from '../../../schemas/accountDetailsSchema'
import * as Styled from '../AccountScreen.styles'

interface AccountDetailsFields {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

export const AccountDetailsForm = () => {
  const { t } = useTranslation()

  const { data } = useProfileQuery()

  const { mutate } = useUpdateOwnDetailsMutation({
    onSuccess: (data) => {
      console.log(data)
    },
  })

  const onSubmit = (values: AccountDetailsFields) => {
    mutate(values)
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormik<AccountDetailsFields>({
    initialValues: data || {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    },
    validationSchema: accountDetailsSchema,
    onSubmit,
    enableReinitialize: true,
  })

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.editDetails')}
      </Styled.SectionTitle>
      <Styled.TextInput
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
      <Styled.TextInput
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
      <Styled.TextInput
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
      <Styled.TextInput
        label={t('common.phoneNumber')}
        mode='outlined'
        value={values.phoneNumber}
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
        error={!!errors.phoneNumber}
      />
      <HelperText 
        type='error'
        visible={!!errors.phoneNumber}
      >
        {t(errors.phoneNumber || '')}
      </HelperText>
      <Styled.TextInput
        label={t('common.username')}
        mode='outlined'
        style={{marginBottom: 30}}
      />
      <Styled.Button
        onPress={handleSubmit}
        label={t('common.submit')}
      />
    </Styled.SectionContainer>
  )
}