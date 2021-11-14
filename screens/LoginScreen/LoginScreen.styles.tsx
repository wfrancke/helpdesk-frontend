import { Title } from 'react-native-paper'
import styled from '@emotion/native'

import { theme } from '../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderTitle = styled(Title)`
  color: ${theme.colors.primary};
`

export {
  RootContainer,
  HeaderTitle,
}