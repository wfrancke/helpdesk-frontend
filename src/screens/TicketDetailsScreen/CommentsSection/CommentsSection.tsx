import React, { useState } from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { IconButton, TextInput } from 'react-native-paper'

import { CommentArea } from '../../../components/Comments/CommentArea'
import { theme } from '../../../themes'
import { useCommentMutation } from '../../../api/tickets/tickets'
import { useRole } from '../../../hooks/useRole'
import * as Styled from '../TicketDetailsScreen.styles'
import { QueryClient } from 'react-query'

interface Comment {
  _id: string
  content: string
  sender: string
  date: string
  isPublic: boolean
}

interface CommentsSectionProps {
  values: Comment[]
  user: string
  ticketId: string
}

export const CommentsSection = ({
  values,
  user,
  ticketId
}: CommentsSectionProps) => {
  const [newComment, setNewComment] = useState<string>('')
  const [isPublic, setIsPublic] = useState<boolean>(true)
  const { t } = useTranslation()
  const queryClient = new QueryClient()

  const { mutateAsync } = useCommentMutation(ticketId, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['getTicket', ticketId]})
    }
  })

  const handleSendComment = async () => {
    await mutateAsync({
      content: newComment,
      date: new Date().toISOString(),
      sender: user,
      isPublic: isPublic
    })
  }

  return (
    <Styled.SectionContainer>
      <Styled.HeaderContainer>
        <Styled.Title>
          {t('tickets.comments')}
        </Styled.Title>
        {!useRole('user') && (
          <IconButton
            icon={isPublic ? 'earth' : 'lock'}
            size={24}
            onPress={() => setIsPublic(!isPublic)}
          />
        )}
      </Styled.HeaderContainer>
      {values.filter((comment) => comment.isPublic === isPublic).map((comment) => (
        <CommentArea
          key={comment._id}
          content={comment.content}
          sender={comment.sender}
          date={comment.date}
          isSender={user === comment.sender}
        />
      ))}
      <View
        style={{
          borderBottomColor: theme.colors.secondary,
          borderBottomWidth: 1,
          margin: 5
        }}
      />
      <Styled.HeaderContainer>
        <TextInput
          mode='outlined'
          label={t('tickets.typeComment')}
          onChangeText={(text) => setNewComment(text)}
          style={{
            minWidth: 200,
          }}
        />
        <IconButton
          icon='send'
          size={24}
          onPress={() => handleSendComment()}
        />
      </Styled.HeaderContainer>
    </Styled.SectionContainer>
  )
}