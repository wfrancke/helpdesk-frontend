import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../../themes'

interface TagChipProps {
  name: string
  isSelected: boolean
  onSelect: (name: string) => void
}

export const TagChip = ({
  name,
  isSelected,
  onSelect
}: TagChipProps) => {
  return (
    <View
      style={{
        padding: 5,
        backgroundColor: isSelected ? theme.colors.accent : theme.colors.secondary,
        borderRadius: 30,
        maxWidth: 230,
        minHeight: 45,
        margin: 10
      }}
    >
      <Button
        onPress={() => onSelect(name)}
        uppercase={false}
        icon={() =>
          <Icon
            name={isSelected ? 'check' : 'close'}
            size={20}
            color={isSelected ? theme.colors.secondary : theme.colors.background}
          />
        }
      >
        <Text
          style={{
            color: isSelected ? theme.colors.secondary : theme.colors.background,
            fontWeight: '500',
            marginLeft: 14
          }}
        >
          {name}
        </Text>
      </Button>
    </View>
  )
}