import styled from '@emotion/native'
import { Title, TextInput, Button as PaperButton } from 'react-native-paper'

import { Button } from '../../components/Button/Button'
import { theme } from '../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 30px 5%;
`

const HeaderTitle = styled(Title)`
  margin: 20px 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
`

const ActionsContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SearchInput = styled(TextInput)`
  flex: 2;
  min-width: 300px;
  height: 50px;
  margin: 10px;
  margin-top: 5px;
`

const SortMenuAnchor = styled(PaperButton)`
  height: 50px;
  width: 260px;
  justify-content: center;
  border-radius: 4px;
  margin: 10px;
  background-color: ${theme.colors.background};
`

const SubmitButton = styled(Button)`
  margin: 10px;
`

export {
  RootContainer,
  HeaderTitle,
  ActionsContainer,
  SearchInput,
  SortMenuAnchor,
  SubmitButton,
}