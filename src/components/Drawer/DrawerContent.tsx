import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Dimensions } from 'react-native'

import logo from '../../../assets/logoWhite.png'
import { theme } from '../../themes'
import * as Styled from './DrawerContent.styles'

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const handleLogOut = () => {
    props.navigation.navigate('Login')
  }

  return (
    <Styled.RootContainer {...props}>
      <View style={{
        height: Dimensions.get('window').height - 20,
        justifyContent: 'space-between'}}
      >
        <Styled.FirstContainer>
          <Styled.HeaderLogo source={logo}/>
          <Styled.DrawerItem
            icon={(props) => <Icon name='email-send' {...props} />}
            label='My Tickets'
            onPress={() => props.navigation.navigate('MyTickets')}
            focused={props.state.history.length === 1}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          <Styled.DrawerItem
            icon={(props) => <Icon name='at' {...props} />}
            label='Assigned Tickets'
            onPress={() => props.navigation.navigate('AssignedTickets')}
            focused={props.state.history.length === 2}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          <Styled.DrawerItem
            icon={(props) => <Icon name='account-group' {...props} />}
            label='Team Tickets'
            onPress={() => props.navigation.navigate('MyTickets')}
            focused={props.state.history.length === 3}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          <Styled.DrawerItem
            icon={(props) => <Icon name='chart-bar' {...props} />}
            label='Statistics'
            onPress={() => props.navigation.navigate('MyTickets')}
            focused={props.state.history.length === 4}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          <Styled.DrawerItem
            icon={(props) => <Icon name='account-circle' {...props} />}
            label='Account'
            onPress={() => props.navigation.navigate('MyTickets')}
            focused={props.state.history.length === 5}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          
        </Styled.FirstContainer>
        <Styled.DrawerItem
          icon={(props) => <Icon name='logout' {...props} />}
          label='Log out'
          onPress={handleLogOut}
          inactiveTintColor={theme.colors.secondary}
        />
      </View>
    </Styled.RootContainer>
  )
}