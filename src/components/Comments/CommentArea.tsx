import React from 'react'
import { View, Text } from 'react-native'
import { format, parseISO } from 'date-fns'

import { theme } from '../../themes'

interface CommentAreaProps {
  content: string
  sender: string
  isSender?: boolean
  date: string
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
        marginVertical: 10,
        marginLeft: isSender ? 0 : 15,
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
        {date && format(parseISO(date), 'H:m, d.MM')}
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