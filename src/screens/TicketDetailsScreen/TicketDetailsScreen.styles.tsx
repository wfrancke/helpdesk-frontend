import styled from '@emotion/native'
import { Title } from 'react-native-paper'
import { isMobile } from 'react-device-detect'

import { theme } from '../../themes'

const RowContainer = styled.View`
  display: flex;
  flex-direction: ${isMobile === false ? 'row' : 'column'};
`

const RootContainer = styled(RowContainer)`
  margin: 20px;
`

const DetailsContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const SectionContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 15px;
  min-width: 300px;
`

const SectionTitle = styled(Title)`
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  color: ${theme.colors.secondary};
`

const StyledTitle = styled(Title)`
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  margin: 5px;
`

const Description = styled.Text`
  font-size: 18px;
  line-height: 18px;
  margin: 5px;
  max-width: ${isMobile === false ? '500px' : '300px'};
`

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 18px;
  margin: 5px;
  max-width: 240px;
`

export {
  RowContainer,
  RootContainer,
  DetailsContainer,
  SectionContainer,
  SectionTitle,
  StyledTitle as Title,
  Description,
  StyledText as Text,
}