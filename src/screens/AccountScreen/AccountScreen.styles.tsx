import styled from '@emotion/native'
import { Title, TextInput } from 'react-native-paper'
import { isMobile } from 'react-device-detect'

import { Button } from '../../components/Button/Button'

const RootContainer = styled.View`
  display: flex;
  flex-direction: ${isMobile === false ? 'row' : 'column'};
  justify-content: space-evenly;
  margin-top: 20px;
`

const ColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const SectionContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const SectionTitle = styled(Title)`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 25px;
`

const StyledTextInput = styled(TextInput)`
  margin: 5px 0;
  width: 300px;
  height: 50px;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

export {
  RootContainer,
  ColumnContainer,
  SectionContainer,
  SectionTitle,
  StyledTextInput as TextInput,
  StyledButton as Button,
}