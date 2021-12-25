import React from 'react'
import { ScrollView } from 'react-native'

import { AccountDetailsForm } from './AccountDetailsForm/AccountDetailsForm'
import { LanguageForm } from './LanguageForm/LanguageForm'
import { PasswordForm } from './PasswordForm/PasswordForm'
import { AssignForm } from './AssignForm/AssignForm'
import { useRole } from '../../hooks/useRole'
import { SpecialtyForm } from './SpecialtyForm/SpecialtyForm'
import * as Styled from './AccountScreen.styles'

export const AccountScreen = () => {
  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.ColumnContainer>
          <AccountDetailsForm/>
          <LanguageForm />
        </Styled.ColumnContainer>
        <Styled.ColumnContainer>
          <PasswordForm />
          {useRole('user') ? (
            <AssignForm />
          ) : (
            <SpecialtyForm />
          )}
        </Styled.ColumnContainer>
      </Styled.RootContainer>
    </ScrollView>
  )
}