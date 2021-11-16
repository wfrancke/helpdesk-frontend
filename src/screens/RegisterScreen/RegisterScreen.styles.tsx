import styled from '@emotion/native'
import { Title, TextInput, Button } from 'react-native-paper'

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

const LoginButton = styled(Button)`
  margin: 30px 0 0 0;
  width: 300px;
  height: 50px;
  justify-content: center;
  border-radius: 15px;
`

export {
  RootContainer,
  HeaderLogo,
  HeaderTitle,
  LoginInput,
  LoginButton,
}