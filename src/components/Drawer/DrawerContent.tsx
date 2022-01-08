import React, { useState } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Dimensions } from 'react-native'
import { useTranslation } from 'react-i18next'

import logo from '../../../assets/logoWhite.png'
import { useRole } from '../../hooks/useRole'
import { theme } from '../../themes'
import * as Styled from './DrawerContent.styles'

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { t } = useTranslation()
  const [lastClicked, setLastClicked] = useState<number>(0)

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
            label={t('drawer.myTickets')}
            onPress={() => {
              setLastClicked(1)
              props.navigation.navigate('MyTickets')
            }}
            focused={lastClicked === 1}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          {(useRole('employee') || useRole('manager')) && (
            <Styled.DrawerItem
              icon={(props) => <Icon name='at' {...props} />}
              label={t('drawer.assignedTickets')}
              onPress={() => {
                setLastClicked(2)
                props.navigation.navigate('AssignedTickets')
              }}
              focused={lastClicked === 2}
              inactiveBackgroundColor={theme.colors.accent}
              activeBackgroundColor={theme.colors.background}
              inactiveTintColor={theme.colors.secondary}
              activeTintColor={theme.colors.primary}
            />
          )}
          {useRole('manager') && (
            <>
              <Styled.DrawerItem
                icon={(props) => <Icon name='account-group' {...props} />}
                label={t('drawer.teamTickets')}
                onPress={() => {
                  setLastClicked(3)
                  props.navigation.navigate('TeamTickets')
                }}
                focused={lastClicked === 3}
                inactiveBackgroundColor={theme.colors.accent}
                activeBackgroundColor={theme.colors.background}
                inactiveTintColor={theme.colors.secondary}
                activeTintColor={theme.colors.primary}
              />
              <Styled.DrawerItem
                icon={(props) => <Icon name='chart-bar' {...props} />}
                label={t('drawer.statistics')}
                onPress={() => {
                  setLastClicked(4)
                  props.navigation.navigate('MyTickets')
                }}
                focused={lastClicked === 4}
                inactiveBackgroundColor={theme.colors.accent}
                activeBackgroundColor={theme.colors.background}
                inactiveTintColor={theme.colors.secondary}
                activeTintColor={theme.colors.primary}
              />
            </>
          )}
          <Styled.DrawerItem
            icon={(props) => <Icon name='account-circle' {...props} />}
            label={t('drawer.account')}
            onPress={() => {
              setLastClicked(5)
              props.navigation.navigate('Account')
            }}
            focused={lastClicked === 5}
            inactiveBackgroundColor={theme.colors.accent}
            activeBackgroundColor={theme.colors.background}
            inactiveTintColor={theme.colors.secondary}
            activeTintColor={theme.colors.primary}
          />
          
        </Styled.FirstContainer>
        <Styled.DrawerItem
          icon={(props) => <Icon name='logout' {...props} />}
          label={t('drawer.logOut')}
          onPress={handleLogOut}
          inactiveTintColor={theme.colors.secondary}
        />
      </View>
    </Styled.RootContainer>
  )
}