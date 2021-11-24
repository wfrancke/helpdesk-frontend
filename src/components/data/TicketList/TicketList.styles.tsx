import styled from '@emotion/native'

import { theme } from '../../../themes'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const ColumnHeadersContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-bottom: 0;
`

const Header = styled.Text`
  flex: 2;
  font-weight: 400;
  font-size: 19px;
  color: ${theme.colors.secondary};
`

const TitleHeader = styled(Header)`
  flex: 3;
`

const SecondaryContainer = styled.View`
  flex: 1.5;
  display: flex;
  flex-direction: row;
`

export {
  RootContainer,
  ColumnHeadersContainer,
  TitleHeader,
  Header,
  SecondaryContainer
}