import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAssignedTicketsQuery } from '../../../api/tickets/tickets'

import { TicketList } from '../TicketList/TicketList'
import * as Styled from './TeamMemberTicketsArea.styles'

interface TeamMemberTicketsAreaProps {
  id: string
  name: string
}

export const TeamMemberTicketsArea = ({
  id,
  name,
}: TeamMemberTicketsAreaProps ) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const { data } = useAssignedTicketsQuery(id)

  return (
    <Styled.RootContainer>
      <Button
        onPress={() => setIsToggled(!isToggled)}
        uppercase={false}
        icon={({color}) => <Icon size={23} name={isToggled? 'chevron-down' : 'chevron-up'} color={color} />}
        contentStyle={{
          flexDirection: 'row-reverse'
        }}
        style={{ marginTop: 10 }}
      >
        <Styled.MemberText>
          {name}
        </Styled.MemberText>
      </Button>
      {isToggled && (
        <TicketList
          items={data || []}
        />
      )}
    </Styled.RootContainer>
  )
}