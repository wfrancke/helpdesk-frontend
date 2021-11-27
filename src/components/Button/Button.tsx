import React from 'react'
import { Text } from 'react-native'

import { theme } from '../../themes'
import { Button } from './Button.styles'

interface ButtonProps {
  onPress: () => void,
  label: string,
  icon?: any
}

const CustomButton = ({
  onPress,
  label,
  icon
}: ButtonProps) => (
  <Button
    mode='contained'
    uppercase={false}
    onPress={onPress}
    icon={icon}
  >
    <Text style={{color: theme.colors.background, fontSize: 19}}>
      {label}
    </Text>
  </Button>
)

export {
  CustomButton as Button
}