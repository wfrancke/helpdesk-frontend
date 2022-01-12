import styled from '@emotion/native'
import { Title } from 'react-native-paper'

import { theme } from '../../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 8px;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 5px;
  margin: 10px;
`
const StyledTitle = styled(Title)`
  font-weight: 600;
  font-size: 22px;
  min-width: 160px;
  max-width: 300px;
  margin: 10px;
`

const RowContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const LineContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledText = styled.Text`
  font-weight: 400;
  font-size: 19px;
  min-width: 110px;
  margin: 0 10px;
`

const ValueText = styled(StyledText)`
  position: relative;
  right: -30;
`

export {
  RootContainer,
  StyledTitle as Title,
  RowContainer,
  LineContainer,
  StyledText as Text,
  ValueText
}