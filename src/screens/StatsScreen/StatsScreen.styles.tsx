import styled from '@emotion/native'
import { isMobile } from 'react-device-detect'

const RootContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

const ColumnContainer = styled.View`
  display: flex;
  flex-direction: ${!isMobile ? 'column' : 'row'};
`

export {
  RootContainer,
  ColumnContainer,
}