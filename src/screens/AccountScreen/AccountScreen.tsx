import React from 'react'
import { ScrollView } from 'react-native'

import { AccountDetailsForm } from './AccountDetailsForm/AccountDetailsForm'
import { LanguageForm } from './LanguageForm.tsx/LanguageForm'
import * as Styled from './AccountScreen.styles'

export const AccountScreen = () => {
  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.ColumnContainer>
          <AccountDetailsForm />
          <LanguageForm />
        </Styled.ColumnContainer>
      </Styled.RootContainer>
    </ScrollView>
  )
}