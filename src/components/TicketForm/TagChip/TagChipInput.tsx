import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'

import { theme } from '../../../themes'

interface TagChipInputProps {
  onSubmit: (name: string) => void
}

export const TagChipInput = ({
  onSubmit
}: TagChipInputProps) => {
  const { t } = useTranslation()
  const [currentName, setCurrentName] = useState<string>('')

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 230,
        margin: 10
      }}
    >
      <TextInput
        label={t('tickets.addTag')}
        onChangeText={(text) => setCurrentName(text)}
        style={{
          minWidth: 200,
        }}
      />
      <IconButton
        icon='plus'
        color={theme.colors.secondary}
        size={24}
        onPress={() => onSubmit(currentName)}
      />
    </View>
  )
}