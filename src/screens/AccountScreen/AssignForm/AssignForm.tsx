import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import * as Styled from '../AccountScreen.styles'

const placeholderTeams = [
  {
    id: 1,
    name: 'Sample team A'
  },
  {
    id: 2,
    name: 'Sample team B'
  },
  {
    id: 3,
    name: 'Sample team C'
  },
  {
    id: 4,
    name: 'Sample team D'
  },
  
]

export const AssignForm = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedTeam, setSelectedTeam] = useState(placeholderTeams[0])

  const handleTeamChange = () => {
    console.log(selectedTeam)
  }

  return (
    <Styled.SectionContainer>
      <Styled.SectionTitle>
        {t('account.assign')}
      </Styled.SectionTitle>
      <MenuSelect
        visible={isMenuOpen}
        onDismiss={() => setIsMenuOpen(false)}
        onPress={() => setIsMenuOpen(true)}
        label={selectedTeam.name}
      >
        {placeholderTeams.map((team) => (
          <Menu.Item
            key={team.id}
            title={team.name}
            onPress={() => {
              setSelectedTeam(team)
              setIsMenuOpen(false)
            }}
          />
        ))}
      </MenuSelect>
      <Styled.Button
        label={t('common.submit')}
        onPress={handleTeamChange}
      />
    </Styled.SectionContainer>
  )
}