import { Title } from 'react-native-paper'
import styled from '@emotion/native'
import { TextInput } from 'react-native-paper'

import { theme } from '../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeaderLogo = styled.Image`
  width: 300px;
  height: 60px;
`

const HeaderTitle = styled(Title)`
  margin: 20px;
  font-weight: bold;
  font-size: 28px;
`

const LoginInput = styled(TextInput)`
  margin: 5px;
  width: 300px;
  height: 50px;
`

export {
  RootContainer,
  HeaderLogo,
  HeaderTitle,
  LoginInput,
}