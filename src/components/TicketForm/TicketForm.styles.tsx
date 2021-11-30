import styled from '@emotion/native'
import { Title, TextInput } from 'react-native-paper'

const RootContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const SectionContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 15px;
`

const SectionTitle = styled(Title)`
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
`

const TitleInput = styled(TextInput)`
  min-width: 300px;
  max-width: 500px;
  height: 50px;
`

const DescriptionInput = styled(TextInput)`
  min-width: 300px;
  max-width: 700px;
  height: 150px;
`

const TagsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export {
  RootContainer,
  SectionContainer,
  SectionTitle,
  TitleInput,
  DescriptionInput,
  TagsContainer
}