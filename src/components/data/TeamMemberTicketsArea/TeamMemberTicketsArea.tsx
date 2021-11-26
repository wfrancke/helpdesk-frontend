import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TicketList } from '../TicketList/TicketList'
import { TicketItemType } from '../TicketList/TicketArea/TicketArea'
import * as Styled from './TeamMemberTicketsArea.styles'

interface TeamMemberTicketsAreaProps {
  name: string
  items: TicketItemType[]
}

export const TeamMemberTicketsArea = ({
  name,
  items
}: TeamMemberTicketsAreaProps ) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

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
          items={items}
        />
      )}
    </Styled.RootContainer>
  )
}