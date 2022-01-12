import React from 'react'
import { View } from 'react-native'

import { theme } from '../../../themes'
import * as Styled from './StatsTable.styles'

interface Stat {
  name: string
  value: string
}

interface StatsTableProps {
  title: string
  data: Stat[]
}

export const StatsTable = ({
  title,
  data
}: StatsTableProps) => {
  return(
    <Styled.RootContainer>
      <Styled.Title>
        {title}
      </Styled.Title>
      {data.map((stat) => (
        <Styled.RowContainer key={stat.name}>
          <Styled.LineContainer>
            <Styled.Text>
              {stat.name}
            </Styled.Text>
            <Styled.ValueText>
              {stat.value}
            </Styled.ValueText>
          </Styled.LineContainer>
          <View
            style={{
              borderBottomColor: theme.colors.secondary,
              borderBottomWidth: 1,
              margin: 5
            }}
          />
        </Styled.RowContainer>
      ))}
    </Styled.RootContainer>
  )
}