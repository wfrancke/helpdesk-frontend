import React from 'react'
import { Text } from 'react-native'
import { Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../themes'
import { MenuAnchor } from './MenuSelect.styles'

interface MenuSelectProps {
  visible: boolean,
  onDismiss: () => void
  onPress: () => void
  label: string,
  children: React.ReactNode
}

export const MenuSelect = ({
  visible,
  onDismiss,
  onPress,
  label,
  children
}: MenuSelectProps) => {
  return (
    <Menu
      visible={visible}
      onDismiss={onDismiss}
      anchor={
        <MenuAnchor
          mode='outlined'
          uppercase={false}
          onPress={onPress}
          icon={({ size }) => <Icon name='chevron-down' color={theme.colors.text} size={size}/>}
          contentStyle={{
            flexDirection: 'row-reverse'
          }}
        >
          <Text style={{
            color: theme.colors.text,
            fontSize: 19
          }}>
            {label}
          </Text>
        </MenuAnchor>
      }
    >
      {children}
    </Menu>
  )
}