import styled from '@emotion/native'
import { Title } from 'react-native-paper'
import { isMobile } from 'react-device-detect'

import { theme } from '../../../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: ${isMobile === false ? 'row' : 'column'};
  min-width: 320px;
  min-height: 80px;
  padding: 20px;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 5px;
`

const StyledTitle = styled(Title)`
  flex: 3;
  font-weight: 600;
  font-size: 26px;
  min-width: 160px;
`

const StyledText = styled.Text`
  flex: 2;
  margin-top: 5px;
  font-weight: 400;
  font-size: 19px;
  min-width: 110px;
`

const SecondaryContainer = styled.View`
  flex: 1.5;
  display: flex;
  flex-direction: row;
`

export {
  RootContainer,
  StyledTitle as Title,
  StyledText as Text,
  SecondaryContainer
}