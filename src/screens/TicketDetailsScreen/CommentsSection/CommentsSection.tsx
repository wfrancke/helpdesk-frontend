import React from 'react'
import { useTranslation } from 'react-i18next'

import { CommentArea } from '../../../components/Comments/CommentArea'
import * as Styled from '../TicketDetailsScreen.styles'

// interface CommentsSectionProps {

// }

export const CommentsSection = () => {
  const { t } = useTranslation()

  return (
    <Styled.SectionContainer>
      <CommentArea 
        content='asdasdasdasd asdasdhas  saaaAAAAAAAAAAAAAAAWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWW'
        sender='Joe Mama'
        date={new Date()}
        isSender={false}
      />
    </Styled.SectionContainer>
  )
}