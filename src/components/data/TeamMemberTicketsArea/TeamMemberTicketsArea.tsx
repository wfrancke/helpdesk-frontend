import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useAssignedTicketsQuery } from '../../../api/tickets/tickets'
import { TicketValues } from '../../../api/tickets/types'
import { TicketList } from '../TicketList/TicketList'
import * as Styled from './TeamMemberTicketsArea.styles'

interface TeamMemberTicketsAreaProps {
  id: string
  name: string
  searchType: string
  searchInput: string
  refresh: number
}

export const TeamMemberTicketsArea = ({
  id,
  name,
  searchType,
  searchInput,
  refresh,
}: TeamMemberTicketsAreaProps ) => {
  
  const { data } = useAssignedTicketsQuery(id)
  
  const [filteredData, setFilteredData] = useState<TicketValues[]>(data || [])
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const handleSearchChange = () => {
    switch (searchType) {
    case 'Title':
      setFilteredData(data?.filter((ticket) => ticket.title.toLowerCase().includes(searchInput)) || [])
      break
    case 'Description':
      setFilteredData(data?.filter((ticket) => ticket.description.toLowerCase().includes(searchInput)) || [])
      break
    case 'Status':
      setFilteredData(data?.filter((ticket) => ticket.status.toLowerCase().includes(searchInput)) || [])
      break
    case 'Priority':
      setFilteredData(data?.filter((ticket) => ticket.priority.toLowerCase().includes(searchInput)) || [])
      break
    case 'Tags':
      setFilteredData(data?.filter((ticket) => (ticket.tags.some((tag) => tag.toLowerCase().includes(searchInput)))) || [])
      break
    }
  }

  useEffect(() => {
    handleSearchChange()
  }, [refresh])

  useEffect(() => {
    setFilteredData(data || [])
  }, [data])

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
          items={filteredData}
        />
      )}
    </Styled.RootContainer>
  )
}