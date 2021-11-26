import styled from '@emotion/native'
import { Title } from 'react-native-paper'

import { theme } from '../../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const MemberText = styled(Title)`
  font-size: 22px;
  color: ${theme.colors.primary}
`

export {
  RootContainer,
  MemberText
}