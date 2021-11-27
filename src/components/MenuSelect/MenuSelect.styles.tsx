import styled from '@emotion/native'
import {  Button } from 'react-native-paper'

import { theme } from '../../themes'

export const MenuAnchor = styled(Button)`
  height: 50px;
  width: 260px;
  justify-content: center;
  border-radius: 4px;
  margin: 10px;
  background-color: ${theme.colors.background};
`