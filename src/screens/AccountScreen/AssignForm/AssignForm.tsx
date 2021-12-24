import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'react-native-paper'

import { MenuSelect } from '../../../components/MenuSelect/MenuSelect'
import { useTeamsQuery } from '../../../api/teams/teams'
import { TeamValues } from '../../../api/teams/types'
import { useTeamAssignmentMutation } from '../../../api/users/users'
import * as Styled from '../AccountScreen.styles'

export const AssignForm = () => {
  const { t } = useTranslation()

  const { mutate } = useTeamAssignmentMutation()

  const { data } = useTeamsQuery()

  const placeholderTeam = {
    _id: '-',
    name: t('account.placeholder'),
    managerId: ''
  }

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [teams, setTeams] = useState<TeamValues[]>([placeholderTeam])
  const [selectedTeam, setSelectedTeam] = useState<TeamValues>(placeholderTeam)

  useEffect(() => {
    setTeams([placeholderTeam].concat(data || []))
  }, [data])

  const handleTeamChange = (values: TeamValues) => {
    if (values._id!=='-') {
      mutate({ teamId: values._id })
    }
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
        {teams.map((team) => (
          <Menu.Item
            key={team._id}
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
        onPress={() => handleTeamChange(selectedTeam)}
      />
    </Styled.SectionContainer>
  )
}