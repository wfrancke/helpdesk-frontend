import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider as PaperProvider, Title } from 'react-native-paper'

import { theme } from './themes'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Title>
        Siema siema o tej porze
      </Title>
      <StatusBar style="auto" />
    </PaperProvider>
  )
}