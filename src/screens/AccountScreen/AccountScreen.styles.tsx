import styled from '@emotion/native'
import { Title, TextInput, Button } from 'react-native-paper'

const RootContainer = styled.View`
  display: flex;
  flex-direction: row;
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
`

const StyledTextInput = styled(TextInput)`
  margin: 5px;
  width: 300px;
  height: 50px;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  justify-content: center;
  border-radius: 15px;
`

export {
  RootContainer,
  ColumnContainer,
  SectionContainer,
  SectionTitle,
  StyledTextInput as TextInput,
  StyledButton as Button,
}