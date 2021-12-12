import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import { QueryClientProvider, QueryClient } from 'react-query'

import { I18nProvider } from './src/providers/i18nProvider'
import { theme } from './src/themes'
import { MainRoutes } from './src/routes/routes'
import { AuthProvider } from './src/providers/AuthProvider'
import { FetchProvider } from './src/providers/FetchProvider'

const queryClient = new QueryClient()

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <FetchProvider>
          <PaperProvider theme={theme}>
            <I18nProvider>
              <MainRoutes />
              <StatusBar style="auto" />
            </I18nProvider>
          </PaperProvider>
        </FetchProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}