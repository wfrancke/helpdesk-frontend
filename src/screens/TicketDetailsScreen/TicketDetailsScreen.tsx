import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { Link } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DetailsSection } from './DetailsSection/DetailsSection'
import { DrawerParamList } from '../HomeScreen/HomeScreen'
import { theme } from '../../themes'
import * as Styled from './TicketDetailsScreen.styles'

const placeholderDetails = {
  title: 'Sample ticket title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum sapien eu orci ultricies accumsan. In volutpat vitae justo a tincidunt. Cras feugiat a erat id molestie. Integer augue sem, volutpat convallis nibh quis, finibus venenatis lorem. Aliquam erat volutpat. Nullam non turpis euismod, porta quam et, ultricies odio. Aenean vitae enim neque. Pellentesque eu lorem ac tortor dictum imperdiet sit amet sed est. Praesent cursus convallis ex at egestas.',
  requester: 'Requester sample name',
  assignee: 'Assignee sample name',
  status: 'closed',
  priority: 'low',
  filingDate: new Date(),
  finishDate: new Date(),
  tags: ['tagA', 'tagB', 'tagC', 'tagD']
}

export const TicketDetailsScreen = ({
  route
}: DrawerScreenProps<DrawerParamList, 'TicketDetails'>) => {
  return (
    <ScrollView>
      <Styled.RootContainer>
        <Styled.DetailsContainer>
          <Link to={{ screen: 'MyTickets' }}>
            <Icon name='arrow-left' color={theme.colors.text} size={40} />
          </Link>
          <DetailsSection
            values={placeholderDetails}
          />
        </Styled.DetailsContainer>
      </Styled.RootContainer>
    </ScrollView>
  )
}