import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'

import { I18nProvider } from './providers/i18nProvider'
import { theme } from './themes'
import { MainRoutes } from './routes/routes'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <I18nProvider>
        <MainRoutes />
        <StatusBar style="auto" />
      </I18nProvider>
    </PaperProvider>
  )
}