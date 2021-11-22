import styled from '@emotion/native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'

import { theme } from '../../themes'

const RootContainer = styled(DrawerContentScrollView)`
  background-color: ${theme.colors.accent};
`

const FirstContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderLogo = styled.Image`
  width: 240px;
  height: 50px;
  margin: 20px 0 50px 0;
`

const StyledDrawerItem = styled(DrawerItem)`
  width: 93%;
`

export {
  RootContainer,
  FirstContainer,
  HeaderLogo,
  StyledDrawerItem as DrawerItem
}