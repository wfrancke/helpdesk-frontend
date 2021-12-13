import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import * as Styled from '../AccountScreen.styles'

export const LanguageForm = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language)

  const handleLanguageChange = () => {
    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.editLang')}
      </Styled.SectionTitle>
      <MenuSelect
        visible={isMenuOpen}
        onDismiss={() => setIsMenuOpen(false)}
        onPress={() => setIsMenuOpen(true)}
        label={t(`account.${selectedLanguage}`)}
      >
        <Menu.Item
          title={t('account.en')}
          onPress={() => {
            setSelectedLanguage('en')
            setIsMenuOpen(false)
          }}
        />
        <Menu.Item
          title={t('account.pl')}
          onPress={() => {
            setSelectedLanguage('pl')
            setIsMenuOpen(false)
          }}
        />
      </MenuSelect>
      <Styled.Button
        label={t('common.submit')}
        onPress={handleLanguageChange}
      />
    </Styled.SectionContainer>
  )
}