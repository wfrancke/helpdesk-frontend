import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'

import { LoginScreen } from '../screens/LoginScreen/LoginScreen'
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen'

export const MainRoutes = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </NativeRouter>
  )
}