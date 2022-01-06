import React from 'react'
import { View, Text } from 'react-native'
import { format } from 'date-fns'

import { theme } from '../../themes'

interface CommentAreaProps {
  content: string
  sender: string
  isSender?: boolean
  date: Date
}

export const CommentArea = ({
  content,
  sender,
  isSender,
  date
}: CommentAreaProps) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 10,
        backgroundColor: isSender ? theme.colors.accent : theme.colors.secondary,
        borderRadius: 15,
        maxWidth: 280,
        minHeight: 100,
        margin: 10
      }}
    >
      <Text
        style={{
          position: 'absolute',
          right: 10,
          fontSize: 12,
          color: isSender ? theme.colors.secondary : theme.colors.background,
        }}
      >
        {format(date, 'd.MM H:m')}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: isSender ? theme.colors.secondary : theme.colors.background,
        }}
      >
        {sender}
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: isSender ? theme.colors.secondary : theme.colors.background,
        }}
      >
        {content}
      </Text>
    </View>
  )
}